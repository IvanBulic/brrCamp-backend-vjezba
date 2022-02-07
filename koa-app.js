'use strict'
const Koa = require('koa')
const Router = require('koa-router');
var bodyParser = require('koa-bodyparser');

const app = new Koa()
const router = new Router();

app.use(bodyParser());

router.get("/",(ctx,next)=>{
  ctx.body="hello world";
})

app.use(router.routes())

const port = process.env.PORT || 4000

app.listen(port, () => { console.log('goto http://localhost:4000') })