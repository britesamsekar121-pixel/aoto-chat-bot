const Chat = require("../models/Chat");
const Memory = require("../models/Memory");
const Personality = require("../models/Personality");
const UserStats = require("../models/UserStats");
const generateResponse = require("../services/geminiService");
const detectEmotion = require("../services/emotionService");
const analyzePersonality = require("../services/personalityService");
const extractMemory = require("../services/memoryService");

exports.sendMessage = async (req, res) => {
  try {
    const { userId, message } = req.body;

    if (!userId || !message) {
      return res.status(400).json({
        message: "userId and message are required"
      });
    }

    const emotion = detectEmotion(message);
    const personality = analyzePersonality(message);
    const memoryData = await extractMemory(message);

    await Personality.findOneAndUpdate(
      { userId },
      {
        communicationStyle: personality.communicationStyle,
        expertiseLevel: personality.expertiseLevel,
        responsePreference: personality.responsePreference,
        emotion
      },
      { upsert: true, new: true }
    );

    if (memoryData.interests || memoryData.goals || memoryData.skills) {
      await Memory.findOneAndUpdate(
        { userId },
        {
          $addToSet: {
            interests: { $each: memoryData.interests || [] },
            goals: { $each: memoryData.goals || [] },
            skills: { $each: memoryData.skills || [] }
          }
        },
        { upsert: true, new: true }
      );
    }

    const personalityRecord = await Personality.findOne({ userId });
    const memoryRecord = await Memory.findOne({ userId });

    const prompt = `You are PersonaAI.\nUser Profile:\nInterests: ${memoryRecord?.interests || []}\nSkills: ${memoryRecord?.skills || []}\nGoals: ${memoryRecord?.goals || []}\nEmotion: ${personalityRecord?.emotion || emotion}\nCommunication Style: ${personalityRecord?.communicationStyle || "Neutral"}\nExpertise: ${personalityRecord?.expertiseLevel || "Beginner"}\nInstructions: Adapt your answer according to the user's profile.\nQuestion: ${message}`;

    const aiReply = await generateResponse(prompt);

    const chat = await Chat.create({
      userId,
      userMessage: message,
      aiResponse: aiReply
    });

    await UserStats.findOneAndUpdate(
      { userId },
      { $inc: { totalChats: 1 } },
      { upsert: true }
    );

    res.json(chat);
  } catch (error) {
    console.error("Chat Error:", error);
    res.status(500).json({
      message: error.message
    });
  }
};

exports.getChats = async (req, res) => {
  try {
    const { userId } = req.params;

    const chats = await Chat.find({ userId }).sort({ createdAt: 1 });

    res.json(chats);
  } catch (error) {
    console.error("Get Chats Error:", error);
    res.status(500).json({
      message: error.message
    });
  }
};
