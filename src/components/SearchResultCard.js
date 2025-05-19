import React from "react";
import { useNavigate } from "react-router-dom";

const SearchResultCard = ({ profile }) => {
  const navigate = useNavigate();
  return (
    <div className="bg-trippiko-card rounded-lg p-4 flex flex-col md:flex-row items-center gap-4">
      <img src={profile.profilePic} alt={profile.name} className="w-16 h-16 rounded-full" />
      <div className="flex-1">
        <h3 className="font-bold text-trippiko-accent">{profile.name}</h3>
        <p className="text-trippiko-light">{profile.bio}</p>
      </div>
      <button onClick={() => navigate(`/profile/${profile.id}`)} className="bg-trippiko-accent text-trippiko-dark px-4 py-2 rounded">View Profile</button>
      <button className="bg-trippiko-light text-trippiko-dark px-4 py-2 rounded">Join</button>
    </div>
  );
};

export default SearchResultCard;
