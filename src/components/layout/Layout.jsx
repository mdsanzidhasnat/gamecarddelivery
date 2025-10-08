// src/components/layout/Layout.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import chooseImg from "/home/sanzid/gamecarddelivery/my-app/src/assets/images/choose-game-gift-card@2x.webp";
import paymentImg from "/home/sanzid/gamecarddelivery/my-app/src/assets/images/gift-card-payment-process@2x.webp";
import emailImg from "/home/sanzid/gamecarddelivery/my-app/src/assets/images/fastest-online-email-delivery@2x.webp";
import appleCalloutImg from "/home/sanzid/gamecarddelivery/my-app/src/assets/images/apple-gift-card-callout.webp";
import razerGoldImg from "/home/sanzid/gamecarddelivery/my-app/src/assets/images/Razer-gold-pin-with-bkash-in-bd.png";

// Import the banner images
import playstationBanner from "/home/sanzid/gamecarddelivery/my-app/src/assets/images/playstation-header-space-3.webp";
import razerGoldBanner from "/home/sanzid/gamecarddelivery/my-app/src/assets/images/razer-gold-header-space-2.webp";
import steamBanner from "/home/sanzid/gamecarddelivery/my-app/src/assets/images/steam-header-space-1.webp";

// Import brand images
import playstationBrandImg from "/home/sanzid/gamecarddelivery/my-app/src/assets/images/playstation-digital-long-gift-card-email-delivery-2x.webp";
import appleBrandImg from "/home/sanzid/gamecarddelivery/my-app/src/assets/images/25-apple-digital-gift-card-email-delivery-2x.webp";
import razerGoldBrandImg from "/home/sanzid/gamecarddelivery/my-app/src/assets/images/razer-gold-digital-gift-card-email-delivery-NEW.webp";
import nintendoBrandImg from "/home/sanzid/gamecarddelivery/my-app/src/assets/images/20-nintendo-digital-gift-card-email-delivery-2x.webp";
import steamBrandImg from "/home/sanzid/gamecarddelivery/my-app/src/assets/images/steam-digital-gift-card-email-delivery-2x.webp";
import xboxBrandImg from "/home/sanzid/gamecarddelivery/my-app/src/assets/images/xbox-digital-gift-card-email-delivery-2x.webp";
import robloxBrandImg from "/home/sanzid/gamecarddelivery/my-app/src/assets/images/roblox-digital-gift-card-email-delivery-2x.webp";

/**
 * TwoColumnPromo (embedded component)
 * - This is the component you provided, adapted to sit inside this file.
 * - Note: internal styles renamed to `twoStyles` to avoid collision with Layout's `styles`.
 */
