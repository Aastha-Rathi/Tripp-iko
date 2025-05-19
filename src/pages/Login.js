import React, { useState } from "react";
// TODO: Import and use authService for login API

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Call login API here
    // On success: redirect to /profile-creation or /home
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-trippiko-bg">
      <div className="bg-trippiko-card p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-heading mb-6 text-trippiko-accent">Login to Trippiko</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} className="p-2 rounded bg-trippiko-light" required />
          <input name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} className="p-2 rounded bg-trippiko-light" required />
          <button type="submit" className="bg-trippiko-accent text-trippiko-dark font-bold py-2 rounded">Login</button>
        </form>
        <p className="mt-4 text-trippiko-light">Don't have an account? <a href="/signup" className="text-trippiko-accent underline">Sign up</a></p>
      </div>
    </div>
  );
};

export default Login;