import { useState } from "react";

import MainLayout
from "../layouts/MainLayout";

import ChatInput
from "../components/ChatInput";

import MessageBubble
from "../components/MessageBubble";

import TypingIndicator
from "../components/TypingIndicator";

import {
  sendMessageToAI
} from "../services/chatService";

export default function Chat() {

  const [messages, setMessages] =
    useState([]);

  const [loading, setLoading] =
    useState(false);

  const handleSend =
    async (text) => {

      const userMessage = {
        sender: "user",
        text
      };

      setMessages(prev => [
        ...prev,
        userMessage
      ]);

      setLoading(true);

      const reply =
        await sendMessageToAI(text);

      setMessages(prev => [
        ...prev,
        {
          sender: "ai",
          text: reply
        }
      ]);

      setLoading(false);
    };

  return (
    <MainLayout>

      <h1>Mind Mate AI Chat</h1>

      <div className="chat-container">

        <div className="messages">

          {messages.map(
            (msg, index) => (
              <MessageBubble
                key={index}
                message={msg}
              />
            )
          )}

          {loading &&
            <TypingIndicator />
          }

        </div>

        <ChatInput
          onSend={handleSend}
        />

      </div>

    </MainLayout>
  );
}