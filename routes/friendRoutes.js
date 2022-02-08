const router = new (require('koa-router'))()
const Friends = require('../db/models/Friends');
const errorValidation = require("../middleware/errorValidation")

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
});

router.post("/friend", errorValidation,async(ctx,next)=>{
    const body = ctx.request.body;

    await Friends.sync();
    
    // if (!(await ValidateFriendsInfo(body))) {
    //     ctx.response.body = {
    //         type: "error",
    //         errorMessage:"Missing required fields or id not unique"
    //     };
    //     return;
    // }

    ctx.response.body = await Friends.create(body);
});

module.exports = router;