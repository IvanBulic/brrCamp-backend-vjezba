const Errors = require("error");

async function errorValidation(ctx,next){
    try {
        await next();
    } 
    catch (error) {
        if (!(error instanceof Errors.GenericError) || error.status >= 500) {
            throw error;
        }
    }
}

module.exports = errorValidation;