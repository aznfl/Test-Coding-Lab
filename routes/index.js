const express = require("express");
const router = express.Router();

const siswaRouter = require("./siswa.router");
// const guruRouter = require("./guru.router");
// const kelasRouter = require("./kelas.router");

router.use("/siswa", siswaRouter);
// router.use("/guru", guruRouter);
// router.use("/kelas", kelasRouter);

module.exports = router;