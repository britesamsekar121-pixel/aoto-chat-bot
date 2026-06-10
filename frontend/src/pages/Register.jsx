import { useState } from "react";
import { Link } from "react-router-dom";

export default function Register() {

  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      "Registration API will be connected later"
    );
  };

  return (
    <div className="container">

      <form
        className="card"
        onSubmit={handleSubmit}
      >

        <h1>Create Account</h1>

        <input
          type="text"
          placeholder="Name"
          required
          onChange={(e)=>
            setName(e.target.value)
          }
        />

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
          Register
        </button>

        <p>
          Already have account?
          <Link to="/">
            Login
          </Link>
        </p>

      </form>

    </div>
  );
}