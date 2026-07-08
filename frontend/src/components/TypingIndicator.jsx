// src/components/TypingIndicator.jsx

import { FiCpu } from "react-icons/fi";

const TypingIndicator = () => {
  return (
    <div className="flex justify-start">
      <div className="flex items-end gap-3 max-w-3xl">

        {/* AI Avatar */}
        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow-md">
          <FiCpu size={18} />
        </div>

        {/* Typing Bubble */}
        <div className="rounded-2xl rounded-bl-md border border-gray-200 bg-white px-5 py-4 shadow-md dark:border-slate-700 dark:bg-slate-800">

          {/* Animated Dots */}
          <div className="flex items-center gap-2">

            <span
              className="h-2.5 w-2.5 rounded-full bg-indigo-500 animate-bounce"
              style={{ animationDelay: "0ms" }}
            />

            <span
              className="h-2.5 w-2.5 rounded-full bg-indigo-500 animate-bounce"
              style={{ animationDelay: "150ms" }}
            />

            <span
              className="h-2.5 w-2.5 rounded-full bg-indigo-500 animate-bounce"
              style={{ animationDelay: "300ms" }}
            />

          </div>

          <p className="mt-3 text-xs text-gray-500 dark:text-gray-400">
            MindMate AI is thinking...
          </p>

        </div>

      </div>
    </div>
  );
};

export default TypingIndicator;