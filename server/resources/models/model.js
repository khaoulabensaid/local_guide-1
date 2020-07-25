const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  fullName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  // role: {
  //     type: String,
  //     required: true,
  // }
});

var User = mongoose.model("User", userSchema);

module.exports = User;

const GuideSchema = new mongoose.Schema({
  name: String,
  description: String,
  age: Number,
  gender: String,
  languages: [String],
  city: String,
  show: Boolean,
  img: { data: Buffer, contentType: String },
});
const Guide = mongoose.model("Guide", GuideSchema);
module.exports = Guide;
