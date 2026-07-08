import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiMail, FiLock } from "react-icons/fi";

export default function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.email && formData.password) {
      navigate("/dashboard");
    } else {
      alert("Please fill all fields");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-950 flex items-center justify-center px-6">

      <div className="w-full max-w-md bg-white dark:bg-slate-900 rounded-3xl shadow-2xl p-10">

        <h1 className="text-4xl font-bold text-center text-indigo-600">
          MindMate AI
        </h1>

        <p className="text-center text-gray-500 mt-3 mb-8">
          Welcome Back
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          <div className="relative">

            <FiMail className="absolute left-4 top-4 text-gray-400" />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded-xl pl-12 pr-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none"
            />

          </div>

          <div className="relative">

            <FiLock className="absolute left-4 top-4 text-gray-400" />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border rounded-xl pl-12 pr-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none"
            />

          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 transition text-white py-3 rounded-xl font-semibold"
          >
            Login
          </button>

        </form>

        <p className="text-center mt-8 text-gray-600">

          Don't have an account?{" "}

          <Link
            to="/register"
            className="text-indigo-600 font-semibold"
          >
            Register
          </Link>

        </p>

      </div>

    </div>
  );
}