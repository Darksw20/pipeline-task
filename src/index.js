const express = require("express");
const { config } = require("dotenv");

// init dotenv config
config();

// variables
const app = express();

// middleware
app.use(express.json());

// test get
app.get("/", (req, res) => res.json({ msg: "Hello" }));

// listen
app.listen(process.env.PORT || 3000, () => {
  console.log("App running");
});
