const express = require('express');
const Sequelize = require('sequelize');
const app = express();
const sequelize = new Sequelize('sqlite:chinook.db');
const Playlist = sequelize.define('playlist',{
    id:{
        field:'PlaylistId',
        type: Sequelize.INTEGER,
        primaryKey:true
    },
    name:{
        field:'Name',
        type:Sequelize.STRING
    }
},{
    timestamps: false
});

app.get('/api/playlists',function(request,response){
    Playlist.findAll().then((playlists) => {
        response.json(playlists);
    });
});

app.listen(8000);