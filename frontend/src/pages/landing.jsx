import { useNavigate } from "react-router-dom";
import { FiArrowRight, FiCpu } from "react-icons/fi";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-950 flex items-center justify-center px-6">

      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Side */}
        <div>

          <div className="inline-flex items-center gap-3 bg-indigo-500/20 text-indigo-300 px-4 py-2 rounded-full mb-8">
            <FiCpu size={22} />
            <span className="font-semibold">
              MindMate AI
            </span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
            Your Intelligent
            <br />
            <span className="text-indigo-400">
              Mental Wellness
            </span>
            <br />
            Companion
          </h1>

          <p className="mt-8 text-lg text-slate-300 leading-8 max-w-xl">
            Chat with AI, track your mood, discover your personality,
            improve productivity and build healthier habits —
            all in one modern platform.
          </p>

          <div className="flex flex-wrap gap-5 mt-10">

            <button
              onClick={() => navigate("/login")}
              className="bg-indigo-600 hover:bg-indigo-700 transition px-8 py-4 rounded-xl text-white font-semibold flex items-center gap-2"
            >
              Get Started
              <FiArrowRight />
            </button>

            <button
              onClick={() => navigate("/register")}
              className="border border-slate-500 text-white px-8 py-4 rounded-xl hover:bg-white/10 transition"
            >
              Register
            </button>

          </div>

        </div>

        {/* Right Side */}

        <div className="hidden lg:flex justify-center">

          <div className="w-[420px] h-[420px] rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-2xl flex items-center justify-center">

            <FiCpu
              size={180}
              className="text-white"
            />

          </div>

        </div>

      </div>

    </div>
  );
}