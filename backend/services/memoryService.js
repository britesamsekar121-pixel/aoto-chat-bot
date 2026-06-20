async function extractMemory(message) {

  let memory = {};

  if (
    message.includes("I like")
  ) {

    memory.interests = [
      message.replace(
      "I like",
      ""
      ).trim()
    ];

  }

  if (
    message.includes("I want to become")
  ) {

    memory.goals = [
      message.replace(
      "I want to become",
      ""
      ).trim()
    ];

  }

  return memory;
}

module.exports =
extractMemory;