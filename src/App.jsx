import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Footer from "./components/Footer";
import ContactUs from "./pages/Contact";
import QuoteRequestPage from "./pages/QuickQuote";
import AdminPanel from "./Admin/Admin";

import Services from "./pages/Services";
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
            <Route path="/services" element={<Services />} />
          {/*<Route path="/carriers" element={<Carriers />} /> */}
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} /> 
          <Route path="/quickquote" element={<QuoteRequestPage />} />
          <Route path="/admin" element={<AdminPanel />} />

        </Routes>
        <Footer/>
       
      </div>
    </Router>
  );
}

export default App;
