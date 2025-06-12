import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
// import Services from "./pages/Services";
// import Carriers from "./pages/Carriers";
// import Company from "./pages/Company";
// import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div className="bg-[#1d1a19] min-h-screen text-white">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/services" element={<Services />} />
          <Route path="/carriers" element={<Carriers />} />
          <Route path="/company" element={<Company />} />
          <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
