const router = new (require("koa-router"))();
const Friends = require("../db/models/Friends");

router.get("/friends", async (ctx, next) => {
  ctx.body = await Friends.findAll();
});

module.exports = router;
