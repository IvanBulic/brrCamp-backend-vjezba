const Errors = require("error");
const Friends = require("../db/models/Friends");

//error validation when adding to the database
async function errorValidation(ctx, next) {
  try {
    await next();
  } catch (error) {
    const body = ctx.request.body;
    const requiredFieldsExist = body.firstName && body.lastName;

    if (!requiredFieldsExist) {
      ctx.response.body = {
        type: "error",
        errorMessage: "Missing a required field",
      };
      return;
    }

    if (/^[a-zA-Z]+$/.test(body.firstName)) {
      ctx.response.body = {
        type: "error",
        errorMessage: "Name cannot contain numbers or special characters",
      };
      return;
    }

    if (/^[a-zA-Z]+$/.test(body.lastName)) {
      ctx.response.body = {
        type: "error",
        errorMessage: "Last name cannot contain numbers or special characters",
      };
      return;
    }
  }
}

module.exports = errorValidation;
