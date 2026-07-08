// src/components/Navbar.jsx

import { FiSearch, FiBell, FiMoon, FiSun, FiUser } from "react-icons/fi";
import { useState } from "react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <header className="h-20 bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800 px-6 flex items-center justify-between">

      {/* Left */}
      <div className="flex items-center gap-4">

        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
          MindMate AI
        </h1>

      </div>

      {/* Center Search */}
      <div className="hidden md:flex flex-1 max-w-xl mx-10">

        <div className="relative w-full">

          <FiSearch
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            size={18}
          />

          <input
            type="text"
            placeholder="Search..."
            className="w-full rounded-xl border border-gray-300 dark:border-slate-700 bg-gray-100 dark:bg-slate-800 py-3 pl-12 pr-4 outline-none focus:ring-2 focus:ring-indigo-500 text-gray-700 dark:text-white"
          />

        </div>

      </div>

      {/* Right */}
      <div className="flex items-center gap-3">

        {/* Theme */}
        <button
          onClick={toggleTheme}
          className="p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-slate-800 transition"
        >
          {darkMode ? (
            <FiSun
              size={20}
              className="text-yellow-400"
            />
          ) : (
            <FiMoon
              size={20}
              className="text-gray-700 dark:text-white"
            />
          )}
        </button>

        {/* Notifications */}
        <button
          className="relative p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-slate-800 transition"
        >
          <FiBell
            size={20}
            className="text-gray-700 dark:text-white"
          />

          <span className="absolute top-2 right-2 h-2.5 w-2.5 rounded-full bg-red-500"></span>
        </button>

        {/* User */}
        <button
          className="flex items-center gap-3 rounded-xl hover:bg-gray-100 dark:hover:bg-slate-800 px-3 py-2 transition"
        >
          <div className="h-10 w-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold">
            <FiUser size={18} />
          </div>

          <div className="hidden lg:block text-left">

            <p className="font-semibold text-gray-800 dark:text-white">
              Brite
            </p>

            <p className="text-xs text-gray-500 dark:text-gray-400">
              AI User
            </p>

          </div>

        </button>

      </div>

    </header>
  );
};

export default Navbar;