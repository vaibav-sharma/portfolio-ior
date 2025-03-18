// MessageParser.js
class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    message = message.toLowerCase();
    // if (message.includes("api")) {
    //   this.actionProvider.handleApiCall(message); // Call the API function
    // } else 
    if (message.includes("hello")) {
      this.actionProvider.handleHello();
    } 
    // else {
    //   const botMessage = this.actionProvider.createChatBotMessage(
    //     "I did not understand that."
    //   );
    //   this.actionProvider.updateChatbotState(botMessage);
    // }
    this.actionProvider.handleApiCall(message); // Call the API function
  }
}

export default MessageParser;
