const { ObjectID, ObjectId } = require("bson");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const siswaSchema = new Schema({
  role: {
    type: String,
    default: "siswa",
  },
  // waliKelas: {
  //   type: mongoose.ObjectId,
  //   ref: "Guru"
  // },
  name: {
    type: String,
    required: [true, "Name not provided"],
  },
  kelas: {
    type: String,
    required: [true, "Email not provided"],
  },
  dob: {
    type: Date,
    required: [true, "Date of birth not provided"],
  },
  contact: {
    type: String,
    required: [true, "Contact not provided"],
  },
  address: {
    type: String,
    required: [true, "Address not provided"],
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
const Siswa = mongoose.model("Siswa", siswaSchema);

//export
module.exports = Siswa;
