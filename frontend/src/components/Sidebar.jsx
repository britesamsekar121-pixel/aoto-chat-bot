// src/components/Sidebar.jsx

import { NavLink, useNavigate } from "react-router-dom";
import {
  FiGrid,
  FiMessageSquare,
  FiUser,
  FiSettings,
  FiLogOut,
  FiCpu,
} from "react-icons/fi";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  const menuItems = [
    {
      title: "Dashboard",
      path: "/dashboard",
      icon: <FiGrid size={20} />,
    },
    {
      title: "Chat",
      path: "/chat",
      icon: <FiMessageSquare size={20} />,
    },
    {
      title: "Profile",
      path: "/profile",
      icon: <FiUser size={20} />,
    },
    {
      title: "Settings",
      path: "/settings",
      icon: <FiSettings size={20} />,
    },
  ];

  return (
    <aside className="w-72 bg-slate-900 text-white flex flex-col border-r border-slate-800">

      {/* Logo */}
      <div className="h-20 flex items-center gap-3 px-6 border-b border-slate-800">

        <div className="h-12 w-12 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
          <FiCpu size={24} />
        </div>

        <div>
          <h1 className="text-xl font-bold">
            MindMate AI
          </h1>

          <p className="text-xs text-slate-400">
            Personality Assistant
          </p>
        </div>

      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">

        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 ${
                isActive
                  ? "bg-indigo-600 text-white shadow-md"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              }`
            }
          >
            {item.icon}

            <span className="font-medium">
              {item.title}
            </span>
          </NavLink>
        ))}

      </nav>

      {/* User Section */}
      <div className="border-t border-slate-800 p-4">

        <div className="flex items-center gap-3 mb-4">

          <div className="h-12 w-12 rounded-full bg-indigo-600 flex items-center justify-center text-lg font-bold">
            B
          </div>

          <div>

            <h3 className="font-semibold">
              Brite
            </h3>

            <p className="text-xs text-slate-400">
              Online
            </p>

          </div>

        </div>

        <button
          onClick={handleLogout}
          className="w-full flex items-center justify-center gap-2 rounded-xl bg-red-600 hover:bg-red-700 transition py-3 font-medium"
        >
          <FiLogOut size={18} />
          Logout
        </button>

      </div>

    </aside>
  );
};

export default Sidebar;