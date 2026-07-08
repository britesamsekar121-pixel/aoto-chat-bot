import React, { useState, useMemo } from "react";
import ProfileForm from "../components/ProfileForm";

export default function Profile() {
  const [formData, setFormData] = useState({});

  // 📊 Required fields for completion calculation
  const requiredFields = ["fullName", "age", "email"];

  // 🔢 Calculate completion %
  const completion = useMemo(() => {
    const allFields = Object.values(formData);
    const filled = allFields.filter(
      (val) => val !== "" && val !== null && val !== undefined
    ).length;

    const total = Object.keys(formData).length || 1;

    return Math.round((filled / total) * 100);
  }, [formData]);

  // 🎯 Required validation status
  const isRequiredComplete = requiredFields.every(
    (field) => formData[field]?.toString().trim().length > 0
  );

  // 💾 Save handler (Firebase later)
  const handleSave = () => {
    if (!isRequiredComplete) {
      alert("Please fill all required fields (Name, Age, Email)");
      return;
    }

    console.log("Saving Profile Data:", formData);

    // Later: Firebase save logic
    // saveUserProfile(formData)
  };

  return (
    <div className="min-h-screen bg-black text-white p-6 md:p-10">
      {/* HEADER */}
      <div className="max-w-4xl mx-auto mb-6">
        <h1 className="text-3xl font-bold">Complete Your Profile</h1>

        <div className="mt-3">
          <p className="text-sm text-gray-400 mb-2">
            Profile Completion
          </p>

          {/* Progress Bar */}
          <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-green-500 transition-all duration-300"
              style={{ width: `${completion}%` }}
            />
          </div>

          <p className="text-right text-sm mt-1 text-gray-400">
            {completion}%
          </p>
        </div>
      </div>

      {/* MAIN FORM */}
      <div className="max-w-4xl mx-auto bg-gray-900 rounded-xl shadow-lg p-6">
        <ProfileForm onChange={setFormData} />
      </div>

      {/* SAVE BUTTON */}
      <div className="max-w-4xl mx-auto mt-6 flex justify-end">
        <button
          onClick={handleSave}
          className={`px-6 py-2 rounded-lg font-semibold transition ${
            isRequiredComplete
              ? "bg-blue-600 hover:bg-blue-700"
              : "bg-gray-700 cursor-not-allowed"
          }`}
        >
          Save Profile
        </button>
      </div>
    </div>
  );
}