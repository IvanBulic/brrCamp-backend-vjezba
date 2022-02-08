const Errors = require("error");

//error validation when adding to the database
async function errorValidation(ctx,next){
    try {
        await next();
    } 
    catch (error) {
        if (!(error instanceof Errors.GenericError) || error.status >= 500) {
            throw error;
        }

        ctx.response.body = "Missing required fields or id already exists";
    }
}

module.exports = errorValidation;