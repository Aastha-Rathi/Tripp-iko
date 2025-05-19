import React, { useState } from "react";
import ProfileCard from "../components/ProfileCard";
import CreatePostModal from "../components/CreatePostModal";
// TODO: Import and use profileService to fetch profile

const Profile = () => {
  const [showModal, setShowModal] = useState(false);
  // TODO: Fetch user profile data

  return (
    <div>
      <ProfileCard /* profile={profile} */ />
      <button onClick={() => setShowModal(true)} className="fixed bottom-8 right-8 bg-trippiko-accent text-trippiko-dark rounded-full p-4 shadow-lg text-3xl">+</button>
      {showModal && <CreatePostModal onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default Profile;
