// src/components/ChatSidebar.jsx

import { useState } from "react";
import {
  FiPlus,
  FiSearch,
  FiMessageSquare,
  FiTrash2,
} from "react-icons/fi";

const ChatSidebar = ({
  chats,
  activeChatId,
  setActiveChatId,
  onNewChat,
}) => {
  const [search, setSearch] = useState("");

  const filteredChats = chats.filter((chat) =>
    chat.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-72 bg-slate-950 text-white border-r border-slate-800 flex flex-col">

      {/* Logo */}
      <div className="p-5 border-b border-slate-800">
        <h2 className="text-2xl font-bold text-center">
          MindMate AI
        </h2>

        <button
          onClick={onNewChat}
          className="mt-5 w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 transition rounded-xl py-3"
        >
          <FiPlus />
          New Chat
        </button>

        {/* Search */}
        <div className="relative mt-5">
          <FiSearch
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            size={18}
          />

          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl bg-slate-800 py-3 pl-10 pr-4 outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>

      {/* Chat List */}
      <div className="flex-1 overflow-y-auto p-3">

        {filteredChats.length === 0 ? (
          <p className="text-center text-slate-500 mt-10">
            No conversations
          </p>
        ) : (
          filteredChats.map((chat) => (
            <div
              key={chat.id}
              onClick={() => setActiveChatId(chat.id)}
              className={`group flex items-start justify-between p-4 rounded-xl cursor-pointer mb-3 transition-all duration-200 ${
                activeChatId === chat.id
                  ? "bg-indigo-600"
                  : "hover:bg-slate-800"
              }`}
            >
              <div className="flex gap-3">

                <FiMessageSquare
                  className="mt-1 flex-shrink-0"
                  size={18}
                />

                <div>

                  <h3 className="font-semibold text-sm">
                    {chat.title}
                  </h3>

                  <p className="text-xs text-slate-300 mt-1 line-clamp-2">
                    {chat.lastMessage}
                  </p>

                </div>

              </div>

              <button
                className="opacity-0 group-hover:opacity-100 transition text-red-400 hover:text-red-500"
                title="Delete Chat"
              >
                <FiTrash2 size={16} />
              </button>

            </div>
          ))
        )}

      </div>

      {/* Footer */}
      <div className="border-t border-slate-800 p-5">

        <div className="rounded-xl bg-slate-800 p-4">

          <p className="font-semibold">
            MindMate AI
          </p>

          <p className="text-xs text-slate-400 mt-2">
            AI Personality Assistant
          </p>

          <div className="mt-4 flex items-center gap-2">

            <span className="w-3 h-3 rounded-full bg-green-500"></span>

            <span className="text-sm text-slate-300">
              Online
            </span>

          </div>

        </div>

      </div>

    </div>
  );
};

export default ChatSidebar;