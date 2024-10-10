const express = require("express");
const { config } = require("dotenv");
config();
const routes = require("./routes/fee_transformation");

// variables
const app = express();

// middleware
app.use(express.json());

// test get
app.get("/", (req, res) => res.json({ msg: "Hello" }));

app.use(routes);

// listen
app.listen(process.env.PORT || 3000, () => {
  console.log("App running");
});
