const { ObjectID, ObjectId } = require("bson");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const kelasSchema = new Schema({
  waliKelas: {
    type: mongoose.ObjectId,
    ref: "Guru",
  },
  siswa: {
    type: mongoose.ObjectId,
    ref: "Siswa"
  },
  lokasi: {
    type: string,
    required: [true, "Lokasi of birth not provided"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
  },
});

//creating model
const Kelas = mongoose.model("Kelas", kelasSchema);

//export
module.exports = Kelas;
