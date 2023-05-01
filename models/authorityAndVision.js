const mongoose = require("mongoose");

const AuthorityAndVision = new mongoose.Schema({
  visionTitle: {
    type: String,
    unique: true,
    required: true,
  },
  visionBodyEnglish: {
    type: String,
    required: true,
  },
  visionBodyArabic: {
    type: String,
    required: true,
  },
});

module.exports = Vision = mongoose.model(
  "AuthorityAndVision",
  AuthorityAndVision
);
