import React, { useState } from "react";
// TODO: Import and use postService for creating post

const CreatePostModal = ({ onClose }) => {
  const [form, setForm] = useState({ caption: "", location: "", media: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Post media upload API here
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <form onSubmit={handleSubmit} className="bg-trippiko-card p-8 rounded-lg flex flex-col gap-4 w-full max-w-md">
        <h2 className="text-xl font-heading text-trippiko-accent">Create New Trip Post</h2>
        <input name="caption" placeholder="Caption" value={form.caption} onChange={handleChange} className="p-2 rounded bg-trippiko-light" required />
        <input name="location" placeholder="Location" value={form.location} onChange={handleChange} className="p-2 rounded bg-trippiko-light" required />
        <input name="media" placeholder="Media URL" value={form.media} onChange={handleChange} className="p-2 rounded bg-trippiko-light" />
        <div className="flex gap-2">
          <button type="submit" className="bg-trippiko-accent text-trippiko-dark px-4 py-2 rounded">Post</button>
          <button type="button" onClick={onClose} className="bg-trippiko-light text-trippiko-dark px-4 py-2 rounded">Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default CreatePostModal;
