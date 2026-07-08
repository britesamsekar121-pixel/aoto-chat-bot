import React from "react";
import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaUserCircle,
  FaRobot,
  FaChartLine,
} from "react-icons/fa";

export default function ProfileCompletion({
  completion = 0,
  formData = {},
}) {
  const requiredFields = ["fullName", "age", "email"];

  const requiredCompleted = requiredFields.filter(
    (field) =>
      formData[field] &&
      formData[field].toString().trim() !== ""
  ).length;

  const profileStrength = () => {
    if (completion >= 90)
      return {
        text: "Excellent",
        color: "text-green-400",
      };

    if (completion >= 70)
      return {
        text: "Good",
        color: "text-blue-400",
      };

    if (completion >= 40)
      return {
        text: "Average",
        color: "text-yellow-400",
      };

    return {
      text: "Getting Started",
      color: "text-red-400",
    };
  };

  const strength = profileStrength();

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-slate-900 border border-slate-800 rounded-2xl shadow-lg p-6"
    >
      {/* Title */}
      <div className="flex items-center gap-3 mb-6">
        <FaChartLine className="text-blue-400 text-2xl" />

        <div>
          <h2 className="text-2xl font-bold text-white">
            Profile Completion
          </h2>

          <p className="text-gray-400 text-sm">
            Complete your profile for a better AI experience.
          </p>
        </div>
      </div>

      {/* Progress */}
      <div className="mb-6">

        <div className="flex justify-between mb-2">
          <span className="font-medium text-gray-300">
            Completion
          </span>

          <span className="font-bold text-blue-400">
            {completion}%
          </span>
        </div>

        <div className="w-full bg-slate-700 rounded-full h-4 overflow-hidden">

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${completion}%` }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-blue-500 to-cyan-400 h-full rounded-full"
          />

        </div>

      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-4">

        {/* Required */}
        <div className="bg-slate-800 rounded-xl p-4">

          <div className="flex items-center gap-2 mb-2">
            <FaCheckCircle className="text-green-400" />
            <h3 className="font-semibold">
              Required
            </h3>
          </div>

          <p className="text-3xl font-bold">
            {requiredCompleted}/3
          </p>

          <p className="text-gray-400 text-sm mt-2">
            Name, Age & Email
          </p>

        </div>

        {/* Strength */}
        <div className="bg-slate-800 rounded-xl p-4">

          <div className="flex items-center gap-2 mb-2">
            <FaUserCircle className="text-blue-400" />
            <h3 className="font-semibold">
              Strength
            </h3>
          </div>

          <p
            className={`text-2xl font-bold ${strength.color}`}
          >
            {strength.text}
          </p>

          <p className="text-gray-400 text-sm mt-2">
            Based on completed information.
          </p>

        </div>

        {/* AI Ready */}
        <div className="bg-slate-800 rounded-xl p-4">

          <div className="flex items-center gap-2 mb-2">
            <FaRobot className="text-purple-400" />
            <h3 className="font-semibold">
              AI Ready
            </h3>
          </div>

          <p className="text-3xl font-bold">
            {completion >= 80 ? "Yes" : "No"}
          </p>

          <p className="text-gray-400 text-sm mt-2">
            Personalized responses improve as your profile becomes more complete.
          </p>

        </div>

      </div>

      {/* Footer */}
      <div className="mt-6 bg-slate-800 rounded-xl p-4">

        <h3 className="font-semibold mb-2">
          MindMate Tip
        </h3>

        <p className="text-gray-400 text-sm leading-6">
          Completing your profile helps MindMate provide
          personalized learning paths, career suggestions,
          AI conversations, and smarter recommendations
          based on your interests and goals.
        </p>

      </div>

    </motion.div>
  );
}