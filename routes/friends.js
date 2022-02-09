const router = new (require("koa-router"))();
const sequelize = require("sequelize");
const Friends = require("../db/models/friend");
const db = require('../db/sequelize');

router.get("/friends", async (ctx) => {
    ctx.body = await Friends(db,sequelize.DataTypes).findAll();
});

module.exports = router;
