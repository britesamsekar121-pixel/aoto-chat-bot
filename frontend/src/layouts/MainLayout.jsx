// src/layouts/MainLayout.jsx

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const MainLayout = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-100 dark:bg-slate-950 overflow-hidden">

      {/* Left Sidebar */}
      <Sidebar />

      {/* Right Content */}
      <div className="flex flex-1 flex-col overflow-hidden">

        {/* Top Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-6 bg-gray-100 dark:bg-slate-950">
          {children}
        </main>

      </div>

    </div>
  );
};

export default MainLayout;