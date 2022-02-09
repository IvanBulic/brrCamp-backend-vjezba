const Errors = require("error");
const Friends = require("../db/models/friend");

//error validation when adding to the database
async function errorValidation(ctx, next) {
  try {
    const body = ctx.request.body;
    const requiredFieldsExist = body.firstName && body.lastName;

    if (!requiredFieldsExist) {
      throw "Missing a required field";
    }

    if (/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~0-9]/.test(body.firstName)) {
      throw "Name cannot contain numbers or special characters";
    }

    if (/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~0-9]/.test(body.lastName)) {
      throw  "Last name cannot contain numbers or special characters";
    }

    await next();
  } 
  catch (error) {
    ctx.response.body = {
      type: "error",
      errorMessage: error
    }
    ctx.response.status = 400;
  }
}

module.exports = errorValidation;
