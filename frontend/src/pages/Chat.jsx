// src/pages/Chat.jsx

import { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import ChatSidebar from "../components/ChatSidebar";
import ChatHeader from "../components/ChatHeader";
import ChatWindow from "../components/ChatWindow";

const Chat = () => {
  // Conversation History
  const [chats, setChats] = useState([
    {
      id: 1,
      title: "New Chat",
      lastMessage: "Welcome to MindMate AI",
    },
  ]);

  // Current Chat
  const [activeChatId, setActiveChatId] = useState(1);

  // Messages
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "ai",
      text: "👋 Hello! I'm MindMate AI.",
      time: "Now",
    },
    {
      id: 2,
      sender: "ai",
      text: "How can I help you today?",
      time: "Now",
    },
  ]);

  // Input
  const [input, setInput] = useState("");

  // Typing State
  const [isTyping, setIsTyping] = useState(false);

  // Loading State
  const [loading, setLoading] = useState(false);

  // Send Message
  const handleSendMessage = () => {
    if (!input.trim()) return;

    const userMessage = {
      id: Date.now(),
      sender: "user",
      text: input,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages((prev) => [...prev, userMessage]);

    const prompt = input;

    setInput("");
    setIsTyping(true);

    // Temporary AI Response
    setTimeout(() => {
      const aiMessage = {
        id: Date.now() + 1,
        sender: "ai",
        text:
          "This is a temporary AI response.\n\nLater this will be replaced by Gemini/OpenAI.\n\nYou asked:\n\n" +
          prompt,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      setMessages((prev) => [...prev, aiMessage]);

      setIsTyping(false);
    }, 1500);
  };

  // New Chat
  const handleNewChat = () => {
    const newChat = {
      id: Date.now(),
      title: "New Chat",
      lastMessage: "Start chatting...",
    };

    setChats((prev) => [newChat, ...prev]);

    setActiveChatId(newChat.id);

    setMessages([
      {
        id: 1,
        sender: "ai",
        text: "👋 Hello! I'm MindMate AI.",
        time: "Now",
      },
      {
        id: 2,
        sender: "ai",
        text: "Start a new conversation.",
        time: "Now",
      },
    ]);
  };

  return (
    <MainLayout>
      <div className="flex h-[calc(100vh-90px)] rounded-2xl overflow-hidden bg-white dark:bg-slate-900 shadow-xl">

        {/* Left Chat History */}
        <ChatSidebar
          chats={chats}
          activeChatId={activeChatId}
          setActiveChatId={setActiveChatId}
          onNewChat={handleNewChat}
        />

        {/* Chat Area */}
        <div className="flex flex-1 flex-col">

          <ChatHeader />

          <ChatWindow
            messages={messages}
            input={input}
            setInput={setInput}
            sendMessage={handleSendMessage}
            loading={loading}
            isTyping={isTyping}
          />

        </div>

      </div>
    </MainLayout>
  );
};

export default Chat;