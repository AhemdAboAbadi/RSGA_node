require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const Goals = require("./models/goals");

const app = express();

const PORT = process.env.PORT || 5000;

mongoose.set("strictQuery", false);

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connected ${conn.connection.host}`);
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

app.get("/goals", async (req, res) => {
  try {
    const goals = await Goals.insertMany([
      {
        goalBody: "I want to be a better person",
        goalTitle: "Be a better person",
      },
      {
        goalBody: "I want to be a better programmer",
        goalTitle: "Be a better programmer",
      },
      {
        goalBody: "I want to be a better writer",
        goalTitle: "Be a better writer",
      },
    ]);
    res.json(goals);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

app.get("/get/all/goals", async (req, res) => {
  try {
    const goals = await Goals.find();
    res.json(goals);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

app.get("/", (req, res) => {
  res.send("API running");
});

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
