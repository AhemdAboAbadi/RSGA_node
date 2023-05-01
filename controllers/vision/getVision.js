const AuthorityAndVision = require("../../models/authorityAndVision");

const getVision = async (req, res) => {
  try {
    const vision = await AuthorityAndVision.find();

    res.json(vision);

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
    res.json(add);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error from getVision");
  }
};

module.exports = getVision;
