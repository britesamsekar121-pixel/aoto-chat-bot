function generateRecommendations(profile) {
  const recommendations = [];
  const interests = Array.isArray(profile.interests) ? profile.interests : [];
  const goals = Array.isArray(profile.goals) ? profile.goals : [];

  if (goals.some(goal => /game developer/i.test(goal))) {
    recommendations.push({
      title: "Build a UE5 Shooter Game",
      description: "Create a complete shooter game using Unreal Engine Blueprints and ship a polished demo.",
      category: "Project"
    });
    recommendations.push({
      title: "Master Game Design Fundamentals",
      description: "Study level design, gameplay loops, and player feedback to make your games more engaging.",
      category: "Learning"
    });
  }

  if (interests.some(interest => /artificial intelligence/i.test(interest))) {
    recommendations.push({
      title: "Learn Prompt Engineering",
      description: "Practice AI prompt design and chatbot development with real-world examples.",
      category: "Learning"
    });
    recommendations.push({
      title: "Build an AI Game NPC",
      description: "Create a game character with intelligent behavior using rule-based and ML-driven logic.",
      category: "Project"
    });
  }

  if (goals.some(goal => /ai engineer|machine learning/i.test(goal))) {
    recommendations.push({
      title: "Complete an ML Portfolio Project",
      description: "Build a real machine learning app and share the code on GitHub.",
      category: "Project"
    });
  }

  if (recommendations.length === 0) {
    recommendations.push({
      title: "Build a Personal Learning Plan",
      description: "Choose one goal and create a step-by-step learning path to stay focused.",
      category: "Planning"
    });
    recommendations.push({
      title: "Practice Consistent Learning",
      description: "Spend 30 minutes every day learning and reflecting on progress.",
      category: "Habit"
    });
  }

  return recommendations;
}

module.exports = generateRecommendations;
