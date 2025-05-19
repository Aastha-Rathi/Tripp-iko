import React from "react";

const FeedPost = ({ post }) => (
  <div className="bg-trippiko-card rounded-lg shadow p-4 flex flex-col gap-2">
    <img src={post.media} alt="Post" className="rounded-lg w-full h-64 object-cover" />
    <div className="flex justify-between items-center">
      <span className="font-bold text-trippiko-accent">{post.location}</span>
      <div className="flex gap-4">
        <button>❤️ {post.likes}</button>
        <button>💬 {post.comments.length}</button>
        <button>🔄</button>
      </div>
    </div>
    <p className="text-trippiko-light">{post.caption}</p>
  </div>
);

export default FeedPost;
