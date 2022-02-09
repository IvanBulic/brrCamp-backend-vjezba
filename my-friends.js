"use strict";
const Koa = require("koa");
const Router = require("koa-router");
const bodyParser = require("koa-bodyparser");
const { Sequelize, DataTypes, CITEXT } = require("sequelize");
const dbInfo = require("./db/config/config.json");
const friendRouter = require("./routes/friend");
const friendsRouter = require("./routes/friends");

//instantiate app,router and connect to database
const app = new Koa();
const router = new Router();

//adding middleware to the app
app.use(bodyParser());
app.use(friendRouter.routes());
app.use(friendsRouter.routes());
app.use(router.routes());

module.exports = app;
