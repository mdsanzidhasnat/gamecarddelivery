import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "/home/sanzid/gamecarddelivery/my-app/src/assets/images/gamecarddelivery-logo.webp";

export default function TopBar() {
  const navigate = useNavigate();
  const TOPBAR_HEIGHT = 56;

  const styles = {
    wrapper: {
      width: "100%",
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
      color: "#fff",
      backgroundColor: "#000",
      position: "fixed",
      top: 0,
      left: 0,
      zIndex: 1000,
    },
    topStrip: {
      height: TOPBAR_HEIGHT,
      background: "#0f0f10",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "0 18px",
      width: "100%",
      boxShadow: "0 1px 0 rgba(255,255,255,0.03) inset",
    },
    container: { 
      maxWidth: 1200, 
      margin: "0 auto", 
      width: "100%", 
      display: "flex", 
      alignItems: "center", 
      justifyContent: "space-between" 
    },
    leftArea: { display: "flex", alignItems: "center", gap: 12, cursor: "pointer" },
    logoImage: { width: 32, height: 24, objectFit: "cover", borderRadius: 2, transform: "skewX(-12deg)" },
    brand: { fontSize: 20, fontWeight: 600, color: "#f3f3f3", letterSpacing: 0.3 },
    rightArea: { display: "flex", alignItems: "center", gap: 14 },
    searchBox: { display: "flex", alignItems: "center", background: "#fff", borderRadius: 3, padding: "5px 8px", minWidth: 300, height: 38, border: "1px solid rgba(0,0,0,0.08)" },
    searchInput: { border: "none", outline: "none", padding: "7px 9px", fontSize: 15, flex: 1 },
    searchBtn: { height: 28, minWidth: 38, display: "inline-flex", alignItems: "center", justifyContent: "center", background: "#c42b1f", color: "#fff", border: "none", borderRadius: 3, padding: "0 12px", fontWeight: 600, cursor: "pointer", fontSize: 14 },
    slimBtn: { background: "transparent", color: "#cfcfcf", padding: "9px 14px", borderRadius: 3, border: "1px solid rgba(255,255,255,0.03)", cursor: "pointer", fontSize: 14 },
    checkoutBtn: { background: "#d9d9da", color: "#111", padding: "9px 14px", borderRadius: 3, border: "none", fontWeight: 700, cursor: "pointer", fontSize: 14 },
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.topStrip}>
        <div style={styles.container}>
          <div style={styles.leftArea} onClick={() => navigate("/")}>
            {/* Make brand clickable */}
            <img src={logo} alt="GameCardDelivery logo" style={styles.logoImage} />
            <div style={styles.brand}>GameCardDelivery</div>
          </div>
          <div style={styles.rightArea}>
            <div style={styles.searchBox}>
              <input placeholder="Search" style={styles.searchInput} />
              <button style={styles.searchBtn}>🔍</button>
            </div>
            <button style={styles.slimBtn} onClick={() => navigate("/login")}>
              LOGIN
            </button>
            <button style={styles.checkoutBtn} onClick={() => navigate("/checkout")}>
              CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}