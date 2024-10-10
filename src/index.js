const express = require("express");
const { config } = require("dotenv");
const { router } = require("./modules/app.router");

// init dotenv config
config();

// variables
const app = express();

// middleware
app.use(express.json());
app.use(router);

// listen
app.listen(process.env.PORT || 3000, () => {
  console.log("App running");
});
