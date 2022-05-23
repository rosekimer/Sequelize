const express = require('express');
const Playlist = require('./models/playlist');

//const Sequelize = require('sequelize');
const app = express();
//const sequelize = new Sequelize('sqlite:chinook.db');

app.get('/api/playlists',function(request,response){

    
    Playlist.findAll().then((playlists) => {
        response.json(playlists);
    });
});

app.get('/api/playlists/:id',function(request,response){
    let { id } = request.params;
    Playlist.findByPk(id).then((playlist) => {
        if (playlist){
            response.json(playlist);
        } else {
            response.status(404).send();
        }

        
    });
});


app.listen(8000);