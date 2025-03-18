// config.js
import { createChatBotMessage } from 'react-chatbot-kit';

const config = {
  botName: 'MyChatbot',
  initialMessages: [createChatBotMessage(`Hello! How can I help?`)],
  // ... other configurations ...
};

export default config;