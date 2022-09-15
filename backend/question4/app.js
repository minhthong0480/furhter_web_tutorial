const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const taskRoute = require('../question4/routes/tasks')
const url = 'mongodb+srv://minhthong:minhthong48@cluster0.shvbc6l.mongodb.net/exam?retryWrites=true&w=majority'
//Connect DB
mongoose.connect(url, { useNewUrlParser: true }, () =>
  console.log("DB connected")
);

app.use(express.json());
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get("/products/:id", function (req, res, next) {
  res.json({ msg: "This is CORS-enabled for all origins!" });
});

app.use('/', taskRoute)

app.listen(9000, () => console.log("Server is Up and Running"));
