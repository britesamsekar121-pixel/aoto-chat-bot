import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-container">

      <div className="hero">

        <h1 className="logo">
          MINDMATE AI
        </h1>

        <p className="tagline">
          Your Personal AI Companion for
          Learning, Growth and Self Discovery
        </p>

        <Link to="/login">
          <button className="start-btn">
            Get Started
          </button>
        </Link>

      </div>

    </div>
  );
}