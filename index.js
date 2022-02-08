const app = require("./my-friends");

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log("goto http://localhost:4000");
});
