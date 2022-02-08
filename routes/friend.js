const router = new (require("koa-router"))();
const Friends = require("../db/models/Friends");
const errorValidation = require("../middleware/errorValidation");

router.post("/friend", errorValidation, async (ctx, next) => {
  const body = ctx.request.body;

  await Friends.sync();

  ctx.response.body = await Friends.create(body);
});

module.exports = router;