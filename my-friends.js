'use strict'
const Koa = require('koa')
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const {Sequelize, DataTypes, CITEXT} = require('sequelize');
const Friends = require('./db/models/Friends');
const dbInfo = require("./db/config/config.json");
const errorValidation = require("./middleware/errorValidation")

const app = new Koa();
const router = new Router();
const sequelize = new Sequelize('postgres://'+dbInfo.development.username+':'+ dbInfo.development.password+'@'+ dbInfo.development.host +':'+'5432'+ '/'+ dbInfo.development.database);

app.use(bodyParser());

async function ValidateFriendsInfo(body){
    const requiredFieldsExist = body.id && body.firstName && body.lastName;
    var idIsUnique=true;

    const idList = await Friends.findAll({
        where:{
            "id":body.id
        }
    });

    if(idList.length !== 0){
        idIsUnique=false;
    }

    if(!(idIsUnique && requiredFieldsExist)) {
        return false;
    }

    return true;
}

router.get("/friends",async(ctx,next)=>{
    ctx.body = await Friends.findAll();
})

router.post("/friend", errorValidation,async(ctx,next)=>{
    const body = ctx.request.body;

    await Friends.sync();
    
    if (!(await ValidateFriendsInfo(body))) {
        ctx.response.body = {
            type: "error",
            errorMessage:"Missing required fields or id not unique"
        };
        return;
    }

    ctx.response.body = await Friends.create(body)
})

app.use(router.routes())

const port = process.env.PORT || 4000

app.listen(port, () => { console.log('goto http://localhost:4000') })