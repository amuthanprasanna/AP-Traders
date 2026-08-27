import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import WhyUs from "./pages/WhyUs.jsx";
import Services from "./pages/Services/Services.jsx";
import Stocks from "./pages/Services/Stocks.jsx";
import MutualFunds from "./pages/Services/MutualFunds.jsx";
import Commodities from "./pages/Services/Commodities.jsx";
import Contact from "./pages/Contact.jsx";
import SignIn from "./pages/SignIn.jsx";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/whyus" element={<WhyUs />} />
        <Route path="/services" element={<Services />}>
          <Route path="stocks" element={<Stocks />} />
          <Route path="mutualfunds" element={<MutualFunds />} />
          <Route path="commodities" element={<Commodities />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
