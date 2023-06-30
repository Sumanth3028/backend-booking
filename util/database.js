const Sequelize = require("sequelize");
const sequelize = new Sequelize("booking-app", "root", "Sumanth1@", {
  dialect: "mysql",
  host: "localhost",
});

module.exports=sequelize