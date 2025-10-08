// src/components/UI/AppleProduct.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

export default function AppleProduct() {
  const navigate = useNavigate();

  const container = {
    flex: 1,
    padding: "20px 24px",
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
    boxSizing: "border-box",
    background: "#f7f7f7",
    minHeight: "100vh",
  };

  const titleBar = {
    marginBottom: 20,
    borderRadius: "8px",
    padding: "30px 20px",
    position: "relative",
    overflow: "hidden",
    // red -> black gradient
    background: "linear-gradient(135deg, #c41200 0%, #7a0d0d 30%, #1a1a1a 100%)",
    color: "#fff",
  };

  // decorative shapes (we render them as divs positioned absolutely)
  const decoCircle = (size, top, left, opacity, blur) => ({
    position: "absolute",
    width: size,
    height: size,
    top,
    left,
    borderRadius: "50%",
    background:
      "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.12), rgba(255,255,255,0))",
    opacity,
    filter: `blur(${blur}px)`,
    pointerEvents: "none",
  });

  const decoStripe = {
    position: "absolute",
    width: "140%",
    height: 120,
    left: "-20%",
    top: "50%",
    transform: "translateY(-50%) rotate(-14deg)",
    background:
      "linear-gradient(90deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 50%, rgba(0,0,0,0.06) 100%)",
    pointerEvents: "none",
    mixBlendMode: "overlay",
  };

  const pageTitle = {
    fontSize: "36px", // 🔥 Increased font size
    fontWeight: 800,
    color: "#fff",
    marginBottom: "8px",
    position: "relative",
    zIndex: 2,
    textShadow: "0 3px 10px rgba(0,0,0,0.5)",
  };

  const subtitle = {
    color: "rgba(255,255,255,0.95)",
    fontSize: "16px",
    marginBottom: 0,
    position: "relative",
    zIndex: 2,
    textShadow: "0 2px 6px rgba(0,0,0,0.45)",
  };

  const grid = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
    gap: 14,
    marginBottom: 24,
  };

  const card = {
    background: "#fff",
    borderRadius: 6,
    boxShadow: "0 4px 10px rgba(0,0,0,0.04)",
    padding: 12,
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    minHeight: 150,
  };

  const imgBox = {
    height: 90,
    borderRadius: 6,
    background: "linear-gradient(135deg,#f1f8ff,#fff)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    border: "1px solid #f1f1f1",
    fontSize: 12,
    color: "#333",
    textAlign: "center",
    padding: 6,
  };

  const priceRow = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  };

  const buyBtn = {
    background: "#c41200",
    color: "#fff",
    border: "none",
    padding: "8px 10px",
    borderRadius: 4,
    cursor: "pointer",
    fontWeight: 700,
    fontSize: 13,
  };

  const products = [
    { id: 1, value: "$2", desc: "The gift card for everything Apple" },
    { id: 5, value: "$5", desc: "The gift card for everything Apple" },
    { id: 10, value: "$10", desc: "The gift card for everything Apple" },
    { id: 15, value: "$15", desc: "The gift card for everything Apple" },
    { id: 25, value: "$25", desc: "The gift card for everything Apple" },
    { id: 50, value: "$50", desc: "The gift card for everything Apple" },
    { id: 100, value: "$100", desc: "The gift card for everything Apple" },
    { id: 200, value: "$200", desc: "The gift card for everything Apple" },
    { id: 500, value: "$500", desc: "The gift card for everything Apple" },
  ];

  // ✅ Navigate to Checkout Page
  const handleBuyNow = (product) => {
    navigate("/checkout", { state: { product } });
  };

  return (
    <main style={container}>
      {/* Title Section with red-black gradient + decorations */}
      <div style={titleBar}>
        {/* decorative stripe */}
        <div style={decoStripe} />

        {/* soft glowing circles for depth */}
        <div style={decoCircle(260, "-40px", "-30px", 0.25, 40)} />
        <div style={decoCircle(180, "10px", "70%", 0.12, 30)} />
        <div style={decoCircle(120, "70px", "60%", 0.08, 24)} />

        {/* foreground content */}
        <div style={pageTitle}>USA Apple Gift Cards</div>
      </div>

      {/* Products Grid */}
      <section style={grid}>
        {products.map((p) => (
          <article key={p.id} style={card}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 8,
              }}
            >
              <div style={{ fontSize: 13, fontWeight: 700 }}>{p.value}</div>
              <div style={{ fontSize: 12, color: "#999" }}>Code</div>
            </div>

            <div style={imgBox}>{p.desc}</div>

            <div style={priceRow}>
              <div
                style={{ fontWeight: 700, fontSize: 14, color: "#222" }}
              >
                {p.value}
              </div>
              <button style={buyBtn} onClick={() => handleBuyNow(p)}>
                BUY NOW
              </button>
            </div>
          </article>
        ))}
      </section>

      {/* Info Section */}
      <section
        style={{
          background: "#fff",
          padding: 16,
          borderRadius: 6,
          boxShadow: "0 1px 0 rgba(0,0,0,0.03)",
        }}
      >
        <h3 style={{ marginTop: 0 }}>Buy USA Apple Gift Cards</h3>
        <p style={{ color: "#555", lineHeight: 1.6 }}>
          We offer instant delivery of Apple Gift Cards via email. After
          purchase, we'll send you the code and instructions to redeem at Apple
          Store or iTunes.
        </p>
        <h4 style={{ marginBottom: 6 }}>The Gift Card For Everything Apple</h4>
        <p style={{ color: "#555", lineHeight: 1.6 }}>
          Use Apple Gift Card to buy apps, games, subscriptions, books, movies,
          iCloud storage and more across Apple services.
        </p>
      </section>
    </main>
  );
}