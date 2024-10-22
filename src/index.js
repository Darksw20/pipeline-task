const express = require("express");
const cors = require('cors');
const path = require("path");
const { config } = require("dotenv");

// init dotenv config
config();

// variables
const app = express();
app.use(cors());

// middleware
app.use(express.json());


// Serve static HTML file
app.use(express.static(path.join(__dirname, "../public")));
app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "../public", "index.html"));
});

app.get("/transactions", (req, res) => {
	res.sendFile(path.join(__dirname, "../public", "transactions.html"));
});

// listen
app.listen(process.env.PORT || 3000, () => {
	console.log("App running");
});
