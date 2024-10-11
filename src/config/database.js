const mysql = require("mysql2");

// TODO: Change database configuration to use environment variables based on the AWS RDS instance
const dbConfig = {
  host: "localhost",
  user: "root",
  password: "root",
  database: "auth_db",
  port: 7654,
};

const pool = mysql.createPool(dbConfig);

module.exports = pool.promise();
