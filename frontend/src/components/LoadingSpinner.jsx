// src/components/LoadingSpinner.jsx

import { FiLoader } from "react-icons/fi";

const LoadingSpinner = ({
  text = "MindMate AI is thinking...",
  fullScreen = false,
}) => {
  const content = (
    <div className="flex flex-col items-center justify-center gap-5 py-10">

      {/* Spinner */}
      <div className="relative">

        <div className="w-16 h-16 rounded-full border-4 border-indigo-200 dark:border-slate-700"></div>

        <div className="absolute inset-0 flex items-center justify-center">
          <FiLoader
            size={30}
            className="animate-spin text-indigo-600"
          />
        </div>

      </div>

      {/* Text */}
      <div className="text-center">

        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
          {text}
        </h3>

        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          Please wait while we generate your response...
        </p>

      </div>

      {/* Animated Dots */}
      <div className="flex gap-2">

        <span
          className="w-2.5 h-2.5 rounded-full bg-indigo-600 animate-bounce"
          style={{ animationDelay: "0ms" }}
        ></span>

        <span
          className="w-2.5 h-2.5 rounded-full bg-indigo-600 animate-bounce"
          style={{ animationDelay: "150ms" }}
        ></span>

        <span
          className="w-2.5 h-2.5 rounded-full bg-indigo-600 animate-bounce"
          style={{ animationDelay: "300ms" }}
        ></span>

      </div>

    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 dark:bg-slate-950/80 backdrop-blur-sm">
        {content}
      </div>
    );
  }

  return content;
};

export default LoadingSpinner;