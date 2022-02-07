'use strict'
const Koa = require('koa')
var bodyParser = require('koa-bodyparser');
const Router = require('koa-router');
const app = new Koa()
const router = new Router();
app.use(bodyParser());

router.get("/",(ctx,next)=>{
  ctx.body="hello world";
})

app.use(router.routes())

app.listen(4000, () => { console.log('goto http://localhost:4000') })