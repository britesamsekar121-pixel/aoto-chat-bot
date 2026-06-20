const mongoose = require("mongoose");

const userStatsSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
    unique: true
  },
  totalChats: {
    type: Number,
    default: 0
  },
  recommendationsUsed: {
    type: Number,
    default: 0
  },
  averageSessionTime: {
    type: Number,
    default: 0
  }
});

module.exports = mongoose.model("UserStats", userStatsSchema);
