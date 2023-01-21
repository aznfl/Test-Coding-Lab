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


// Function Genap (Soal Nomor 1)
// const genap = (a) => {
//   if (a % 2 == 0) {
//     return console.log(a, "Ini Bilangan Genap");
//   }
// };

// Function Ganjil (Soal Nomor 1)
// const ganjil = (a) => {
//   if (a % 2 == 1) return console.log(a, "Ini Bilangan Ganjil");
// };

// Urutan 1-100 Genap (Soal Nomor 2)
// const bilangan = () => {
// for (a=1; a<=100; a++){
// genap(a)
// }
// };
// bilangan()

// Menghitung Kecepatan (Soal Nomor 3)
// const rumus = (a = 0,b = 0) => {
//     var t = a / 60
//     var v = b
//     var s = v * t
//     return console.log("Jarak Perjalanan adalah", s, "Kilometer")
// }
// const waktu = 120
// const kecepatan = 100
// rumus(waktu, kecepatan)
