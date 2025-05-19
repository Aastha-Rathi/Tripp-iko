import React, { useState } from "react";
// TODO: Import and use authService for signup API

const Signup = () => {
  const [form, setForm] = useState({ email: "", username: "", password: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Call signup API here
    // On success: redirect to /login
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-trippiko-bg">
      <div className="bg-trippiko-card p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-heading mb-6 text-trippiko-accent">Sign Up for Trippiko</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} className="p-2 rounded bg-trippiko-light" required />
          <input name="username" type="text" placeholder="Username" value={form.username} onChange={handleChange} className="p-2 rounded bg-trippiko-light" required />
          <input name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} className="p-2 rounded bg-trippiko-light" required />
          <button type="submit" className="bg-trippiko-accent text-trippiko-dark font-bold py-2 rounded">Sign Up</button>
        </form>
        <p className="mt-4 text-trippiko-light">Already have an account? <a href="/login" className="text-trippiko-accent underline">Login</a></p>
      </div>
    </div>
  );
};

export default Signup;