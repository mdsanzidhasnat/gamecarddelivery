import React from "react";

export default function Footer() {
  const styles = {
    // Make the footer background full-bleed regardless of parent container
    wrapper: {
      width: "100vw",
      position: "relative",
      left: "50%",
      right: "50%",
      marginLeft: "-50vw",
      marginRight: "-50vw",
      backgroundColor: "#000000", // pure black
      color: "#bfc3c6",
      padding: "60px 40px 120px",
      boxSizing: "border-box",
      fontFamily:
        "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
      zIndex: 0,
    },
    // Inner container keeps the centered content constrained
    inner: {
      maxWidth: "1180px",
      margin: "0 auto",
      display: "flex",
      gap: "40px",
      alignItems: "flex-start",
      justifyContent: "space-between",
      padding: "0 20px",
      boxSizing: "border-box",
    },
    column: {
      flex: "1 1 0",
      minWidth: "180px",
    },
    heading: {
      color: "#ffffff",
      fontSize: "22px",
      marginBottom: "8px",
      fontWeight: 500,
    },
    smallItalic: {
      fontStyle: "italic",
      color: "#9a9fa3",
      fontSize: "13px",
      marginBottom: "14px",
    },
    list: {
      listStyle: "none",
      padding: 0,
      margin: 0,
      lineHeight: "1.9",
      fontSize: "13px",
      color: "#9a9fa3",
    },
    disclaimer: {
      marginTop: "18px",
      color: "#8f9295",
      fontSize: "12px",
      lineHeight: "1.6",
      maxWidth: "320px",
    },
    email: {
      color: "#fff",
      fontWeight: 600,
      fontSize: "14px",
      marginBottom: "12px",
      display: "block",
    },
    phone: {
      color: "#fff",
      fontWeight: 700,
      fontSize: "20px",
      marginBottom: "18px",
      display: "block",
    },
    socialRow: {
      display: "flex",
      gap: "10px",
    },
    social: {
      width: "36px",
      height: "36px",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "rgba(255,255,255,0.05)",
      border: "2px solid rgba(255,255,255,0.08)",
      fontSize: "16px",
      color: "#9fb5d9",
    },
    reviewsWrap: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: "18px",
      display: "flex",
      justifyContent: "center",
    },
    reviewsBtn: {
      background: "#0b6adf",
      color: "#fff",
      padding: "10px 28px",
      borderRadius: "3px",
      fontWeight: 700,
      letterSpacing: "0.6px",
      boxShadow: "0 2px 0 rgba(0,0,0,0.2)",
      border: "none",
      cursor: "pointer",
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
    },
    reviewsStar: {
      fontSize: "12px",
    },
  };

  return (
    <footer style={styles.wrapper}>
      <div style={styles.inner}>
        {/* Column 1 - Fast Links */}
        <div style={{ ...styles.column, maxWidth: "260px" }}>
          <div style={styles.heading}>Fast Links</div>
          <div style={styles.smallItalic}>
            Most Trusted Online Shop for Gift Cards!
          </div>
          <ul style={styles.list}>
            <li>Wholesale Gift Cards</li>
            <li>Reviews</li>
            <li>FAQ</li>
            <li>Terms And Conditions</li>
            <li>Terms Of Service</li>
            <li>Privacy Policy</li>
            <li>Sitemap</li>
            <li>Blog</li>
          </ul>

          <div style={styles.disclaimer}>
            <strong>Disclaimer:</strong> The businesses represented are not affiliated or
            sponsors of Card Delivery. The logos and identifying trademarks of each
            company are owned by each company and/or its affiliates.
            <div style={{ marginTop: "12px" }}>
              All prices are in USD. Card Delivery
            </div>
          </div>
        </div>

        {/* Column 2 - Product Categories */}
        <div style={styles.column}>
          <div style={styles.heading}>Product Categories</div>
          <div style={styles.smallItalic}>
            Shop Google Play Gift Cards & More!
          </div>
          <ul style={styles.list}>
            <li>Game Cards</li>
            <li>Gift Cards</li>
            <li>iTunes</li>
            <li>Google Play</li>
            <li>Steam</li>
            <li>PC</li>
          </ul>
        </div>

        {/* Column 3 - Questions? */}
        <div style={styles.column}>
          <div style={styles.heading}>Questions?</div>
          <div style={styles.smallItalic}>
            The Best Source For Gift Cards Online!
          </div>
          <ul style={styles.list}>
            <li>Why GameCardDelivery?</li>
            <li>Customer Support</li>
            <li>Returns And Refund Policy</li>
            <li>International Email Delivery</li>
            <li>What Games Are Supported?</li>
            <li>Why Digital Delivery?</li>
            <li>How Will I Receive My Gift Cards?</li>
            <li>How To Redeem Your Gift Card?</li>
            <li>Paying With Paypal</li>
          </ul>
        </div>

        {/* Column 4 - Contact */}
        <div style={{ ...styles.column, minWidth: "220px" }}>
          <div style={styles.heading}>Contact Our Support Team</div>
          <div
            style={{ fontStyle: "italic", color: "#9a9fa3", marginBottom: "10px" }}
          >
            Email Or Call Us - Available 24/7!
          </div>

          <span style={styles.email}>support@gamecarddelivery.com</span>
          <span style={styles.phone}>1-800-257-7220</span>

          <div style={{ height: "18px" }} />

          <div style={{ ...styles.heading, fontSize: "18px" }}>
            Connect With Us
          </div>
          <div
            style={{ fontStyle: "italic", color: "#9a9fa3", marginBottom: "8px" }}
          >
            See What's New in the Gaming World!
          </div>

          <div style={styles.socialRow}>
            <div style={styles.social} aria-label="facebook">
              f
            </div>
            <div style={styles.social} aria-label="twitter">
              t
            </div>
          </div>
        </div>
      </div>

      {/* Centered Reviews Button */}
      <div style={styles.reviewsWrap}>
        <button style={styles.reviewsBtn}>
          <span style={styles.reviewsStar}>★</span>
          <span>REVIEWS</span>
          <span style={styles.reviewsStar}>★</span>
        </button>
      </div>
    </footer>
  );
}