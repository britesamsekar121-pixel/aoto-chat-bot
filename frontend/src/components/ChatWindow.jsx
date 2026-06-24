import { useState } from "react";

import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";
import TypingIndicator from "./TypingIndicator";

export default function ChatWindow() {

  const [messages, setMessages] =
    useState([
      {
        sender: "ai",
        text:
          "Hello! I am MindMate AI. How can I help you today?",
      },
    ]);

  const [typing, setTyping] =
    useState(false);

  const handleSend = (text) => {

    const userMessage = {
      sender: "user",
      text,
    };

    setMessages((prev) => [
      ...prev,
      userMessage,
    ]);

    setTyping(true);

    setTimeout(() => {

      const aiReply = {
        sender: "ai",
        text:
          "Backend not connected yet.",
      };

      setMessages((prev) => [
        ...prev,
        aiReply,
      ]);

      setTyping(false);

    }, 1000);
  };

  return (
    <div className="chat-window">

      <div className="messages">

        {messages.map(
          (msg, index) => (
            <ChatMessage
              key={index}
              sender={msg.sender}
              text={msg.text}
            />
          )
        )}

        {typing && (
          <TypingIndicator />
        )}

      </div>

      <ChatInput
        onSend={handleSend}
      />

    </div>
  );
}