const TwoColumnPromo = () => {
  const twoStyles = {
    page: {
      width: "100%",
      minHeight: "460px",
      display: "flex",
      fontFamily:
        "'Helvetica Neue', Arial, 'Noto Sans', 'Liberation Sans', sans-serif",
      fontWeight: 400,
    },
    column: {
      flex: 1,
      padding: "48px 56px",
      boxSizing: "border-box",
      color: "#e6eef2",
      position: "relative",
    },
    leftCol: {
      backgroundColor: "#35464c", // left panel color
      borderRight: "6px solid rgba(0,0,0,0.08)",
    },
    rightCol: {
      backgroundColor: "#28343a", // right panel color
      borderLeft: "6px solid rgba(255,255,255,0.02)",
    },
    heading: {
      fontSize: "32px",
      fontStyle: "italic",
      margin: 0,
      paddingBottom: "6px",
      letterSpacing: "0.2px",
      color: "#f4f8fa",
    },
    smallHeading: {
      fontSize: "22px",
      margin: 0,
      paddingBottom: "6px",
      color: "#f3f7f9",
    },
    lead: {
      fontSize: "15px",
      color: "rgba(255,255,255,0.78)",
      marginTop: "6px",
      marginBottom: "22px",
      maxWidth: "520px",
      lineHeight: 1.6,
    },
    hrLike: {
      height: "1px",
      background: "rgba(255,255,255,0.06)",
      margin: "24px 0",
      width: "100%",
      border: "none",
    },
    btn: {
      display: "inline-block",
      padding: "12px 28px",
      background: "#d64d45",
      color: "#fff",
      borderRadius: "26px",
      border: "none",
      cursor: "pointer",
      boxShadow: "0 2px 0 rgba(0,0,0,0.15) inset",
      fontSize: "14px",
      letterSpacing: "1px",
    },
    dividerVertical: {
      position: "absolute",
      top: "24px",
      bottom: "24px",
      left: "50%",
      width: "1px",
      background: "rgba(255,255,255,0.06)",
      transform: "translateX(-0.5px)",
    },
    rightSideBox: {
      position: "absolute",
      right: "40px",
      top: "36px",
      width: "170px",
      height: "170px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      borderLeft: "1px solid rgba(255,255,255,0.06)",
      color: "#e9f2f6",
    },
    bigNumber: {
      fontSize: "40px",
      fontWeight: 700,
      margin: 0,
      lineHeight: 1,
    },
    bigLabel: {
      marginTop: "8px",
      fontSize: "16px",
      textAlign: "center",
      opacity: 0.95,
    },
    smallIconBox: {
      width: "58px",
      height: "58px",
      borderRadius: "8px",
      background: "rgba(255,255,255,0.03)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: "18px",
    },
    rightInnerText: {
      maxWidth: "520px",
      lineHeight: 1.6,
      color: "rgba(255,255,255,0.78)",
      marginBottom: "22px",
    },
    smallMuted: {
      fontSize: "13px",
      color: "rgba(255,255,255,0.6)",
    },
    centerStatBox: {
      position: "absolute",
      right: "64px",
      top: "56px",
      width: "180px",
      textAlign: "center",
    },
    centerStatNumber: {
      fontSize: "38px",
      fontWeight: 700,
      margin: 0,
      padding: 0,
      lineHeight: 1.05,
      color: "#f1f7f8",
    },
    centerStatLabel: {
      fontSize: "16px",
      marginTop: "8px",
      color: "rgba(255,255,255,0.85)",
    },
    iconSmall: {
      width: "44px",
      height: "44px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "6px",
      background: "rgba(255,255,255,0.03)",
      marginLeft: "12px",
    },
  };

  return (
    <div style={twoStyles.page}>
      {/* LEFT COLUMN */}
      <div style={{ ...twoStyles.column, ...twoStyles.leftCol }}>
        <h2 style={twoStyles.heading}>Wholesale Welcome!</h2>
        <p style={{ ...twoStyles.smallMuted, marginTop: "6px" }}>
          Bulk Prices on Available
          <br />
          Wholesale Gift Cards!
        </p>

        <hr style={twoStyles.hrLike} />

        <p style={twoStyles.lead}>
          Looking to purchase our gift cards in bulk at a discounted price? We
          offer the services and expertise to provide you with bulk purchasing
          options to provide all of our products at a premium rate to satisfy
          the needs of your own gift card delivery business. Follow the link
          below for further information on how to partner with us and apply for
          our Approved Reseller Program.
        </p>

        <button style={twoStyles.btn}>MORE INFO</button>

        {/* small centered stat box on left */}
        <div style={twoStyles.centerStatBox}>
          <div style={twoStyles.smallIconBox}>
            <svg
              width="34"
              height="34"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="2"
                y="3"
                width="20"
                height="14"
                rx="2"
                stroke="#cfe7ee"
                strokeWidth="1.1"
                fill="rgba(255,255,255,0.01)"
              />
              <rect x="8" y="9" width="8" height="2" rx="1" fill="#cfe7ee" />
            </svg>
          </div>

          <p style={twoStyles.centerStatNumber}>$$$</p>
          <p style={twoStyles.centerStatLabel}>Buy in Bulk</p>
        </div>

        <div style={twoStyles.dividerVertical} />
      </div>

      {/* RIGHT COLUMN */}
      <div style={{ ...twoStyles.column, ...twoStyles.rightCol }}>
        <h2 style={twoStyles.heading}>eGifts for Friends &amp; Family!</h2>
        <p style={{ ...twoStyles.smallMuted, marginTop: "6px" }}>
          Our Gift &amp; Game Cards
          <br />
          Make the Perfect Gift!
        </p>

        <hr style={twoStyles.hrLike} />

        <p style={twoStyles.rightInnerText}>
          For a last second birthday gift, or as a gesture of thanks to a friend
          or loved-one; look no further! With our wide selection of gift and
          game cards, we can have the perfect gift delivered to your email
          within minutes!
        </p>

        <button style={twoStyles.btn}>MORE INFO</button>

        {/* right side vertical panel with big stat */}
        <div style={twoStyles.rightSideBox}>
          <div style={twoStyles.smallIconBox}>
            <svg
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 8h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8z"
                stroke="#e6eef2"
                strokeWidth="1"
                fill="rgba(255,255,255,0.01)"
              />
              <path
                d="M12 8V4"
                stroke="#e6eef2"
                strokeWidth="1"
                strokeLinecap="round"
              />
              <path
                d="M7 5.5c1.5-1 3-1 4-1s2.5 0 4 1"
                stroke="#e6eef2"
                strokeWidth="1"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <h3 style={twoStyles.bigNumber}>100%</h3>
          <div style={twoStyles.bigLabel}>Safe &amp; Secure</div>
        </div>

        <div style={twoStyles.dividerVertical} />
      </div>
    </div>
  );
};

