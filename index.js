const app = require("./my-friends");
const seqelize = require("./db/sequelize");

const port = process.env.PORT || 4000;

seqelize
  .authenticate()
  .then(() => {
    app.listen(port, () => {
      console.log("goto http://localhost:4000");
    });
  })
  .catch((err) => console.log(err));
