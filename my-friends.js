'use strict'
const Koa = require('koa')
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const {Sequelize, DataTypes, CITEXT} = require('sequelize');
const dbInfo = require("./db/config/config.json");
const friendRouter = require("./routes/friendRoutes");

//instantiate app,router and connect to database
const app = new Koa();
const router = new Router();
const sequelize = new Sequelize('postgres://'+dbInfo.development.username+':'+ dbInfo.development.password+'@'+ dbInfo.development.host +':'+'5432'+ '/'+ dbInfo.development.database);

//adding middleware to the app
app.use(bodyParser());
app.use(friendRouter.routes());
app.use(router.routes())

const port = process.env.PORT || 4000

app.listen(port, () => { console.log('goto http://localhost:4000') })