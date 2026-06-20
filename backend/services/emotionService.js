function detectEmotion(text) {

  const lower =
  text.toLowerCase();

  if (
    lower.includes("sad") ||
    lower.includes("depressed")
  ) {
    return "Sad";
  }

  if (
    lower.includes("happy") ||
    lower.includes("excited")
  ) {
    return "Happy";
  }

  if (
    lower.includes("angry") ||
    lower.includes("frustrated")
  ) {
    return "Angry";
  }

  return "Neutral";
}

module.exports =
detectEmotion;