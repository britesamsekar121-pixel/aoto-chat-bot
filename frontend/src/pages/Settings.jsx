import React, { useState } from "react";

export default function Settings() {
  const [theme, setTheme] = useState("dark");
  const [aiMode, setAiMode] = useState("friendly");
  const [notifications, setNotifications] = useState(true);

  const handleSave = () => {
    const settings = {
      theme,
      aiMode,
      notifications,
      updatedAt: new Date().toISOString(),
    };

    localStorage.setItem("mindmate_settings", JSON.stringify(settings));

    console.log("Settings saved:", settings);

    alert("Settings saved successfully!");
  };

  return (
    <div className="min-h-screen bg-black text-white p-6 md:p-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Settings</h1>

        {/* AI MODE */}
        <div className="bg-gray-900 p-5 rounded-xl mb-4">
          <h2 className="font-semibold mb-3">AI Personality</h2>

          <select
            value={aiMode}
            onChange={(e) => setAiMode(e.target.value)}
            className="w-full p-2 bg-gray-800 rounded"
          >
            <option value="friendly">Friendly</option>
            <option value="professional">Professional</option>
            <option value="motivational">Motivational</option>
            <option value="funny">Funny</option>
            <option value="mentor">Mentor</option>
          </select>
        </div>

        {/* THEME */}
        <div className="bg-gray-900 p-5 rounded-xl mb-4">
          <h2 className="font-semibold mb-3">Theme</h2>

          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            className="w-full p-2 bg-gray-800 rounded"
          >
            <option value="dark">Dark</option>
            <option value="light">Light</option>
          </select>
        </div>

        {/* NOTIFICATIONS */}
        <div className="bg-gray-900 p-5 rounded-xl mb-4 flex items-center justify-between">
          <h2 className="font-semibold">Notifications</h2>

          <input
            type="checkbox"
            checked={notifications}
            onChange={() => setNotifications(!notifications)}
            className="w-5 h-5"
          />
        </div>

        {/* SAVE */}
        <div className="flex justify-end">
          <button
            onClick={handleSave}
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold"
          >
            Save Settings
          </button>
        </div>
      </div>
    </div>
  );
}