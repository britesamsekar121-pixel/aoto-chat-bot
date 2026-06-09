import React, { useState } from 'react';

const Chat = () => {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (message) => {
    setMessages((prev) => [...prev, message]);
  };

  return (
    <div className="chat-page">
      <h1>Chat</h1>
      {/* Chat content */}
    </div>
  );
};

export default Chat;
