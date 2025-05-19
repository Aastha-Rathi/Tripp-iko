
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import AppRoutes from "./routes/AppRoutes";

function App() {
  <div className="bg-red-500 text-white p-8">TAILWIND TEST</div>
  return (
    <Router>
      <div className="flex min-h-screen bg-trippiko-bg">
        <Sidebar />
        <main className="flex-1 p-4 md:p-8 overflow-y-auto">
          <AppRoutes />
        </main>
      </div>
    </Router>
  );
}

export default App;