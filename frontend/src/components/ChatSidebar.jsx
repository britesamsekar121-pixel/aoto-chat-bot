import { Link } from "react-router-dom";

export default function ChatSidebar() {
  return (
    <div className="chat-sidebar">

      <h2>MindMate AI</h2>

      <button className="new-chat-btn">
        + New Chat
      </button>

      <div className="chat-history">
        <p>Today's Chat</p>
        <p>Career Guidance</p>
        <p>Study Planning</p>
      </div>

      <div className="sidebar-links">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/settings">Settings</Link>
      </div>

    </div>
  );
}