import { useState } from "react";
import API from "../services/api";

function ForgotPassword() {
  const [form, setForm] = useState({
    email: "",
    petName: "",
    newPassword: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/auth/reset-password", form);

      setMessage(res.data.message);
    } catch (err) {
      setMessage(err.response?.data?.message || "Error resetting password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Reset Password</h2>

        {message && (
          <p className="text-center text-green-600 mb-4">{message}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="text"
            name="petName"
            placeholder="Your Pet Name"
            onChange={handleChange}
            required
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="password"
            name="newPassword"
            placeholder="New Password"
            onChange={handleChange}
            required
            className="w-full border p-3 rounded-lg"
          />

          <button className="w-full bg-blue-600 text-white py-3 rounded-lg">
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
