// src/components/ChatHeader.jsx

import {
  FiMoreVertical,
  FiRefreshCw,
  FiTrash2,
  FiSettings,
  FiDownload,
} from "react-icons/fi";

const ChatHeader = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900">

      {/* Left */}
      <div className="flex items-center gap-4">

        {/* AI Avatar */}
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white text-xl font-bold shadow-lg">
          AI
        </div>

        {/* Title */}
        <div>
          <h2 className="text-xl font-bold text-gray-800 dark:text-white">
            MindMate AI
          </h2>

          <div className="flex items-center gap-2 mt-1">

            <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></span>

            <p className="text-sm text-gray-500 dark:text-gray-400">
              Online • Ready to help
            </p>

          </div>

        </div>

      </div>

      {/* Right */}
      <div className="flex items-center gap-2">

        {/* New Response */}
        <button
          className="p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-slate-800 transition"
          title="Regenerate Response"
        >
          <FiRefreshCw
            size={18}
            className="text-gray-600 dark:text-gray-300"
          />
        </button>

        {/* Clear Chat */}
        <button
          className="p-3 rounded-xl hover:bg-red-50 dark:hover:bg-red-900/20 transition"
          title="Clear Chat"
        >
          <FiTrash2
            size={18}
            className="text-red-500"
          />
        </button>

        {/* Export */}
        <button
          className="p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-slate-800 transition"
          title="Export Chat"
        >
          <FiDownload
            size={18}
            className="text-gray-600 dark:text-gray-300"
          />
        </button>

        {/* Settings */}
        <button
          className="p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-slate-800 transition"
          title="Settings"
        >
          <FiSettings
            size={18}
            className="text-gray-600 dark:text-gray-300"
          />
        </button>

        {/* More */}
        <button
          className="p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-slate-800 transition"
          title="More"
        >
          <FiMoreVertical
            size={18}
            className="text-gray-600 dark:text-gray-300"
          />
        </button>

      </div>

    </header>
  );
};

export default ChatHeader;