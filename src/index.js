const express = require("express");
const path = require("path");
const { config } = require("dotenv");

// init dotenv config
config();

// variables
const app = express();

// middleware
app.use(express.json());

// Serve static HTML file
app.use(express.static(path.join(__dirname, "../public")));
app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "../public", "index.html"));
});

// listen
app.listen(process.env.PORT || 3000, () => {
	console.log("App running");
});
