import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  FaCamera,
  FaTrashAlt,
  FaUserCircle,
} from "react-icons/fa";

export default function ProfilePhoto({ onImageSelect }) {
  const inputRef = useRef(null);

  const [preview, setPreview] = useState(null);
  const [error, setError] = useState("");

  const handleImage = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    // Image validation
    if (!file.type.startsWith("image/")) {
      setError("Please select a valid image.");
      return;
    }

    // Max Size = 2MB
    if (file.size > 2 * 1024 * 1024) {
      setError("Image size should be less than 2MB.");
      return;
    }

    setError("");

    const reader = new FileReader();

    reader.onload = () => {
      setPreview(reader.result);

      if (onImageSelect) {
        onImageSelect(file);
      }
    };

    reader.readAsDataURL(file);
  };

  const removeImage = () => {
    setPreview(null);
    setError("");

    if (inputRef.current) {
      inputRef.current.value = "";
    }

    if (onImageSelect) {
      onImageSelect(null);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -25 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-slate-900 border border-slate-800 rounded-2xl shadow-lg p-6"
    >
      {/* Heading */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-white">
          Profile Picture
        </h2>

        <p className="text-gray-400 text-sm mt-1">
          Upload a profile photo to personalize your account.
        </p>
      </div>

      {/* Avatar */}
      <div className="flex justify-center mb-6">
        <div className="relative">

          <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-slate-700 bg-slate-800 flex items-center justify-center">

            {preview ? (
              <img
                src={preview}
                alt="Profile Preview"
                className="w-full h-full object-cover"
              />
            ) : (
              <FaUserCircle className="text-8xl text-slate-500" />
            )}

          </div>

          {/* Camera Button */}
          <button
            type="button"
            onClick={() => inputRef.current.click()}
            className="absolute bottom-2 right-2 bg-blue-600 hover:bg-blue-700 p-3 rounded-full shadow-lg transition"
          >
            <FaCamera />
          </button>

        </div>
      </div>

      {/* Hidden Input */}
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleImage}
      />

      {/* Buttons */}
      <div className="flex gap-3">

        <button
          type="button"
          onClick={() => inputRef.current.click()}
          className="flex-1 bg-blue-600 hover:bg-blue-700 py-3 rounded-xl font-semibold transition"
        >
          Upload Image
        </button>

        <button
          type="button"
          onClick={removeImage}
          className="bg-red-600 hover:bg-red-700 px-5 rounded-xl transition"
        >
          <FaTrashAlt />
        </button>

      </div>

      {/* Error */}
      {error && (
        <p className="text-red-400 text-sm mt-4">
          {error}
        </p>
      )}

      {/* Information */}
      <div className="mt-6 bg-slate-800 rounded-xl p-4">

        <h3 className="font-semibold mb-2">
          Image Guidelines
        </h3>

        <ul className="text-sm text-gray-400 space-y-2 list-disc list-inside">
          <li>Only JPG, JPEG and PNG images.</li>
          <li>Maximum image size: 2 MB.</li>
          <li>Square images look best.</li>
          <li>You can change your photo anytime.</li>
        </ul>

      </div>
    </motion.div>
  );
}