const AuthorityAndVision = require("../../models/authorityAndVision");

const changeVision = async (req, res, next) => {
  // const { vision } = req.body;
  console.log("req.body", req.body);

  const { visionTitle, visionBodyEnglish, visionBodyArabic } = req.body;
  try {
    const newVision = await AuthorityAndVision.findOneAndUpdate(
      {
        visionTitle: visionTitle,
      },
      {
        visionBodyEnglish: visionBodyEnglish,
        visionBodyArabic: visionBodyArabic,
      }
    );

    res.json(newVision);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error from changeVision");
  }
};

module.exports = changeVision;
