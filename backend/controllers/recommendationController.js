const Recommendation = require("../models/Recommendation");
const Feedback = require("../models/Feedback");
const UserStats = require("../models/UserStats");
const ProfileAnalyzer = require("../services/profileAnalyzer");
const RecommendationService = require("../services/recommendationService");
const LearningPathService = require("../services/learningPathService");
const Chat = require("../models/Chat");
const Memory = require("../models/Memory");
const Personality = require("../models/Personality");

exports.generateRecommendations = async (req, res) => {
  try {
    const { userId, message } = req.body;

    if (!userId || !message) {
      return res.status(400).json({ message: "userId and message are required" });
    }

    const profile = await ProfileAnalyzer(message);
    const recommendations = RecommendationService(profile);

    const savedRecommendations = await Recommendation.insertMany(
      recommendations.map(rec => ({
        userId,
        title: rec.title,
        description: rec.description,
        category: rec.category
      }))
    );

    await UserStats.findOneAndUpdate(
      { userId },
      { $inc: { recommendationsUsed: savedRecommendations.length } },
      { upsert: true, new: true }
    );

    res.json({ profile, recommendations: savedRecommendations });
  } catch (error) {
    console.error("Recommendation Error:", error);
    res.status(500).json({ message: error.message });
  }
};

exports.submitFeedback = async (req, res) => {
  try {
    const { userId, chatId, helpful } = req.body;

    if (!userId || !chatId || typeof helpful !== "boolean") {
      return res.status(400).json({ message: "userId, chatId and helpful are required" });
    }

    const feedback = await Feedback.create({ userId, chatId, helpful });
    res.status(201).json(feedback);
  } catch (error) {
    console.error("Feedback Error:", error);
    res.status(500).json({ message: error.message });
  }
};

exports.getAnalytics = async (req, res) => {
  try {
    const { userId } = req.params;

    if (!userId) {
      return res.status(400).json({ message: "userId is required" });
    }

    const totalChats = await Chat.countDocuments({ userId });
    const recommendations = await Recommendation.find({ userId }).sort({ createdAt: -1 });
    const userStats = await UserStats.findOne({ userId }) || {
      totalChats: 0,
      recommendationsUsed: 0,
      averageSessionTime: 0
    };
    const memory = await Memory.findOne({ userId });
    const personality = await Personality.findOne({ userId });
    const currentMood = personality?.emotion || "Neutral";
    const learningGoal = (memory?.goals && memory.goals[0]) || "Not set";
    const interests = memory?.interests || [];
    const progressPercentage = Math.min(100, Math.round((userStats.recommendationsUsed || 0) * 5 + (totalChats || 0) * 0.5));

    res.json({
      totalChats,
      currentMood,
      learningGoal,
      interests,
      recommendationsGenerated: recommendations.length,
      progressPercentage,
      stats: userStats
    });
  } catch (error) {
    console.error("Analytics Error:", error);
    res.status(500).json({ message: error.message });
  }
};

exports.getLearningPath = async (req, res) => {
  try {
    const { userId, message } = req.body;

    if (!userId || !message) {
      return res.status(400).json({ message: "userId and message are required" });
    }

    const profile = await ProfileAnalyzer(message);
    const path = LearningPathService(profile);
    res.json(path);
  } catch (error) {
    console.error("Learning Path Error:", error);
    res.status(500).json({ message: error.message });
  }
};
