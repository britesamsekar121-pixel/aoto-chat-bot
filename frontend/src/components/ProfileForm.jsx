import { useState, useEffect } from "react";

const initialForm = {
  fullName: "", age: "", email: "",
  phone: "", gender: "", dob: "", country: "", state: "", city: "",
  occupation: "", college: "", degree: "", skills: "", experience: "",
  bio: "", languages: "", interests: "", goals: "",
  github: "", linkedin: "", portfolio: "", website: "",
  aiPersonality: "",
};

export default function ProfileForm({ onChange }) {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    onChange?.(formData);
  }, [formData, onChange]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full Name is required";
    if (!formData.age || isNaN(formData.age) || Number(formData.age) <= 0)
      newErrors.age = "Valid age is required";
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Valid email is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return (
    <div className="space-y-10">

      {/* Required Information */}
      <section>
        <h2 className="text-2xl font-bold mb-6">⭐ Required Information</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <InputField label="Full Name" name="fullName" value={formData.fullName} onChange={handleInput} required error={errors.fullName} />
          <InputField label="Age" name="age" type="number" value={formData.age} onChange={handleInput} required error={errors.age} />
          <InputField label="Email" name="email" type="email" value={formData.email} onChange={handleInput} required error={errors.email} />
        </div>
      </section>

      {/* Personal Information */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Personal Information</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <InputField label="Phone Number" name="phone" type="tel" value={formData.phone} onChange={handleInput} />
          <SelectField
            label="Gender"
            name="gender"
            value={formData.gender}
            onChange={handleInput}
            options={["Male", "Female", "Other", "Prefer not to say"]}
          />
          <InputField label="Date of Birth" name="dob" type="date" value={formData.dob} onChange={handleInput} />
          <InputField label="Country" name="country" value={formData.country} onChange={handleInput} />
          <InputField label="State" name="state" value={formData.state} onChange={handleInput} />
          <InputField label="City" name="city" value={formData.city} onChange={handleInput} />
        </div>
      </section>

      {/* Professional Information */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Professional Information</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <InputField label="Occupation" name="occupation" value={formData.occupation} onChange={handleInput} />
          <InputField label="College / University" name="college" value={formData.college} onChange={handleInput} />
          <InputField label="Degree" name="degree" value={formData.degree} onChange={handleInput} />
          <InputField label="Skills (comma-separated)" name="skills" value={formData.skills} onChange={handleInput} />
          <SelectField
            label="Experience Level"
            name="experience"
            value={formData.experience}
            onChange={handleInput}
            options={["Student", "Entry Level", "Mid Level", "Senior Level", "Expert"]}
          />
        </div>
      </section>

      {/* About Yourself */}
      <section>
        <h2 className="text-2xl font-bold mb-6">About Yourself</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <TextAreaField label="Bio" name="bio" value={formData.bio} onChange={handleInput} />
          <InputField label="Languages Spoken" name="languages" value={formData.languages} onChange={handleInput} />
          <TextAreaField label="Interests & Hobbies" name="interests" value={formData.interests} onChange={handleInput} />
          <TextAreaField label="Goals" name="goals" value={formData.goals} onChange={handleInput} />
        </div>
      </section>

      {/* Social Links */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Social Links</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <InputField label="GitHub" name="github" type="url" placeholder="https://github.com/username" value={formData.github} onChange={handleInput} />
          <InputField label="LinkedIn" name="linkedin" type="url" placeholder="https://linkedin.com/in/username" value={formData.linkedin} onChange={handleInput} />
          <InputField label="Portfolio" name="portfolio" type="url" placeholder="https://yourportfolio.com" value={formData.portfolio} onChange={handleInput} />
          <InputField label="Website" name="website" type="url" placeholder="https://yourwebsite.com" value={formData.website} onChange={handleInput} />
        </div>
      </section>

      {/* AI Preferences */}
      <section>
        <h2 className="text-2xl font-bold mb-6">AI Preferences</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <SelectField
            label="Preferred AI Personality"
            name="aiPersonality"
            value={formData.aiPersonality}
            onChange={handleInput}
            options={["Friendly", "Professional", "Motivational", "Funny", "Mentor"]}
          />
        </div>
      </section>

      {/* Submit */}
      <div>
        <button
          type="button"
          onClick={validate}
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition"
        >
          Save Profile
        </button>
      </div>

    </div>
  );
}

/* ─── Reusable Components ─── */

function InputField({ label, required = false, error, ...props }) {
  return (
    <div>
      <label className="block mb-2 font-medium text-gray-300">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <input
        {...props}
        className={`w-full rounded-xl bg-slate-800 border px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition ${
          error ? "border-red-500" : "border-slate-700"
        }`}
      />
      {error && <span className="text-red-500 text-xs mt-1 block">{error}</span>}
    </div>
  );
}

function SelectField({ label, options = [], error, ...props }) {
  return (
    <div>
      <label className="block mb-2 font-medium text-gray-300">{label}</label>
      <select
        {...props}
        className={`w-full rounded-xl bg-slate-800 border px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition ${
          error ? "border-red-500" : "border-slate-700"
        }`}
      >
        <option value="">-- Select --</option>
        {options.map((item) => (
          <option key={item} value={item}>{item}</option>
        ))}
      </select>
      {error && <span className="text-red-500 text-xs mt-1 block">{error}</span>}
    </div>
  );
}

function TextAreaField({ label, rows = 4, error, ...props }) {
  return (
    <div>
      <label className="block mb-2 font-medium text-gray-300">{label}</label>
      <textarea
        rows={rows}
        {...props}
        className={`w-full rounded-xl bg-slate-800 border px-4 py-3 outline-none resize-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition ${
          error ? "border-red-500" : "border-slate-700"
        }`}
      />
      {error && <span className="text-red-500 text-xs mt-1 block">{error}</span>}
    </div>
  );
}
