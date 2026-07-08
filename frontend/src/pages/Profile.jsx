import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";

import ProfileCompletion from "../components/ProfileCompletion";
import ProfilePhoto from "../components/ProfilePhoto";
import ProfileForm from "../components/ProfileForm";

export default function Profile() {
  const [formData, setFormData] = useState({});
  const [profileImage, setProfileImage] = useState(null);
  const [isSaving, setIsSaving] = useState(false);

  // Calculate profile completion
  const completion = useMemo(() => {
    const values = Object.values(formData);

    if (values.length === 0) return 0;

    const filledFields = values.filter(
      (value) =>
        value !== null &&
        value !== undefined &&
        value.toString().trim() !== ""
    ).length;

    return Math.round((filledFields / values.length) * 100);
  }, [formData]);

  // Save Profile (Temporary)
  const handleSave = () => {
    setIsSaving(true);

    const profile = {
      ...formData,
      profileImage: profileImage?.name || null,
      completion,
      updatedAt: new Date().toISOString(),
    };

    // Temporary local storage
    localStorage.setItem(
      "mindmate_profile",
      JSON.stringify(profile)
    );

    console.log(profile);

    setTimeout(() => {
      setIsSaving(false);
      alert("Profile saved successfully!");
    }, 800);
  };

  return (
    <motion.div
      className="min-h-screen bg-slate-950 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold">
            Complete Your Profile
          </h1>

          <p className="text-gray-400 mt-2">
            Build your MindMate profile to unlock a more personalized AI
            experience.
          </p>
        </div>

        {/* Top Section */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">

          {/* Left */}
          <div className="space-y-6">
            <ProfilePhoto
              onImageSelect={setProfileImage}
            />
          </div>

          {/* Right */}
          <div className="lg:col-span-2">
            <ProfileCompletion
              formData={formData}
              completion={completion}
            />
          </div>

        </div>

        {/* Profile Form */}
        <div className="bg-slate-900 rounded-2xl border border-slate-800 shadow-lg p-8">

          <ProfileForm
            onChange={setFormData}
          />

        </div>

        {/* Save Button */}
        <div className="flex justify-end mt-8">

          <button
            onClick={handleSave}
            disabled={isSaving}
            className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300
              ${
                isSaving
                  ? "bg-slate-700 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700 hover:scale-105"
              }`}
          >
            {isSaving ? "Saving..." : "Save Profile"}
          </button>

        </div>

      </div>
    </motion.div>
  );
}