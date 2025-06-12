import React from "react";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="bg-[#1d1a19] min-h-screen text-white">
      <Navbar />
      <div className="text-center mt-20">
        <h1 className="text-3xl font-bold">Welcome to Xtransport Logistics</h1>
      </div>
    </div>
  );
}

export default App;
