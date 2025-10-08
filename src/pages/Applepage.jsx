// src/pages/Applepage.jsx
import React from "react";

// UI Components
import AppleProduct from "../components/UI/AppleProduct";
import Features from "../components/UI/Features";
import Sidebar from "../components/UI/Sidebar";

const Applepage = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f7f7f7" }}>
      {/* Main Content Section */}
      <main
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "20px",
          padding: "20px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Sidebar Section */}
        <aside style={{ flex: "1", minWidth: "250px" }}>
          <Sidebar />
        </aside>

        {/* Apple Products and Features Section */}
        <section style={{ flex: "3", display: "flex", flexDirection: "column", gap: "30px" }}>
          {/* Apple Products */}
          <AppleProduct />

          {/* Features Section */}
          <Features />
        </section>
      </main>
    </div>
  );
};

export default Applepage;