const express = require('express');
const { config } = require('dotenv');

// init dotenv config
config();

// variables
const app = express();
const port = process.env.PORT || 3000;

// middleware
app.use(express.json());

// test get
app.get('/', (req, res) => res.json({ msg: 'Hello' }));

// listen
app.listen(port, () => {
  console.log(`App running in port ${port}`);
});
