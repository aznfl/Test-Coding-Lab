// // Call Package
const express = require("express");
const bodyParser = require("body-parser");

// Set App
const app = express();

// Config Dotenv
require("dotenv").config();

// Connect Database
const db = require("./config/db");
db.then(() => {
  console.log("Connected to database");
}).catch((err) => {
  console.log(err);
});

// Set Server Port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server Running at Port: ${PORT}`));

// Set Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// Set Routes
const allRoutes = require("./routes");
app.use(allRoutes)

process.on("unhandledRejection", (error) => {
  console.log("unhandledRejection", error.message);
});

// Menghitung Kecepatan
// const rumus = (a = 0,b = 0) => {
//     var t = a / 60
//     var v = b
//     var s = v * t
//     return console.log("Jarak Perjalanan adalah", s, "Kilometer")
// }
// const waktu = 120
// const kecepatan = 100
// rumus(waktu, kecepatan)
