// src/components/ChatMessage.jsx

import { FiCpu, FiUser } from "react-icons/fi";
import MessageBubble from "./MessageBubble";

const ChatMessage = ({ message }) => {
  const isUser = message.sender === "user";

  return (
    <div
      className={`flex w-full ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`flex items-end gap-3 max-w-3xl ${
          isUser ? "flex-row-reverse" : "flex-row"
        }`}
      >
        {/* Avatar */}
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-full shadow-md flex-shrink-0 ${
            isUser
              ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white"
              : "bg-gradient-to-r from-emerald-500 to-cyan-500 text-white"
          }`}
        >
          {isUser ? (
            <FiUser size={18} />
          ) : (
            <FiCpu size={18} />
          )}
        </div>

        {/* Message Bubble */}
        <MessageBubble
          isUser={isUser}
          text={message.text}
          time={message.time}
        />
      </div>
    </div>
  );
};

export default ChatMessage;