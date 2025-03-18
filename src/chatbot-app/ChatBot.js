import React, { useState, useEffect, useRef } from 'react';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import './FullScreenChatbot.css'; // Import the CSS file


import config from './config';
import MessageParser from './MessageParser';
import ActionProvider from './ActionProvider';

function MyChatbot() {
  const [showChatbot, setShowChatbot] = useState(true);
  const chatbotRef = useRef(null);

  const handleToggleChatbot = () => {
    setShowChatbot(!showChatbot);
  };

  useEffect(() => {
    if (chatbotRef.current) {
      chatbotRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [showChatbot]);

  return (
    <div>
      {/* <button onClick={handleToggleChatbot}>
        {showChatbot ? 'Close Chatbot' : 'Open Chatbot'}
      </button> */}

      {showChatbot && (
        <div ref={chatbotRef}>
          <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
          />
        </div>
      )}
    </div>
  );
}

export default MyChatbot;