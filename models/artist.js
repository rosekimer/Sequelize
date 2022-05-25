const sequelize = require('../database/sequelize');
const Sequelize = require('sequelize');

module.exports = sequelize.define('artist',{
    id:{
        field:'ArtistId',
        type: Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        field:'Name',
        type:Sequelize.STRING,
        validate:{
            notEmpty:{
                args: true,
                msg:'Name is Required'
            },
            isAlpha:{
                args:true,
                nsg:'Name must only contain letters'
            },
            len:{
                args:[2,10],
                msg:'Name must be between 2 and 10 characters'
            }
        }
    }
},{
    timestamps: false
});
