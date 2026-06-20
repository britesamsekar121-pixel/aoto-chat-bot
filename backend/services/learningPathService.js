function generateLearningPath(profile) {
  const goal = Array.isArray(profile.goals) && profile.goals.length ? profile.goals[0] : "Career Growth";
  const lowerGoal = goal.toLowerCase();
  const path = [];

  if (/game developer/i.test(lowerGoal)) {
    path.push("Learn C++ Basics");
    path.push("Learn Unreal Engine");
    path.push("Blueprint System");
    path.push("Game Physics");
    path.push("Create 5 Projects");
    path.push("Publish Game");
  } else if (/ai engineer|machine learning|data scientist/i.test(lowerGoal)) {
    path.push("Learn Python for AI");
    path.push("Study Machine Learning Fundamentals");
    path.push("Practice Model Training");
    path.push("Build an AI Project");
    path.push("Deploy Your Model");
    path.push("Share Your Work on GitHub");
  } else if (/frontend|web developer|software developer/i.test(lowerGoal)) {
    path.push("Master HTML, CSS, and JavaScript");
    path.push("Learn a Frontend Framework");
    path.push("Build Responsive Web Apps");
    path.push("Add API Integration");
    path.push("Create a Portfolio Site");
    path.push("Launch Your First Product");
  } else {
    path.push("Clarify Your Top Goal");
    path.push("List Key Skills to Learn");
    path.push("Build a Small Project Every Week");
    path.push("Review Progress Monthly");
    path.push("Seek Feedback from Peers");
    path.push("Set a Milestone for Success");
  }

  return {
    goal,
    path
  };
}

module.exports = generateLearningPath;
