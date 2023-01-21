const Siswa = require("../models/siswa");
const mongoose = require("mongoose");

module.exports = {
  //get all siswa data
  getAllSiswa: async (req, res) => {
    try {
      const siswa = await Siswa.find()
      if (siswa.length === 0) {
        res.status(200).json({
          message: "There's no siswa yet",
        });
      } else {
        res.status(200).json({
          message: "success",
          data: siswa,
        });
      }
    } catch (err) {
      res.status(404).json({
        message: err.message,
      });
    }
  },

  //get siswa by id
  getSiswaById: async (req, res) => {
    // const id = req.params.id;
    // try {
    //   const siswa = await siswa.findById(id).populate({
    //     path: "user",
    //     select: "name contact",
    //   });

    //   res.status(200).json({
    //     message: "Success",
    //     data: siswa,
    //   });
    // } catch (error) {
    //   if (error.name == "NotFoundError") {
    //     res.status(404).json({
    //       message: "Not Found Error",
    //     });
    //   } else if (error.name == "ValidationError") {
    //     res.status(400).json({
    //       message: "Validation Error",
    //     });
    //   } else {
    //     res.status(500).json({
    //       message: "Server Error",
    //     });
    //   }
    // }
  },

  //create new siswa
  createSiswa: (req, res) => {
    try {
      const data = req.body;

      const siswa = new Siswa(data);
      siswa.save();

      res.json({
        message: "siswa successfully created",
        data: siswa,
      });
    } catch (error) {
      if (error.name == "NotFoundError") {
        res.status(404).json({
          message: "Not Found Error",
        });
      } else if (error.name == "ValidationError") {
        res.status(400).json({
          message: "Validation Error",
        });
      } else {
        res.status(500).json({
          message: "Server Error",
        });
      }
    }
  },

  //update siswa
  updateSiswaById: async (req, res) => {
    const id = req.params.id;
    const valid = mongoose.Types.ObjectId.isValid(id);
    const data = req.body;
    try {
      if (!valid) {
        return res.status(404).send(`siswa : ${id} not found`);
      }

      await Siswa.findByIdAndUpdate(id, data, { new: true });
      const new_siswa = await Siswa.findById(id);
      res.status(200).json({
        message: "Update Success",
        data: new_siswa,
      });
    } catch {
      res.status(500).json({
        message: "Server Error",
      });
    }
  },

  //delete siswa by id
  deleteSiswaById: async (req, res) => {
    const id = req.params.id;
    const data = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).send(`Siswa dengan id : ${id} tidak ditemukan`);
    }

    await Siswa.findByIdAndRemove(id);
    res.status(200).json({
      message: "Success",
    });
  },
};
