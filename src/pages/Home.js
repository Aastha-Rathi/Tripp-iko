import React, { useEffect, useState } from "react";
import FeedPost from "../components/FeedPost";
// TODO: Import and use postService to fetch posts

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // TODO: Fetch feed posts from backend here
    // setPosts(response.data)
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-heading text-trippiko-accent mb-6">Inspiring Explorations And Endless Possibilities</h1>
      <div className="grid gap-6">
        {posts.map((post) => (
          <FeedPost key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Home;
