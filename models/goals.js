const mongoose = require("mongoose");

const GoalsSchema = new mongoose.Schema({
  goalBody: {
    type: String,
    required: true,
  },
  goalTitle: {
    type: String,
    required: true,
  },
});

module.exports = Goal = mongoose.model("Goals", GoalsSchema);
