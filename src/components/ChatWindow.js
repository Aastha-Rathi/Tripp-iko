// import React, { useState } from "react";
// // TODO: Import and use messageService for chat

// const ChatWindow = ({ recipient }) => {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState("");

//   const sendMessage = (e) => {
//     e.preventDefault();
//     // TODO: Send message API here
//     setInput("");
//   };

//   return (
//     <div className="fixed bottom-0 right-0 w-full max-w-md bg-trippiko-card p-4 rounded-t-lg shadow-lg">
//       <h3 className="font-bold text-trippiko-accent mb-2">Chat with {recipient.name}</h3>
//       <div className="h-64 overflow-y-auto bg-trippiko-light rounded p-2 mb-2">
//         {messages.map((msg, idx) => (
//           <div key={idx} className={`mb-1 ${msg.fromMe ? "text-right" : "text-left"}`}>
//             <span className="inline-block bg-trippiko-accent text-trippiko-dark px-2 py-1 rounded">{msg.text}</span>
//           </div>
//         ))}
//       </div>
//       <form onSubmit={sendMessage} className="flex gap-2">
//         <input value={input} onChange={(e) => setInput(e.target.value)} className="flex-1 p-2 rounded bg-trippiko-light" placeholder="Type a message..." />
//         <button type="submit" className="bg-trippiko-accent text-trippiko-dark px-4 py-2 rounded">Send</button>
//       </form>
//     </div>
//   );
// };

// export default ChatWindow;



import React, { useState, useRef, useEffect } from "react";

// Example props: recipient = { name: "Akshay", profilePic: "..." }
const ChatWindow = ({ recipient, messages = [], onSend }) => {
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  // Scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onSend(input);
      setInput("");
    }
  };

  return (
    <div className="fixed bottom-8 right-8 w-full max-w-md bg-trippiko-lightblue shadow-2xl rounded-2xl flex flex-col border border-trippiko-darkteal z-50">
      {/* Header */}
      <div className="flex items-center gap-3 px-4 py-3 bg-trippiko-teal rounded-t-2xl">
        <img
          src={recipient?.profilePic || "https://via.placeholder.com/40"}
          alt={recipient?.name || "User"}
          className="w-10 h-10 rounded-full border-2 border-trippiko-darkteal"
        />
        <span className="font-heading text-lg text-trippiko-black">{recipient?.name || "User"}</span>
      </div>
      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-2 space-y-2 bg-trippiko-verylightblue" style={{ minHeight: 300, maxHeight: 400 }}>
        {messages.length === 0 && (
          <div className="text-center text-trippiko-darkteal opacity-60 mt-10">No messages yet. Say hello!</div>
        )}
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex ${msg.fromMe ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`px-4 py-2 rounded-2xl max-w-xs break-words ${
                msg.fromMe
                  ? "bg-trippiko-orange text-trippiko-black"
                  : "bg-white text-trippiko-darkteal border border-trippiko-lightblue"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      {/* Input */}
      <form onSubmit={handleSend} className="flex items-center gap-2 px-4 py-3 bg-trippiko-lightblue rounded-b-2xl border-t border-trippiko-darkteal">
        <input
          className="flex-1 rounded-full px-4 py-2 border border-trippiko-darkteal focus:outline-none focus:ring-2 focus:ring-trippiko-teal"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="bg-trippiko-teal text-white px-4 py-2 rounded-full font-bold hover:bg-trippiko-darkteal transition"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatWindow;