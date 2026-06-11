export const sendMessageToAI =
  async (message) => {

    return new Promise((resolve) => {

      setTimeout(() => {

        resolve(
          "Mind Mate AI received: " +
          message
        );

      }, 1500);

    });

  };