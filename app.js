require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// My Routes
const authRouter = require("./routes/auth");

const app = express();
// User Port Number
const port = process.env.PORT || 8000;

// DB Connection

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("DB is connected");
  });

// My Middleware
app.use(bodyParser.json());

// Router

app.use("/api", authRouter);


app.listen(port, () => {
  console.log(`App running at ${port}`);
});
