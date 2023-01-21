const { ObjectID, ObjectId } = require("bson");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const guruSchema = new Schema({
  role: {
    type: String,
    default: "guru",
  },
  kelas: {
    type: mongoose.ObjectId,
    ref: "Kelas",
  },
  mapel: {
    type: String,
    require: [true, "Mapel not provided"]
  },
  name: {
    type: String,
    required: [true, "Name not provided"],
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
const Guru = mongoose.model("Guru", guruSchema);

//export
module.exports = Guru;
