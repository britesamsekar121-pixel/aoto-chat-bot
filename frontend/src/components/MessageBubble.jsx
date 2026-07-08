// src/components/MessageBubble.jsx

import { useState } from "react";
import { FiCopy, FiCheck } from "react-icons/fi";

const MessageBubble = ({ isUser, text, time }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 1500);
    } catch (error) {
      console.error("Copy failed:", error);
    }
  };

  return (
    <div
      className={`group relative max-w-xl rounded-2xl px-5 py-4 shadow-md transition-all duration-300 ${
        isUser
          ? "bg-indigo-600 text-white rounded-br-md"
          : "bg-white dark:bg-slate-800 text-gray-800 dark:text-white rounded-bl-md border border-gray-200 dark:border-slate-700"
      }`}
    >
      {/* Copy Button */}
      <button
        onClick={handleCopy}
        className={`absolute -top-3 ${
          isUser ? "-left-3" : "-right-3"
        } opacity-0 group-hover:opacity-100 transition-all duration-200 p-2 rounded-full bg-white dark:bg-slate-900 shadow-lg border border-gray-200 dark:border-slate-700`}
        title="Copy message"
      >
        {copied ? (
          <FiCheck
            size={15}
            className="text-green-500"
          />
        ) : (
          <FiCopy
            size={15}
            className="text-gray-600 dark:text-gray-300"
          />
        )}
      </button>

      {/* Message */}
      <p className="whitespace-pre-wrap break-words leading-7 text-sm">
        {text}
      </p>

      {/* Footer */}
      <div
        className={`mt-3 flex items-center justify-end text-xs ${
          isUser
            ? "text-indigo-100"
            : "text-gray-500 dark:text-gray-400"
        }`}
      >
        <span>{time}</span>
      </div>
    </div>
  );
};

export default MessageBubble;