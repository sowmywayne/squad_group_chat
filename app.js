const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
// User Port Number
const port = process.env.PORT || 8000;

app.use(bodyParser.json());


app.listen(port, () => {
  console.log(`App running at ${port}`);
});
