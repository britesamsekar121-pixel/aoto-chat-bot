import React from 'react';

const MessageBubble = ({ message, sender }) => {
  return (
    <div className={`message-bubble ${sender}`}>
      {message}
    </div>
  );
};

export default MessageBubble;
