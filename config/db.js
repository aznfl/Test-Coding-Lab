// Call Package
const mongoose = require("mongoose");

// Config Dotenv
require("dotenv").config();

// Set MongoDB
mongoose.set("strictQuery", false);
const db = mongoose.connect(process.env.URL_DB, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

module.exports = db;
