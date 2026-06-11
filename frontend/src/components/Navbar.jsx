import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const user =
    JSON.parse(localStorage.getItem("user"));

  return (
    <div className="navbar">

      <h2>Mind Mate AI</h2>

      <div
        style={{
          display: "flex",
          gap: "15px",
          alignItems: "center"
        }}
      >
        <span>
          {user?.email}
        </span>

        <ThemeToggle />
      </div>

    </div>
  );
}