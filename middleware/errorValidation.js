const Errors = require("error");
const Friends = require('../db/models/Friends');

//error validation when adding to the database
async function errorValidation(ctx,next){
    try {
        await next();
    } 
    catch (error) {
        const body = ctx.request.body;
        const requiredFieldsExist = body.id && body.firstName && body.lastName;

        const idIsUnique= await Friends.findAll({
            where:{
                "id":body.id
            }
        });

        if(!requiredFieldsExist) {
            ctx.response.body = {
                type: "error",
                errorMessage:"Missing a required field"
            };
        }
    
        if(idIsUnique!==null) {
            ctx.response.body = {
                type: "error",
                errorMessage:"ID is not unique"
            };
        }
    }
}

module.exports = errorValidation;