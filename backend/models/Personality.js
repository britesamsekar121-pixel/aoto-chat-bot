const mongoose = require("mongoose");

const personalitySchema = new mongoose.Schema({

  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },

  communicationStyle: {
    type: String,
    default: "Neutral"
  },

  expertiseLevel: {
    type: String,
    default: "Beginner"
  },

  responsePreference: {
    type: String,
    default: "Medium"
  },

  emotion: {
    type: String,
    default: "Neutral"
  }

});

module.exports =
mongoose.model(
"Personality",
personalitySchema
);