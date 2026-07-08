// src/components/ChatWindow.jsx

import { useEffect, useRef } from "react";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";
import TypingIndicator from "./TypingIndicator";
import LoadingSpinner from "./LoadingSpinner";

const ChatWindow = ({
  messages,
  input,
  setInput,
  sendMessage,
  loading = false,
  isTyping = false,
}) => {
  const bottomRef = useRef(null);

  // Auto Scroll
  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, isTyping]);

  return (
    <div className="flex flex-col flex-1 bg-gray-50 dark:bg-slate-950 overflow-hidden">
      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-6 py-6">
        {loading ? (
          <LoadingSpinner />
        ) : messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center">
            <div className="text-6xl mb-5">🤖</div>

            <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
              Welcome to MindMate AI
            </h2>

            <p className="mt-4 max-w-xl text-gray-500 dark:text-gray-400">
              Start a conversation by typing your message below.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10 w-full max-w-3xl">
              <div className="rounded-2xl bg-white dark:bg-slate-900 p-5 shadow">
                💡 Ask coding questions
              </div>

              <div className="rounded-2xl bg-white dark:bg-slate-900 p-5 shadow">
                🧠 Personality analysis
              </div>

              <div className="rounded-2xl bg-white dark:bg-slate-900 p-5 shadow">
                📚 Learn new concepts
              </div>

              <div className="rounded-2xl bg-white dark:bg-slate-900 p-5 shadow">
                😊 Mental wellness support
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="max-w-4xl mx-auto space-y-6">
              {messages.map((message) => (
                <ChatMessage
                  key={message.id}
                  message={message}
                />
              ))}

              {isTyping && <TypingIndicator />}

              <div ref={bottomRef} />
            </div>
          </>
        )}
      </div>

      {/* Input */}
      <div className="border-t border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <ChatInput
            input={input}
            setInput={setInput}
            sendMessage={sendMessage}
          />
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;