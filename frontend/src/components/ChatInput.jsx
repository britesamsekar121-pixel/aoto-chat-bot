// src/components/ChatInput.jsx

import { useRef } from "react";
import {
  FiSend,
  FiPaperclip,
  FiSmile,
  FiMic,
} from "react-icons/fi";

const ChatInput = ({
  input,
  setInput,
  sendMessage,
  disabled = false,
}) => {
  const textareaRef = useRef(null);

  // Auto Grow Textarea
  const handleChange = (e) => {
    setInput(e.target.value);

    const textarea = textareaRef.current;

    textarea.style.height = "auto";
    textarea.style.height = `${Math.min(textarea.scrollHeight, 180)}px`;
  };

  // Enter to Send
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();

      if (input.trim()) {
        sendMessage();

        if (textareaRef.current) {
          textareaRef.current.style.height = "48px";
        }
      }
    }
  };

  const handleSend = () => {
    if (!input.trim()) return;

    sendMessage();

    if (textareaRef.current) {
      textareaRef.current.style.height = "48px";
    }
  };

  return (
    <div className="px-6 py-5 bg-white dark:bg-slate-900">

      <div className="flex items-end gap-3 rounded-2xl border border-gray-300 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 p-3 shadow-sm">

        {/* Attachment */}
        <button
          className="rounded-xl p-2 hover:bg-gray-200 dark:hover:bg-slate-700 transition"
          title="Attach File"
        >
          <FiPaperclip
            size={20}
            className="text-gray-500 dark:text-gray-300"
          />
        </button>

        {/* Message Input */}
        <textarea
          ref={textareaRef}
          rows={1}
          value={input}
          disabled={disabled}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="Message MindMate AI..."
          className="flex-1 resize-none overflow-y-auto bg-transparent outline-none text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
          style={{
            minHeight: "48px",
            maxHeight: "180px",
          }}
        />

        {/* Emoji */}
        <button
          className="rounded-xl p-2 hover:bg-gray-200 dark:hover:bg-slate-700 transition"
          title="Emoji"
        >
          <FiSmile
            size={20}
            className="text-gray-500 dark:text-gray-300"
          />
        </button>

        {/* Voice */}
        <button
          className="rounded-xl p-2 hover:bg-gray-200 dark:hover:bg-slate-700 transition"
          title="Voice Input"
        >
          <FiMic
            size={20}
            className="text-gray-500 dark:text-gray-300"
          />
        </button>

        {/* Send */}
        <button
          onClick={handleSend}
          disabled={!input.trim() || disabled}
          className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-600 text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:bg-gray-400"
          title="Send"
        >
          <FiSend size={18} />
        </button>

      </div>

      <p className="mt-3 text-center text-xs text-gray-500 dark:text-gray-400">
        MindMate AI can make mistakes. Please verify important information.
      </p>

    </div>
  );
};

export default ChatInput;