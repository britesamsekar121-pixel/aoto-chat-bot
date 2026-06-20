const generateResponse = require("./geminiService");

async function analyzeUser(message) {
  const prompt = `Analyze the user message and return JSON only.
{
  "interests": [],
  "skills": [],
  "goals": [],
  "emotion": "",
  "communicationStyle": "",
  "expertiseLevel": ""
}
Message:
${message}`;

  const result = await generateResponse(prompt);

  try {
    return JSON.parse(result);
  } catch (error) {
    console.error("Profile Analyzer parse error:", error);
    console.error("Raw Gemini output:", result);
    return {
      interests: [],
      skills: [],
      goals: [],
      emotion: "Neutral",
      communicationStyle: "Neutral",
      expertiseLevel: "Beginner"
    };
  }
}

module.exports = analyzeUser;
