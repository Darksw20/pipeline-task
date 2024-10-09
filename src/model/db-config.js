const { Sequelize } = require('sequelize');
const { config } = require('dotenv');
config();

// console.log(process.env.USER);
// console.log(process.env.PASSWORD);

const sequelize = new Sequelize(process.env.DATABASE_NAME, process.env.USER, process.env.PASSWORD, {
  host: process.env.RDS_ENDPOINT,
  dialect: 'mysql',
  port: 3306,
});

module.exports = sequelize;
