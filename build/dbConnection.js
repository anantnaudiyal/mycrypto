"use strict";

var mongoose = require("mongoose");
require('dotenv').config();
var uri = process.env.MONGODB_URI;
mongoose;
function dbConnection() {
  mongoose.connect(uri).then(function () {
    console.log("DB Connected");
  })["catch"](function (err) {
    console.log(err);
  });
}
module.exports = dbConnection;