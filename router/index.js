const router = require("express").Router();
const multer = require("multer");
const cors = require("cors");

const multerMid = multer({
  storage: multer.memoryStorage(),
  // limits: {
  //   fileSize: 5 * 1024 * 1024
  // }
});

// Vision
const getVision = require("../controllers/vision/getVision");
const changeVision = require("../controllers/vision/changeVision");

// Goals
const getGoals = require("../controllers/goals/getGoals");
const changeGoals = require("../controllers/goals/changeGoals");

router.get("/get/vision", getVision);
router.post("/change/vision", changeVision);

module.exports = router;
