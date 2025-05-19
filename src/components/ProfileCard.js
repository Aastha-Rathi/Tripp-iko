// import React from "react";

// const ProfileCard = ({ profile }) => (
//   <div className="bg-trippiko-card rounded-lg shadow p-6 flex flex-col md:flex-row items-center gap-6 mb-8">
//     <img src={profile?.profilePic || "https://via.placeholder.com/100"} alt={profile?.name || "User"} className="w-24 h-24 rounded-full" />
//     <div className="flex-1">
//       <h2 className="text-2xl font-bold text-trippiko-accent">{profile?.name || "User Name"}</h2>
//       <p className="text-trippiko-light mb-2">{profile?.bio || "User bio goes here."}</p>
//       <div className="flex gap-2 mb-2">
//         <span className="bg-trippiko-accent text-trippiko-dark px-2 py-1 rounded text-xs">{profile?.travelerType || "solo"}</span>
//         {profile?.interests?.map((interest, idx) => (
//           <span key={idx} className="bg-trippiko-light text-trippiko-dark px-2 py-1 rounded text-xs">{interest}</span>
//         ))}
//       </div>
//       <button className="bg-trippiko-accent text-trippiko-dark px-4 py-2 rounded mt-2">Message</button>
//     </div>
//   </div>
// );

// export default ProfileCard;


import React, { useState } from "react";
import ChatWindow from "./ChatWindow";

const ProfileCard = ({ profile }) => {
  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello!", fromMe: false },
    { text: "Hi there!", fromMe: true },
  ]);

  const handleSend = (msg) => {
    setMessages([...messages, { text: msg, fromMe: true }]);
    // TODO: Send to backend
  };

  return (
    <div className="bg-trippiko-card rounded-lg shadow p-6 flex flex-col md:flex-row items-center gap-6 mb-8">
      <img
        src={profile?.profilePic || "https://via.placeholder.com/100"}
        alt={profile?.name || "User"}
        className="w-24 h-24 rounded-full"
      />
      <div className="flex-1">
        <h2 className="text-2xl font-bold text-trippiko-accent">
          {profile?.name || "User Name"}
        </h2>
        <p className="text-trippiko-light mb-2">
          {profile?.bio || "User bio goes here."}
        </p>
        <div className="flex gap-2 mb-2">
          <span className="bg-trippiko-accent text-trippiko-dark px-2 py-1 rounded text-xs">
            {profile?.travelerType || "solo"}
          </span>
          {profile?.interests?.map((interest, idx) => (
            <span
              key={idx}
              className="bg-trippiko-light text-trippiko-dark px-2 py-1 rounded text-xs"
            >
              {interest}
            </span>
          ))}
        </div>
        <button
          className="bg-trippiko-accent text-trippiko-dark px-4 py-2 rounded mt-2"
          onClick={() => setShowChat(true)}
        >
          Message
        </button>
      </div>
      {showChat && (
        <ChatWindow
          recipient={profile}
          messages={messages}
          onSend={handleSend}
          onClose={() => setShowChat(false)}
        />
      )}
    </div>
  );
};

export default ProfileCard;