// src/components/Header.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

import { LAYOUT_MAX_WIDTH } from "../../App";
export default function Header() {
  const TOPBAR_HEIGHT = 50; // Topbar height in px
  const [activeDropdown, setActiveDropdown] = useState(null);

  const styles = {
    wrapper: {
      width: "100%",
      position: "fixed",
      top: TOPBAR_HEIGHT,
      left: 0,
      zIndex: 999,
      fontFamily:
        "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
      backgroundColor: "#c41200",
    },
    container: {
      maxWidth: LAYOUT_MAX_WIDTH,
      // align items to the left so nav items appear more to the left side
      margin: "0 auto",
      display: "flex",
      justifyContent: "flex-start", // <- changed from "center"
      alignItems: "center",
      padding: "0 20px",
      height: "55px",
      boxSizing: "border-box",
      position: "relative",
    },
    nav: {
      display: "flex",
      gap: "30px",
      fontSize: "12px",
      fontWeight: "500",
      color: "#fff",
      textTransform: "uppercase",
      alignItems: "center",
      justifyContent: "flex-start", // <- changed from "center"
      flexGrow: 1,
      paddingLeft: "4px", // slight left offset
    },
    cartWrapper: {
      backgroundColor: "#8B0000",
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      position: "absolute",
      right: "0",
      top: "0",
      padding: "0 12px",
      boxSizing: "border-box",
      cursor: "pointer",
    },
    cartContainer: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    cartCount: {
      color: "#fff",
      fontSize: "13px",
      marginBottom: "2px",
    },
    cartIcon: {
      width: "20px",
      height: "20px",
      filter: "invert(1)",
    },
  };

  const handleDropdownEnter = (dropdownName) => setActiveDropdown(dropdownName);
  const handleDropdownLeave = () => setActiveDropdown(null);

  // Dropdown data
  const gameCardsItems = [
    { label: "Apple/iTunes Gift Cards", href: "/apple" },
    { label: "Google Play Gift Cards", href: "/buy-game-cards-online/categories/us-google-play-cards" },
    { label: "Playstation Gift Cards", href: "/buy-game-cards-online/categories/playstation-store" },
    { label: "Nintendo eShop Gift Cards", href: "/buy-game-cards-online/nintendo-eshop" },
    { label: "Xbox Gift Cards", href: "/buy-game-cards-online/categories/xbox-live" },
    { label: "Minecraft Game Cards", href: "/buy-game-cards-online/minecraft" },
    { label: "Karma Koin Game Cards", href: "/buy-game-cards-online/karma-koin" },
    { label: "Nexon Game Cards", href: "/buy-game-cards-online/nexon" },
    { label: "League Of Legends Game Cards", href: "/buy-game-cards-online/riot-points" },
    { label: "EA Gift Cards", href: "/buy-game-cards-online/ea" },
    { label: "Blizzard Game Cards", href: "/buy-game-cards-online/blizzard" },
    { label: "Facebook Gift Cards", href: "/buy-game-cards-online/facebook" },
    { label: "Razer Gold Game Cards", href: "/buy-game-cards-online/razer-gold" },
    { label: "IMVU Game Cards", href: "/buy-game-cards-online/imvu" },
    { label: "Roblox Game Cards", href: "/buy-game-cards-online/roblox" },
    { label: "Final Fantasy XIV - 60 Day Time Cards", href: "/buy-game-cards-online/final-fantasy-xiv" },
    { label: "UC PUBG Mobile Game Cards", href: "/buy-game-cards-online/pubg-mobile" },
    { label: "VALORANT Game Cards", href: "/buy-game-cards-online/valorant" },
    { label: "Webkinz Gift Cards", href: "/buy-game-cards-online/webkinz" },
    { label: "Fortnite V-Bucks", href: "/buy-game-cards-online/fortnite" },
    { label: "Steam Game Cards", href: "/buy-game-cards-online/steam" },
  ];

  const giftCardsItems = [
    { label: "Amazon Gift Cards", href: "/buy-game-cards-online/amazon" },
    { label: "Skype Gift Cards", href: "/buy-game-cards-online/skype" },
    { label: "Hulu Gift Cards", href: "/buy-game-cards-online/hulu" },
    { label: "Spotify Gift Cards", href: "/buy-game-cards-online/spotify" },
    { label: "Netflix Gift Cards", href: "/buy-game-cards-online/netflix" },
    { label: "eBay Gift Cards", href: "/buy-game-cards-online/ebay" },
    { label: "MLB.TV Gift Cards", href: "/buy-game-cards-online/mlb-tv" },
    { label: "Vudu Gift Cards", href: "/buy-game-cards-online/vudu" },
    { label: "Binance USDT Gift Cards", href: "/buy-game-cards-online/binance" },
  ];

  const supportItems = [
    { label: "24/7/365 Customer Support Team", href: "/support" },
    { label: "Returns & Refunds Policy", href: "/support/shipping-returns" },
    { label: "Paying With Paypal", href: "/support/paying-with-paypal" },
    { label: "Terms Of Service", href: "/terms-of-service" },
    { label: "Terms & Conditions", href: "/terms-and-conditions" },
    { label: "Privacy Policy", href: "/privacy-policy" },
  ];

  const faqItems = [
    { label: "Why Game Card Delivery?", href: "/faq/why-game-card-delivery" },
    { label: "Create Game Accounts", href: "/faq/create-game-accounts" },
    { label: "Redeem Your Gift Card", href: "/faq/redeem-your-gift-card" },
    { label: "International Email Delivery", href: "/faq/international-email-delivery" },
    { label: "What Games Are Supported?", href: "/faq/what-games-are-supported" },
    { label: "Why Digital Delivery?", href: "/faq/why-digital-delivery" },
    { label: "How Will I Receive My Gift Cards?", href: "/faq/how-will-i-receive-my-gift-cards" },
    { label: "Why Buy US Gaming Cards?", href: "/faq/why-buy-us-gaming-cards" },
    { label: "Wholesale", href: "/discounted/wholesale-gift-cards" },
    { label: "Testimonials", href: "/reviews/products" },
    { label: "Blog", href: "/best-gaming-blog" },
  ];

  return (
    <header style={styles.wrapper}>
      <div style={styles.container}>
        <nav style={styles.nav}>
          {/* Game Cards Dropdown */}
          <Dropdown
            label="Game Cards"
            items={gameCardsItems}
            active={activeDropdown === "gameCards"}
            onEnter={() => handleDropdownEnter("gameCards")}
            onLeave={handleDropdownLeave}
            twoColumns
          />

          {/* Gift Cards Dropdown */}
          <Dropdown
            label="Gift Cards"
            items={giftCardsItems}
            active={activeDropdown === "giftCards"}
            onEnter={() => handleDropdownEnter("giftCards")}
            onLeave={handleDropdownLeave}
          />

          {/* Simple Links */}
          <SimpleLink href="/buy-game-cards-online/categories/playstation-store" label="Playstation" />
          <SimpleLink href="/buy-game-cards-online/google-play" label="Google Play" />
          <SimpleLink href="/buy-game-cards-online/steam" label="Steam" />

          {/* Support Dropdown */}
          <Dropdown
            label="Support"
            items={supportItems}
            active={activeDropdown === "support"}
            onEnter={() => handleDropdownEnter("support")}
            onLeave={handleDropdownLeave}
          />

          {/* FAQ Dropdown */}
          <Dropdown
            label="FAQ"
            items={faqItems}
            active={activeDropdown === "faq"}
            onEnter={() => handleDropdownEnter("faq")}
            onLeave={handleDropdownLeave}
          />
        </nav>

        {/* Cart */}
        <div style={styles.cartWrapper}>
          <Link to="/checkout" style={{ textDecoration: "none", color: "inherit" }}>
            <div style={styles.cartContainer}>
              <span style={styles.cartCount}>0</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" style={styles.cartIcon} fill="white">
                <path d="M528.12 301.319l47.273-208C578.529 77.878 
                565.965 64 550.059 64H130.94l-9.223-41.016C119.883 
                10.502 109.847 0 97.254 0H24C10.745 0 0 10.745 0 
                24s10.745 24 24 24h53.201l70.949 315.586C134.298 
                386.012 121.92 400 105.102 400H24c-13.255 0-24 
                10.745-24 24s10.745 24 24 24h81.102c43.462 
                0 80.08-30.703 90.325-71.586l326.471-29.036c11.69-1.04 
                21.39-9.098 24.222-20.059zM184 464c-26.51 0-48 
                21.49-48 48s21.49 48 48 48 48-21.49 
                48-48-21.49-48-48-48zm288 0c-26.51 0-48 
                21.49-48 48s21.49 48 48 48 48-21.49 
                48-48-21.49-48-48-48z" />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}

function Dropdown({ label, items, active, onEnter, onLeave, twoColumns }) {
  const baseStyle = {
    display: "flex",
    padding: "0px",
    position: "relative",
  };

  const dropdownMenuStyle = {
    position: "absolute",
    top: "100%",
    left: "0",
    backgroundColor: "#8B0000",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    border: "1px solid #ddd",
    borderRadius: "4px",
    minWidth: twoColumns ? "500px" : "230px", 
    zIndex: 1000,
    display: active ? "block" : "none",
    padding: "12px 0", 
  };

  const dropdownListStyle = {
    listStyle: "none",
    margin: 0,
    padding: "10px 15px",
    display: twoColumns ? "grid" : "block",
    gridTemplateColumns: twoColumns ? "1fr 1fr" : "none",
    gap: twoColumns ? "0 30px" : "0",
  };

  return (
    <div style={baseStyle} onMouseEnter={onEnter} onMouseLeave={onLeave}>
      <div style={{ display: "flex", alignItems: "center", cursor: "pointer", color: "#fff", padding: "0 10px" }}>
        <span style={{ color: "#fff", textDecoration: "none" }}>{label}</span>
      </div>
      <div style={dropdownMenuStyle}>
        <ul style={dropdownListStyle}>
          {items.map((item, index) => (
            <li key={index}>
              <Link
                to={item.href}
                style={{ display: "block", color: "#fff", padding: "8px 15px", textDecoration: "none" }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#a30000")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function SimpleLink({ href, label }) {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Link to={href} style={{ color: "#fff", padding: "0 10px", textDecoration: "none" }}>
        {label}
      </Link>
    </div>
  );
}