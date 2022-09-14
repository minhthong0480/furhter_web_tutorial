const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");

//Connect DB
mongoose.connect("localhost:3000", { useNewUrlParser: true }, () =>
  console.log("DB connected")
);