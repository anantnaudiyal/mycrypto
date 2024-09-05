"use strict";

require('dotenv').config();
var express = require("express");
var dbConnection = require("./dbConnection");
var path = require("path");
var app = express();
var cors = require("cors");
app.use(express.json());
app.use(cors());
app.use("/api/v1", require("./router/routes"));
app.get("/", function (req, res) {
  app.use(express["static"](path.resolve(__dirname, "client", "build")));
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});
app.listen(3001, function () {
  dbConnection();
  console.log("My app is listening");
});