const express = require("express");
const router = express.Router();

const {
  generateRecommendations,
  submitFeedback,
  getAnalytics,
  getLearningPath
} = require("../controllers/recommendationController");

router.post("/recommendations", generateRecommendations);
router.post("/feedback", submitFeedback);
router.get("/analytics/:userId", getAnalytics);
router.post("/learning-path", getLearningPath);

module.exports = router;
