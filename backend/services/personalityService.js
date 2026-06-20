function analyzePersonality(message) {

  let profile = {

    communicationStyle:
    "Neutral",

    responsePreference:
    "Medium"

  };

  if (message.length < 50) {

    profile.communicationStyle =
    "Direct";

    profile.responsePreference =
    "Short";
  }

  if (message.length > 200) {

    profile.communicationStyle =
    "Detailed";

    profile.responsePreference =
    "Long";
  }

  return profile;
}

module.exports =
analyzePersonality;