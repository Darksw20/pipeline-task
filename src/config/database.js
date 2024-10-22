const mysql = require("mysql2");

// TODO: Change database configuration to use environment variables based on the AWS RDS instance
const dbConfig = {
  host: process.env.RDS_HOSTNAME,
  user: "admin",
  password: "root",
  database: "auth_db",
  port: process.env.RDS_PORT,
};

const pool = mysql.createPool(dbConfig);

module.exports = pool.promise();
