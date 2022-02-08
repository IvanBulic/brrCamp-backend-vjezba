'use strict';
const dbInfo = require("../config/config.json");
const {Sequelize, DataTypes} = require('sequelize');
const sequelize = new Sequelize('postgres://'+dbInfo.development.username+':'+ dbInfo.development.password+'@'+ dbInfo.development.host +':'+'5432'+ '/'+ dbInfo.development.database);

const Friends = sequelize.define("Friend",{
  id: 
  {
    type: DataTypes.INTEGER,
    allowNull: true,
    primaryKey: true,
    unique:true
  },
  firstName: 
  {
    type: DataTypes.STRING,
    allowNull:false
  },
  lastName:
  {
    type: DataTypes.STRING, 
    allowNull:false
  },
  nickname: 
  {
    type: DataTypes.STRING
  }
})

module.exports = Friends;  