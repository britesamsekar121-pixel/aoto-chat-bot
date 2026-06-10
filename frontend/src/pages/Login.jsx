import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem(
      "user",
      JSON.stringify({
        email
      })
    );

    navigate("/dashboard");
  };

  return (
    <div className="container">

      <form
        className="card"
        onSubmit={handleSubmit}
      >
        <h1>Mind Mate AI</h1>

        <input
          type="email"
          placeholder="Email"
          required
          onChange={(e)=>
            setEmail(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Password"
          required
          onChange={(e)=>
            setPassword(e.target.value)
          }
        />

        <button>
          Login
        </button>

        <p>
          New User?
          <Link to="/register">
            Register
          </Link>
        </p>

      </form>

    </div>
  );
}