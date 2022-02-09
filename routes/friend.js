const router = new (require("koa-router"))();
const Friend = require("../db/models/friend");
const errorValidation = require("../middleware/errorValidation");
const db = require('../db/sequelize')
const sequelize = require('sequelize');

router.post("/friend",errorValidation,async (ctx, next) => {
  const body = ctx.request.body;

  ctx.response.body = await Friend(db,sequelize.DataTypes).create(body);
});

module.exports = router;