const Layout = () => {
  const navigate = useNavigate();
  const [currentAdIndex, setCurrentAdIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  // Banner data array with images and titles
  const bannerData = [
    {
      src: playstationBanner,
      alt: "PlayStation Gift Cards Banner Slide 1",
      title: "PlayStation Gift Cards",
    },
    {
      src: razerGoldBanner,
      alt: "Razer Gold Gift Cards Banner Slide 2",
      title: "Razer Gold Gift Cards",
    },
    {
      src: steamBanner,
      alt: "Steam Gift Cards Banner Slide 3",
      title: "Steam Gift Cards",
    },
  ];

  // Brand images array
  const brandImages = [
    {
      name: "PlayStation",
      image: playstationBrandImg,
    },
    {
      name: "Apple",
      image: appleBrandImg,
    },
    {
      name: "Razer Gold",
      image: razerGoldBrandImg,
    },
    {
      name: "Nintendo eShop",
      image: nintendoBrandImg,
    },
    {
      name: "Steam",
      image: steamBrandImg,
    },
    {
      name: "Xbox",
      image: xboxBrandImg,
    },
    {
      name: "Roblox",
      image: robloxBrandImg,
    },
  ];

  // Rotate banners every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAdIndex((prevIndex) => (prevIndex + 1) % bannerData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [bannerData.length]);

  // Manual banner navigation
  const goToBanner = (index) => {
    setCurrentAdIndex(index);
  };

  // Auto-scroll brands functionality
  useEffect(() => {
    const scrollContainer = document.querySelector(".brandStripInner");
    if (!scrollContainer) return;

    let scrollInterval;

    const startScrolling = () => {
      setIsScrolling(true);
      scrollInterval = setInterval(() => {
        if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth - 1) {
          scrollContainer.scrollLeft = 0;
        } else {
          scrollContainer.scrollLeft += 1;
        }
      }, 20);
    };

    const stopScrolling = () => {
      setIsScrolling(false);
      clearInterval(scrollInterval);
    };

    // Start auto-scroll initially
    startScrolling();

    // Pause on hover
    const handleMouseEnter = () => stopScrolling();
    const handleMouseLeave = () => startScrolling();

    scrollContainer.addEventListener("mouseenter", handleMouseEnter);
    scrollContainer.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      clearInterval(scrollInterval);
      scrollContainer.removeEventListener("mouseenter", handleMouseEnter);
      scrollContainer.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const styles = {
    mainContainer: {
      minHeight: "100vh",
      backgroundColor: "#E4E4E4", // <-- updated background color
      fontFamily: "Arial, sans-serif",
      color: "#2c3e50",
      lineHeight: 1.4,
      margin: 0,
      padding: 0, // removed outer padding to eliminate left/right gap
      width: "100%",
      boxSizing: "border-box",
      overflowX: "hidden", // prevent horizontal scroll if any child overflows
    },
    content: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "0 0 20px 0", // removed side padding to ensure no gap
      width: "100%",
      boxSizing: "border-box",
    },
    hero: {
      textAlign: "center",
      padding: "0 0 24px 0",
      backgroundColor: "#f8f9fa",
      borderRadius: "0 0 8px 8px",
      marginBottom: "30px",
      boxShadow: "0 2px 6px rgba(0,0,0,0.04)",
    },
    // UPDATED: Hero banner with proper image slider and no blue overlay
    heroTopBanner: {
      width: "100%",
      height: "260px",
      borderRadius: "0",
      marginBottom: "18px",
      position: "relative",
      overflow: "hidden",
    },
    heroSlider: {
      display: "flex",
      width: `${bannerData.length * 100}%`,
      height: "100%",
      transition: "transform 0.5s ease-in-out",
      transform: `translateX(-${(100 / bannerData.length) * currentAdIndex}%)`,
    },
    bannerSlide: {
      width: `${100 / bannerData.length}%`,
      height: "100%",
      flexShrink: 0,
    },
    bannerImage: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      borderRadius: "0",
    },
    heroTopOverlay: {
      position: "absolute",
      top: "16px",
      left: "16px",
      display: "flex",
      gap: "10px",
      alignItems: "center",
      zIndex: 2,
    },
    heroTextContent: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      zIndex: 2,
      textAlign: "center",
      color: "#fff",
      textShadow: "0 2px 4px rgba(0,0,0,0.5)",
    },
    // UPDATED: Brand strip container with auto-scroll
    brandStripContainer: {
      width: "100%",
      overflow: "hidden",
      position: "relative",
      padding: "12px 0",
      marginTop: "12px",
      marginBottom: "18px",
    },
    brandStripInner: {
      display: "flex",
      gap: "12px",
      alignItems: "center",
      width: "max-content",
      animation: isScrolling ? "none" : "scroll 30s linear infinite",
      cursor: "grab",
    },
    // UPDATED: Brand item with image - made larger
    brandItem: {
      minWidth: "140px",
      height: "60px",
      borderRadius: "8px",
      backgroundColor: "#fff",
      border: "1px solid #e6e6e6",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "8px 12px",
      boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
      overflow: "hidden",
      flexShrink: 0,
      transition: "transform 0.2s ease, box-shadow 0.2s ease",
    },
    brandImage: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      borderRadius: "4px",
    },
    heroHeading: {
      fontSize: "2.25rem",
      margin: "8px 0 6px",
      fontWeight: 700,
      color: "#2c3e50",
    },
    nicheLine: {
      marginTop: 6,
      fontSize: "1.1rem",
      color: "#e74c3c",
      fontWeight: 800,
      letterSpacing: "0.6px",
      fontStyle: "italic",
    },
    heroSub: {
      fontSize: "1.05rem",
      color: "#7f8c8d",
      marginBottom: "14px",
    },
    heroCtas: {
      display: "flex",
      gap: "12px",
      justifyContent: "center",
      flexWrap: "wrap",
      marginBottom: "18px",
    },
    primaryBtn: {
      backgroundColor: "#e74c3c",
      color: "#fff",
      border: "none",
      padding: "12px 20px",
      borderRadius: "28px",
      cursor: "pointer",
      fontWeight: 700,
    },
    secondaryBtn: {
      backgroundColor: "#fff",
      color: "#e74c3c",
      border: "2px solid #e74c3c",
      padding: "10px 18px",
      borderRadius: "28px",
      cursor: "pointer",
      fontWeight: 700,
    },
    // PROMO ROW: background color updated to #323548 (only this change)
    promoRow: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "18px",
      marginTop: "18px",
      marginBottom: "20px",
      padding: "0 20px",
      backgroundColor: "#323548",
    },
    promoCard: {
      borderRadius: "10px",
      padding: "18px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      minHeight: "100px",
      boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      position: "relative",
      overflow: "hidden",
      cursor: "pointer",
      transition: "transform 0.2s ease",
    },
    promoCardDarkOverlay: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background:
        "linear-gradient(90deg, rgba(15,42,22,0.85) 0%, rgba(17,51,28,0.7) 100%)",
      zIndex: 1,
    },
    promoContent: {
      position: "relative",
      zIndex: 2,
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    promoLeft: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
    },
    promoText: {
      textAlign: "left",
    },
    promoTitle: {
      fontSize: "1.05rem",
      fontWeight: 700,
      marginBottom: "6px",
    },
    promoBuy: {
      backgroundColor: "#e74c3c",
      border: "none",
      color: "#fff",
      padding: "8px 14px",
      borderRadius: "6px",
      cursor: "pointer",
      fontWeight: 700,
    },
    // UPDATED: Products grid - changed to 5 columns and increased card size
    productsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(5, 1fr)",
      gap: "20px",
      marginBottom: "40px",
    },
    // UPDATED: Product card - height increased from 380px to 420px with hover effects
    productCard: {
      border: "1px solid #e5e5e5",
      borderRadius: "8px",
      padding: "20px",
      textAlign: "center",
      backgroundColor: "#ffffff",
      boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
      display: "flex",
      flexDirection: "column",
      height: "420px",
      minWidth: "0",
      position: "relative",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      cursor: "pointer",
    },
    productImageContainer: {
      width: "100%",
      height: "160px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: "18px",
      overflow: "hidden",
      borderRadius: "6px",
      backgroundColor: "#f8f9fa",
    },
    productImage: {
      width: "100%",
      height: "100%",
      objectFit: "contain",
      borderRadius: "4px",
      transition: "transform 0.3s ease",
    },
    productAmount: {
      fontSize: "2.8rem",
      fontWeight: "bold",
      color: "#2c3e50",
      marginBottom: "10px",
      lineHeight: 1,
    },
    productBrand: {
      fontSize: "1.2rem",
      fontWeight: "bold",
      color: "#2c3e50",
      marginBottom: "6px",
      textTransform: "uppercase",
    },
    productDelivery: {
      fontSize: "0.85rem",
      color: "#7f8c8d",
      marginBottom: "14px",
      fontWeight: "600",
      textTransform: "uppercase",
    },
    productName: {
      fontSize: "1rem",
      color: "#2c3e50",
      marginBottom: "18px",
      fontWeight: "500",
      lineHeight: 1.4,
    },
    buyButton: {
      backgroundColor: "#27ae60",
      color: "white",
      border: "none",
      padding: "14px 16px",
      borderRadius: "6px",
      cursor: "pointer",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "8px",
      width: "100%",
      marginTop: "auto",
      fontWeight: "bold",
      fontSize: "1rem",
      textTransform: "uppercase",
      letterSpacing: "0.5px",
      transition: "background-color 0.3s ease, transform 0.2s ease",
    },
    priceContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginTop: "10px",
      marginBottom: "8px",
      fontSize: "0.9rem",
    },
    productOriginalPrice: {
      color: "#7f8c8d",
      marginRight: "8px",
    },
    productNowPrice: {
      color: "#e74c3c",
      fontWeight: "bold",
    },
    stars: {
      color: "#f39c12",
      fontSize: "1rem",
      marginBottom: "4px",
    },
    reviews: {
      fontSize: "0.85rem",
      color: "#7f8c8d",
    },
    featuresRow: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "20px",
      marginTop: "26px",
      marginBottom: "40px",
    },
    featureCard: {
      backgroundColor: "#fff",
      borderRadius: "8px",
      padding: "18px",
      minHeight: "160px",
      boxShadow: "0 2px 6px rgba(0,0,0,0.04)",
      border: "1px solid #eef0f2",
      transition: "transform 0.2s ease, box-shadow 0.2s ease",
    },
    featureIcon: {
      width: "44px",
      height: "44px",
      borderRadius: "50%",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: "10px",
      fontWeight: 700,
      color: "#fff",
    },
    howItWorks: {
      textAlign: "center",
      padding: "24px",
      backgroundColor: "#f5f5f5",
      borderRadius: "8px",
      marginBottom: "30px",
      boxShadow: "0 2px 6px rgba(0,0,0,0.04)",
    },
    howItWorksRow: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "20px",
      marginTop: "26px",
      marginBottom: "40px",
    },
    howItWorksCard: {
      backgroundColor: "#fff",
      borderRadius: "8px",
      padding: "18px",
      minHeight: "160px",
      boxShadow: "0 2px 6px rgba(0,0,0,0.04)",
      border: "1px solid #eef0f2",
      textAlign: "center",
      transition: "transform 0.2px ease, box-shadow 0.2px ease",
    },
    howItWorksIconImg: {
      width: "126px",
      height: "113px",
      borderRadius: "8px",
      objectFit: "cover",
      marginBottom: "10px",
      display: "inline-block",
      transition: "transform 0.3s ease",
    },
    reviews: {
      textAlign: "center",
      padding: "24px",
      backgroundColor: "#f5f5f5",
      borderRadius: "8px",
      marginBottom: "30px",
      boxShadow: "0 2px 6px rgba(0,0,0,0.04)",
    },
    reviewsRow: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "20px",
      marginTop: "26px",
      marginBottom: "40px",
    },
    reviewCard: {
      backgroundColor: "#fff",
      borderRadius: "8px",
      padding: "18px",
      minHeight: "160px",
      boxShadow: "0 2px 6px rgba(0,0,0,0.04)",
      border: "1px solid #eef0f2",
      textAlign: "center",
      transition: "transform 0.2px ease, box-shadow 0.2px ease",
    },
    reviewStars: {
      color: "#f39c12",
      marginBottom: "10px",
    },
    // NEW: Banner indicator dots
    bannerIndicator: {
      position: "absolute",
      bottom: "15px",
      left: "50%",
      transform: "translateX(-50%)",
      display: "flex",
      gap: "8px",
      zIndex: 3,
    },
    bannerDot: {
      width: "10px",
      height: "10px",
      borderRadius: "50%",
      backgroundColor: "rgba(255,255,255,0.5)",
      cursor: "pointer",
      transition: "background-color 0.3s ease, transform 0.2s ease",
    },
    bannerDotActive: {
      backgroundColor: "#fff",
      transform: "scale(1.2)",
    },
  };

  // CSS for auto-scroll animation
  const scrollStyles = `
    /* reset body margin just in case (ensures no left/right gap) */
    body { margin: 0; padding: 0; box-sizing: border-box; }

    @keyframes scroll {
      0% { transform: translateX(0); }
      100% { transform: translateX(calc(-140px * 7 - 12px * 6)); }
    }
    
    .brandStripInner:hover {
      animation-play-state: paused;
    }
    
    .brandItem:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    }
    
    .productCard:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 25px rgba(0,0,0,0.15);
    }
    
    .productCard:hover .productImage {
      transform: scale(1.05);
    }
    
    .buyButton:hover {
      background-color: #219653;
      transform: translateY(-2px);
    }
    
    .featureCard:hover,
    .howItWorksCard:hover,
    .reviewCard:hover {
      transform: translateY(-3px);
      box-shadow: 0 6px 15px rgba(0,0,0,0.1);
    }
    
    .howItWorksCard:hover .howItWorksIconImg {
      transform: scale(1.1);
    }
    
    .promoCard:hover {
      transform: translateY(-3px);
    }
    
    .bannerDot:hover {
      transform: scale(1.3);
    }
  `;

  // Helper: navigate to checkout
  const goToCheckout = () => {
    navigate("/checkout");
  };

  // Products data
  const products = [
    {
      id: 1,
      amount: "$50",
      brand: "STEAM*",
      delivery: "FAST EMAIL DELIVERY",
      name: "USA Steam Game Card (Email Delivery)",
      imageUrl:
        "https://giftnix-product-images.s3.us-west-2.amazonaws.com/gcd/50-steam-digital-gift-card-email-delivery-2x",
      originalPrice: "$59.99",
      nowPrice: "$57.99",
      stars: "★★★★★",
      reviewCount: 141,
    },
    {
      id: 2,
      amount: "$100",
      brand: "Google Play",
      delivery: "FAST EMAIL DELIVERY",
      name: "USA Google Play Card (Email Delivery)",
      imageUrl:
        "https://giftnix-product-images.s3.us-west-2.amazonaws.com/gcd/50-steam-digital-gift-card-email-delivery-2x",
      originalPrice: "$109.99",
      nowPrice: "$107.99",
      stars: "★★★★★",
      reviewCount: 200,
    },
    {
      id: 3,
      amount: "$50",
      brand: "PlayStation",
      delivery: "Quick Email Delivery",
      name: "USA PlayStation Network Card (Email Delivery)",
      imageUrl:
        "https://giftnix-product-images.s3.us-west-2.amazonaws.com/gcd/50-steam-digital-gift-card-email-delivery-2x",
      originalPrice: "$59.99",
      nowPrice: "$57.99",
      stars: "★★★★★",
      reviewCount: 150,
    },
    {
      id: 4,
      amount: "$50",
      brand: "hulu",
      delivery: "Quick Email Delivery",
      name: "USA Hulu Gift Card (Email Delivery)",
      imageUrl:
        "https://giftnix-product-images.s3.us-west-2.amazonaws.com/gcd/50-steam-digital-gift-card-email-delivery-2x",
      originalPrice: "$59.99",
      nowPrice: "$57.99",
      stars: "★★★★★",
      reviewCount: 120,
    },
    {
      id: 5,
      amount: "$50",
      brand: "RAZER GOLD",
      delivery: "FAST EMAIL DELIVERY",
      name: "USA Razer Gold Gift Card (Email Delivery)",
      imageUrl:
        "https://giftnix-product-images.s3.us-west-2.amazonaws.com/gcd/50-steam-digital-gift-card-email-delivery-2x",
      originalPrice: "$59.99",
      nowPrice: "$57.99",
      stars: "★★★★★",
      reviewCount: 180,
    },
  ];

  return (
    <div style={styles.mainContainer}>
      {/* Inject CSS (including body reset) */}
      <style>{scrollStyles}</style>
      
      <main style={styles.content}>
        <section style={styles.hero}>
          {/* UPDATED: Hero banner with sliding effect */}
          <div style={styles.heroTopBanner}>
            {/* Slider Container */}
            <div style={styles.heroSlider}>
              {bannerData.map((banner, index) => (
                <div key={index} style={styles.bannerSlide}>
                  <img
                    alt={banner.alt}
                    loading="lazy"
                    width="1200"
                    height="260"
                    decoding="async"
                    style={styles.bannerImage}
                    src={banner.src}
                  />
                </div>
              ))}
            </div>

            {/* BUY NOW Button */}
            <div style={styles.heroTopOverlay}>
              <div
                style={{
                  padding: "6px 10px",
                  borderRadius: 20,
                  backgroundColor: "rgba(255,255,255,0.08)",
                  color: "#fff",
                  fontSize: "0.85rem",
                }}
              >
                BUY NOW
              </div>
            </div>

            {/* Banner Text Content (dynamic title) */}
            <div style={styles.heroTextContent}>
              <h2 style={{ margin: 0, fontSize: "1.25rem", fontWeight: 700 }}>
                Best Online Source for Gift Cards
              </h2>
              <div style={{ marginTop: 8 }}>
                <strong style={{ fontSize: "1.6rem" }}>{bannerData[currentAdIndex].title}</strong>
              </div>
            </div>

            {/* Banner Indicator Dots */}
            <div style={styles.bannerIndicator}>
              {bannerData.map((_, index) => (
                <div
                  key={index}
                  style={{
                    ...styles.bannerDot,
                    ...(index === currentAdIndex ? styles.bannerDotActive : {}),
                  }}
                  onClick={() => goToBanner(index)}
                />
              ))}
            </div>
          </div>

          {/* UPDATED: Brand strip with auto-scroll animation */}
          <div style={styles.brandStripContainer}>
            <div className="brandStripInner" style={styles.brandStripInner}>
              {brandImages.map((brand, index) => (
                <div key={index} className="brandItem" style={styles.brandItem}>
                  <img
                    src={brand.image}
                    alt={brand.name}
                    style={styles.brandImage}
                    loading="lazy"
                  />
                </div>
              ))}
              {/* Duplicate for seamless loop */}
              {brandImages.map((brand, index) => (
                <div key={`dup-${index}`} className="brandItem" style={styles.brandItem}>
                  <img
                    src={brand.image}
                    alt={brand.name}
                    style={styles.brandImage}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

          <h1 style={styles.heroHeading}>The Best Source for US Game Cards</h1>

          <div style={styles.nicheLine}>Buy Now. Play Now.</div>

          <div style={styles.heroCtas}></div>

          {/* Promo cards */}
          <div style={styles.promoRow}>
            {/* Apple Promo Card */}
            <div
              className="promoCard"
              style={{
                ...styles.promoCard,
                backgroundImage: `url(${appleCalloutImg})`,
              }}
              onClick={() => navigate("/checkout")}
            >
              {/* Just background image */}
            </div>

            {/* Razer Gold Promo Card */}
            <div 
              className="promoCard"
              style={{ ...styles.promoCard, backgroundImage: `url(${razerGoldImg})` }}
            >
              <div style={styles.promoCardDarkOverlay}></div>
              <div style={styles.promoContent}>
                <div style={styles.promoLeft}>
                  <div style={{ ...styles.promoText, color: "#fff" }}>
                    <div style={{ ...styles.promoTitle, color: "#fff" }}>Razer Gold Gift Cards</div>
                    <div style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.95rem" }}>Use for PC & Mobile games</div>
                  </div>
                </div>
                <div>
                  <button style={{ ...styles.promoBuy, backgroundColor: "#ff6b6b" }} onClick={() => navigate("/checkout")}>BUY NOW</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section style={styles.featuresRow}>
          <div className="featureCard" style={styles.featureCard}>
            <div style={{ ...styles.featureIcon, backgroundColor: "#e74c3c" }}>🎮</div>
            <h3 style={{ marginTop: 0, marginBottom: 6 }}>Game Cards</h3>
            <p style={{ color: "#7f8c8d", margin: 0, fontSize: "0.95rem" }}>
              Browse our extensive selection of game cards, in-game add-ons, and the newest releases to get the most out of
              your experience.
            </p>
            <ul style={{ paddingLeft: "18px", marginTop: "10px" }}>
              <li>PlayStation Game Cards</li>
              <li>Steam Game Cards</li>
              <li>Nintendo eShop Game Cards</li>
            </ul>
          </div>

          <div className="featureCard" style={styles.featureCard}>
            <div style={{ ...styles.featureIcon, backgroundColor: "#f39c12" }}>🎁</div>
            <h3 style={{ marginTop: 0, marginBottom: 6 }}>Gift Cards</h3>
            <p style={{ color: "#7f8c8d", margin: 0, fontSize: "0.95rem" }}>
              Perfect gift for loved ones or yourself — explore wide collection of digital gift cards.
            </p>
            <ul style={{ paddingLeft: "18px", marginTop: "10px" }}>
              <li>iTunes / Apple Gift Cards</li>
              <li>Google Play Gift Cards</li>
              <li>Amazon Gift Cards</li>
            </ul>
          </div>

          <div className="featureCard" style={styles.featureCard}>
            <div style={{ ...styles.featureIcon, backgroundColor: "#27ae60" }}>⚡</div>
            <h3 style={{ marginTop: 0, marginBottom: 6 }}>Instant Delivery</h3>
            <p style={{ color: "#7f8c8d", margin: 0, fontSize: "0.95rem" }}>
              Fast and secure purchasing — our support team is available 24/7 and delivery is immediate via email.
            </p>
            <ul style={{ paddingLeft: "18px", marginTop: "10px" }}>
              <li>Purchasing With PayPal</li>
              <li>Why Digital Delivery?</li>
              <li>How Will I Receive My Gift?</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 style={{ marginBottom: "20px", fontSize: "1.8rem", color: "#2c3e50" }}>Game Card Best Sellers</h2>
          {/* UPDATED: Products grid with 5 columns and larger cards */}
          <div style={styles.productsGrid}>
            {products.map((product) => (
              <div 
                key={product.id} 
                className="productCard"
                style={styles.productCard}
                onClick={goToCheckout}
              >
                <div style={styles.productImageContainer}>
                  <img
                    alt={product.name}
                    src={product.imageUrl}
                    style={styles.productImage}
                    width="458"
                    height="572"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                <div style={styles.productAmount}>{product.amount}</div>
                <div style={styles.productBrand}>{product.brand}</div>
                <div style={styles.productDelivery}>{product.delivery}</div>
                <div style={styles.productName}>{product.name}</div>

                <button
                  className="buyButton"
                  style={styles.buyButton}
                  onClick={goToCheckout}
                  aria-label={`Buy ${product.name}`}>
                  <span>BUY NOW</span>
                  <span>🛒</span>
                </button>

                <div style={styles.priceContainer}>
                  <span style={styles.productOriginalPrice}>ORIGINAL: {product.originalPrice}</span>
                  <span style={styles.productNowPrice}>NOW: {product.nowPrice}</span>
                </div>

                <div style={styles.stars}>{product.stars}</div>
                <div style={styles.reviews}>{product.reviewCount} Reviews</div>
              </div>
            ))}
          </div>
        </section>

        {/* ---------- NEW: TwoColumnPromo inserted here ---------- */}
        <section style={{ margin: "36px 0" }}>
          <TwoColumnPromo />
        </section>
        {/* ------------------------------------------------------- */}

        <section style={styles.howItWorks}>
          <h2 style={{ marginBottom: "20px", fontSize: "1.8rem", color: "#2c3e50" }}>HOW IT WORKS</h2>
          <div style={styles.howItWorksRow}>
            <div className="howItWorksCard" style={styles.howItWorksCard}>
              <img
                src={chooseImg}
                alt="Choose a Game or Gift Card"
                style={styles.howItWorksIconImg}
                width={126}
                height={113}
                loading="lazy"
                decoding="async"
              />
              <h3 style={{ marginTop: 0, marginBottom: 6 }}>Choose a Game/Gift Card</h3>
              <p style={{ color: "#7f8c8d", margin: 0, fontSize: "0.95rem" }}>
                Choose from a broad selection of game and gift cards including iTunes, Google Play, Steam, Nintendo and many more. Find the perfect gift for a loved one, or a treat for yourself, at home, or on the go with our mobile friendly website!
              </p>
            </div>
            <div className="howItWorksCard" style={styles.howItWorksCard}>
              <img
                src={paymentImg}
                alt="Payment & Approval"
                style={styles.howItWorksIconImg}
                width={126}
                height={113}
                loading="lazy"
                decoding="async"
              />
              <h3 style={{ marginTop: 0, marginBottom: 6 }}>Payment & Approval</h3>
              <p style={{ color: "#7f8c8d", margin: 0, fontSize: "0.95rem" }}>
                We accept direct PayPal transaction, USA MasterCard, Discover, and American Express. All payments are securely processed via PayPal and not directly on our website, however you do not need a PayPal account to complete your purchase.
              </p>
            </div>
            <div className="howItWorksCard" style={styles.howItWorksCard}>
              <img
                src={emailImg}
                alt="Fastest Online Email Delivery"
                style={styles.howItWorksIconImg}
                width={126}
                height={113}
                loading="lazy"
                decoding="async"
              />
              <h3 style={{ marginTop: 0, marginBottom: 6 }}>Fastest Online Email Delivery</h3>
              <p style={{ color: "#7f8c8d", margin: 0, fontSize: "0.95rem" }}>
                All of our gift and game cards are authentic USA cards, digitally scanned into our system and delivered to you via email within minutes! Save the trip to the store and catch the best deals on an online sale by purchasing directly from GameCardDelivery for the fastest online delivery service on the market!
              </p>
            </div>
          </div>
        </section>

        <section style={styles.reviews}>
          <h2 style={{ marginBottom: "20px", fontSize: "1.8rem", color: "#2c3e50" }}>REVIEWS</h2>
          <div style={{ marginBottom: "20px", color: "#7f8c8d" }}>8,547 GameCardDelivery Reviews</div>
          <div style={styles.reviewsRow}>
            <div className="reviewCard" style={styles.reviewCard}>
              <h4>Speed is the Key</h4>
              <div style={styles.reviewStars}>★★★★★</div>
              <p style={{ color: "#7f8c8d", margin: 0, fontSize: "0.95rem" }}>
                Speed is the Key
                <br />
                I'm from Guatemala and it is really nice to have you as a source of gamecards. Here in Guatemala it is a kind of difficult to access them.
                <br />- D.R.
                <br />OCTOBER 20, 2019
              </p>
            </div>
            <div className="reviewCard" style={styles.reviewCard}>
              <h4>Purchase for Amazon Gift Card</h4>
              <div style={styles.reviewStars}>★★★★★</div>
              <p style={{ color: "#7f8c8d", margin: 0, fontSize: "0.95rem" }}>
                Purchase for Amazon Gift Card
                <br />
                It is my first purchase through GameCardDelivery and the truth is that the satisfaction is total, it was fast easy and safe. For all the aforementioned I recommend to use GameCardDelivery from Venezuela.
                <br />- J.M.
                <br />OCTOBER 20, 2019
              </p>
            </div>
            <div className="reviewCard" style={styles.reviewCard}>
              <h4>Quick and Excellent Service</h4>
              <div style={styles.reviewStars}>★★★★★</div>
              <p style={{ color: "#7f8c8d", margin: 0, fontSize: "0.95rem" }}>
                Quick and Excellent Service
                <br />
                I have been purchasing iTunes cards from GameCardDelivery for some time now, and they have never failed to deliver. They are very quick, and they provide excellent service.
                <br />- Z.
                <br />OCTOBER 16, 2019
              </p>
            </div>
          </div>
          <button
            style={{ ...styles.primaryBtn, marginTop: "10px" }}
            onClick={() => navigate("/reviews")}
          >
            VIEW ALL REVIEWS
          </button>
        </section>
      </main>
    </div>
  );
};

export default Layout;