// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Layout Components
import TopBar from "./components/layout/TopBar";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import FooterPaymentSection from "./components/layout/FooterPaymentSection";

// Pages
import Layout from "./components/layout/Layout"; // Homepage content
import LoginPage from "./pages/LoginPage";
import CheckoutPage from "./pages/CheckoutPage";
import GameCardDeliveryReviews from "./pages/GameCardDeliveryReviews";
import ApplePage from "./pages/Applepage"; // Apple page

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App" style={{ margin: 0, padding: 0, fontFamily: "Arial, sans-serif" }}>
        {/* Keep TopBar and Header globally */}
        <TopBar />
        <Header />

        <Routes>
          {/* Homepage */}
          <Route path="/" element={<Layout />} />

          {/* Auth & Checkout */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />

          {/* Reviews */}
          <Route path="/reviews" element={<GameCardDeliveryReviews />} />

          {/* New Apple/iTunes page */}
          <Route path="/apple" element={<ApplePage />} />
        </Routes>

        {/* Footer globally */}
        <FooterPaymentSection />
        <Footer />
      </div>
    </Router>
  );
}

export default App;