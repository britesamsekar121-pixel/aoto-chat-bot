const mongoose = require("mongoose");

const memorySchema = new mongoose.Schema({

  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },

  interests: [String],

  skills: [String],

  goals: [String]

});

module.exports =
mongoose.model(
"Memory",
memorySchema
);