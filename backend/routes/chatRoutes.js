const express = require("express");
const router = express.Router();

const {
  sendMessage,
  getChats
} = require("../controllers/chatController");

router.post("/send", sendMessage);
router.get("/:userId", getChats);

module.exports = router;
