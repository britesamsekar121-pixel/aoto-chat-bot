import {
  Link,
  useNavigate
} from "react-router-dom";

export default function Sidebar() {

  const navigate =
    useNavigate();

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="sidebar">

      <h3>Navigation</h3>

      <Link to="/dashboard">
        Dashboard
      </Link>

      <Link to="/chat">
        Chat
      </Link>

      <Link to="/profile">
        Profile
      </Link>

      <Link to="/settings">
        Settings
      </Link>

      <button
        onClick={logout}
      >
        Logout
      </button>

    </div>
  );
}
<Link to="/chat">
  Chat
</Link>