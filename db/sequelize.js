const { Sequelize } = require("sequelize")
const dbInfo = require("./config/config.json");

const seqelize = new Sequelize("postgres://" +
dbInfo.development.username +
":" +
dbInfo.development.password +
"@" +
dbInfo.development.host +
":" +
"5432" +
"/" +
dbInfo.development.database
);

module.exports = seqelize;