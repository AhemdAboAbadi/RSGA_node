require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const Goals = require("./models/goals");
const router = require("./router");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

const PORT = process.env.PORT || 5000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

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

app.use("/api/v1", router);

app.use((err, req, res, next) => {
  if (err.isBoom) {
    return res.status(err.output.statusCode).json({
      error: {
        statusCode: err.output.statusCode,
        msg: err.output.payload.message,
      },
    });
  }
});
// app.get("/add", async (req, res) => {
//   try {
//     const add = await AuthorityAndVision.insertMany([
//       {
//         visionTitle: "RSGA Authority and vision",
//         visionBodyEnglish: `
//         The RSGA comprises Saudi Arabia, Egypt, Jordan, Yemen, Sudan, Somalia, Eritrea, and Djibouti. The General Secretariat's headquarters is situated in Riyadh, Saudi Arabia. The council operates via a rotating presidency and consists of three primary agencies.
// The RSGA strives to enhance economic and commercial cooperation, increase investment activities, and promote integration and close coordination among its members. This is considered a critical element in improving collective capabilities and addressing challenges specific to the region. Upholding its members' values and maintaining their standards are also of paramount importance.
// The RSGA aims to deepen the relationship between its member states, serve their interests in regional and international forums, and create an environment of collective coordination concerning the defense capabilities of its members. Additionally, it endeavors to maintain the security of the Red Sea and the Gulf of Aden while also protecting and securing these waterways.`,
//         visionBodyArabic: `
//         نفس الكلام بس مترجم للعربي
//         `,
//       },
//     ]);
//     res.json(add);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send("Server Error");
//   }
// });

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
