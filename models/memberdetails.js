const Sequelize = require("sequelize");

const sequelize = require("../util/database");

const Member = sequelize.define(
  "members",
  {
    // id: {
    //   type: Sequelize.INTEGER,
    //   allowIncrement: true,
    //   allowNull: false,
    //   primaryKey: true,
    // },
    Name: {
      type: Sequelize.STRING,
    },
    Email: {
      type: Sequelize.STRING,
      unique: true,
    },
    Phone: {
      type: Sequelize.DOUBLE,
      unique: true,
    },

    time: {
      type:Sequelize.TIME,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Member;
