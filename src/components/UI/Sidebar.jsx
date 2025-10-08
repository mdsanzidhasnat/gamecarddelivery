// Sidebar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [activeCategory, setActiveCategory] = useState("Game Cards");
  const [expandedCategories, setExpandedCategories] = useState({});

  const toggleCategory = (categoryName) => {
    setExpandedCategories(prev => ({
      ...prev,
      [categoryName]: !prev[categoryName]
    }));
  };

  const styles = {
    wrapper: {
      width: 300,
      boxSizing: "border-box",
      padding: "24px 20px",
      background: "linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%)",
      borderRight: "1px solid #e2e8f0",
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      height: "100vh",
      overflowY: "auto",
      position: "sticky",
      top: 0,
    },
    logo: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      marginBottom: 32,
      paddingBottom: 20,
      borderBottom: "1px solid #e2e8f0",
    },
    logoImg: {
      width: 42,
      height: 42,
      borderRadius: 10,
      background: "linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#fff",
      fontWeight: 700,
      fontSize: 16,
      boxShadow: "0 4px 12px rgba(220, 38, 38, 0.25)",
    },
    logoText: {
      fontWeight: 700,
      fontSize: 18,
      background: "linear-gradient(135deg, #1e293b 0%, #475569 100%)",
      backgroundClip: "text",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
    logoSubtext: {
      fontSize: 13,
      color: "#64748b",
      fontWeight: 500,
    },
    card: {
      background: "#ffffff",
      borderRadius: 12,
      padding: 20,
      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)",
      marginBottom: 20,
      border: "1px solid #f1f5f9",
      transition: "all 0.3s ease",
    },
    cardHover: {
      transform: "translateY(-2px)",
      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    },
    heading: {
      fontSize: 13,
      fontWeight: 700,
      color: "#dc2626",
      marginBottom: 16,
      textTransform: "uppercase",
      letterSpacing: "0.5px",
      display: "flex",
      alignItems: "center",
      gap: 8,
    },
    headingIcon: {
      fontSize: 16,
    },
    categoryItem: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "12px 10px",
      borderRadius: 8,
      cursor: "pointer",
      fontSize: 14,
      fontWeight: 500,
      transition: "all 0.2s ease",
      color: "#475569",
      marginBottom: 4,
    },
    categoryItemActive: {
      background: "linear-gradient(135deg, #fef2f2 0%, #fecaca 100%)",
      color: "#dc2626",
      fontWeight: 600,
    },
    categoryItemHover: {
      background: "#f8fafc",
      color: "#1e293b",
    },
    categoryCount: {
      fontSize: 11,
      fontWeight: 600,
      background: "#e2e8f0",
      color: "#475569",
      padding: "2px 8px",
      borderRadius: 12,
    },
    categoryCountActive: {
      background: "#dc2626",
      color: "white",
    },
    subCategoryList: {
      listStyle: "none",
      padding: "8px 0 8px 20px",
      margin: 0,
      borderLeft: "2px solid #e2e8f0",
      marginLeft: "10px",
    },
    subCategoryItem: {
      display: "flex",
      alignItems: "center",
      padding: "8px 12px",
      borderRadius: 6,
      cursor: "pointer",
      fontSize: 13,
      fontWeight: 400,
      transition: "all 0.2s ease",
      color: "#64748b",
      marginBottom: 2,
      textDecoration: "none",
    },
    subCategoryItemHover: {
      background: "#f1f5f9",
      color: "#374151",
    },
    expandIcon: {
      transition: "transform 0.2s ease",
      fontSize: "12px",
      marginLeft: "auto",
    },
    smallText: {
      fontSize: 13,
      color: "#64748b",
      marginTop: 12,
      lineHeight: 1.5,
    },
    promo: {
      width: "100%",
      height: 100,
      borderRadius: 12,
      background: "linear-gradient(135deg, #059669 0%, #10b981 50%, #34d399 100%)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      color: "#fff",
      fontWeight: 700,
      fontSize: 18,
      marginTop: 8,
      boxShadow: "0 8px 20px rgba(5, 150, 105, 0.3)",
      position: "relative",
      overflow: "hidden",
    },
    promoRibbon: {
      position: "absolute",
      top: 10,
      right: -30,
      background: "#fbbf24",
      color: "#92400e",
      padding: "4px 30px",
      fontSize: 12,
      fontWeight: 700,
      transform: "rotate(45deg)",
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    },
    relatedList: {
      listStyle: "none",
      padding: 0,
      margin: 0,
    },
    relatedItem: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: "12px 8px",
      borderBottom: "1px solid #f1f5f9",
      fontSize: 14,
      transition: "all 0.2s ease",
      cursor: "pointer",
    },
    relatedItemHover: {
      background: "#f8fafc",
      borderRadius: 8,
    },
    relatedImg: {
      width: 50,
      height: 36,
      background: "linear-gradient(135deg, #e2e8f0 0%, #cbd5e1 100%)",
      borderRadius: 8,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 12,
      color: "#64748b",
      fontWeight: 600,
      boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
    },
    priceTag: {
      fontSize: 13,
      fontWeight: 700,
      color: "#059669",
      marginLeft: "auto",
    },
    badge: {
      fontSize: 10,
      fontWeight: 700,
      background: "#dc2626",
      color: "white",
      padding: "2px 6px",
      borderRadius: 4,
      marginLeft: 8,
    },
  };

  // Dropdown data from Header
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

  const categories = [
    { 
      name: "Game Cards", 
      count: gameCardsItems.length,
      subItems: gameCardsItems,
      hasSubItems: true
    },
    { 
      name: "Gift Cards", 
      count: giftCardsItems.length,
      subItems: giftCardsItems,
      hasSubItems: true
    },
    { 
      name: "Playstation", 
      count: 25,
      href: "/buy-game-cards-online/categories/playstation-store",
      hasSubItems: false
    },
    { 
      name: "Google Play", 
      count: 31,
      href: "/buy-game-cards-online/google-play",
      hasSubItems: false
    },
    { 
      name: "Steam", 
      count: 29,
      href: "/buy-game-cards-online/steam",
      hasSubItems: false
    },
  ];

  const related = [
    { name: "Google Play Card $10", price: "$9.99" },
    { name: "PSN Card $20", price: "$19.49", popular: true },
    { name: "Xbox Gift Card $50", price: "$48.99" },
    { name: "Steam Wallet $25", price: "$24.49" },
    { name: "Amazon Gift $100", price: "$97.99", popular: true },
  ];

  return (
    <aside style={styles.wrapper}>
      {/* Categories */}
      <div 
        style={styles.card}
        onMouseEnter={(e) => Object.assign(e.currentTarget.style, styles.cardHover)}
        onMouseLeave={(e) => Object.assign(e.currentTarget.style, styles.card)}
      >
        <div style={styles.heading}>
          <span style={styles.headingIcon}>📁</span>
          CATEGORIES
        </div>
        {categories.map((category) => (
          <div key={category.name}>
            <div
              style={{
                ...styles.categoryItem,
                ...(activeCategory === category.name ? styles.categoryItemActive : {}),
              }}
              onMouseEnter={(e) => !styles.categoryItemActive && Object.assign(e.currentTarget.style, styles.categoryItemHover)}
              onMouseLeave={(e) => Object.assign(e.currentTarget.style, { background: "transparent", color: "#475569" })}
              onClick={() => {
                setActiveCategory(category.name);
                if (category.hasSubItems) {
                  toggleCategory(category.name);
                }
              }}
            >
              <span>{category.name}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{
                  ...styles.categoryCount,
                  ...(activeCategory === category.name ? styles.categoryCountActive : {})
                }}>
                  {category.count}
                </span>
                {category.hasSubItems && (
                  <span 
                    style={{
                      ...styles.expandIcon,
                      transform: expandedCategories[category.name] ? "rotate(180deg)" : "rotate(0deg)"
                    }}
                  >
                    ▼
                  </span>
                )}
              </div>
            </div>
            
            {/* Sub-items for expandable categories */}
            {category.hasSubItems && expandedCategories[category.name] && (
              <ul style={styles.subCategoryList}>
                {category.subItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item.href}
                      style={styles.subCategoryItem}
                      onMouseEnter={(e) => Object.assign(e.currentTarget.style, styles.subCategoryItemHover)}
                      onMouseLeave={(e) => Object.assign(e.currentTarget.style, { background: "transparent", color: "#64748b" })}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      {/* Related */}
      <div 
        style={styles.card}
        onMouseEnter={(e) => Object.assign(e.currentTarget.style, styles.cardHover)}
        onMouseLeave={(e) => Object.assign(e.currentTarget.style, styles.card)}
      >
        <div style={styles.heading}>
          <span style={styles.headingIcon}>🔥</span>
          POPULAR NOW
        </div>
        <ul style={styles.relatedList}>
          {related.map((item) => (
            <li 
              key={item.name}
              style={styles.relatedItem}
              onMouseEnter={(e) => Object.assign(e.currentTarget.style, styles.relatedItemHover)}
              onMouseLeave={(e) => Object.assign(e.currentTarget.style, { background: "transparent" })}
            >
              <div style={styles.relatedImg}>
                {item.name.includes("Google") ? "G" : 
                 item.name.includes("PSN") ? "P" : 
                 item.name.includes("Xbox") ? "X" : 
                 item.name.includes("Steam") ? "S" : "A"}
              </div>
              <div style={{ lineHeight: 1.4, flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 500 }}>{item.name}</div>
                <div style={{ fontSize: 12, color: "#94a3b8", display: "flex", alignItems: "center" }}>
                  Digital Code {item.popular && <span style={styles.badge}>HOT</span>}
                </div>
              </div>
              <div style={styles.priceTag}>{item.price}</div>
            </li>
          ))}
        </ul>
      </div>

      {/* Special Offer */}
      <div 
        style={styles.card}
        onMouseEnter={(e) => Object.assign(e.currentTarget.style, styles.cardHover)}
        onMouseLeave={(e) => Object.assign(e.currentTarget.style, styles.card)}
      >
        <div style={styles.heading}>
          <span style={styles.headingIcon}>⭐</span>
          SPECIAL OFFER
        </div>
        <div style={styles.promo}>
          <div style={styles.promoRibbon}>LIMITED</div>
          <div style={{ fontSize: 16, fontWeight: 700 }}>FIRST PURCHASE</div>
          <div style={{ fontSize: 24, fontWeight: 800, marginTop: 4 }}>$1 OFF</div>
        </div>
        <div style={styles.smallText}>
          New customers get $1 off their first purchase. Limited time offer. Instant digital delivery.
        </div>
      </div>
    </aside>
  );
}