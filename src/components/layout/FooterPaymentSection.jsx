import React from "react";

const FooterPaymentSection = () => {
  return (
    // Outer wrapper: full-bleed background across the viewport
    <div
      style={{
        position: "relative",
        left: "50%",
        right: "50%",
        marginLeft: "-50vw",
        marginRight: "-50vw",
        width: "100vw",
        backgroundColor: "#8B0000",
        padding: "8px 0", // reduced height
        borderTop: "1px solid rgba(0,0,0,0.12)",
        boxSizing: "border-box",
      }}
    >
      {/* Inner container: centers content and preserves original spacing */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          width: "100%",
          padding: "0 20px",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center", // center aligned vertically for compact height
            gap: "20px",
            width: "100%",
          }}
        >
          {/* Payment Methods Column */}
          <div style={{ flex: "1 1 250px", minWidth: "220px" }}>
            <h6
              style={{
                margin: "0 0 6px 0",
                fontSize: "14px",
                fontWeight: 600,
                color: "#ffffff",
              }}
            >
              Payment Methods We Accept
            </h6>
            <img
              alt="credit cards"
              loading="lazy"
              width="255"
              height="28"
              style={{
                maxWidth: "100%",
                height: "auto",
                display: "block",
                filter: "brightness(0) invert(1)",
              }}
              src="/_next/image?url=%2Fstatic%2Fimg%2Ficons%2Fcredit-cards.png&w=640&q=75"
            />
          </div>

          {/* Language Selection Column */}
          <div style={{ flex: "1 1 250px", minWidth: "220px" }}>
            <h6
              style={{
                margin: "0 0 6px 0",
                fontSize: "14px",
                fontWeight: 600,
                color: "#ffffff",
              }}
            >
              Choose Your Language | Worldwide Delivery
            </h6>
            <div id="google_translate_element">
              <div
                style={{
                  border: "1px solid rgba(255,255,255,0.15)",
                  padding: "4px 8px",
                  borderRadius: "4px",
                  display: "inline-block",
                  backgroundColor: "rgba(255,255,255,0.06)",
                }}
              >
                <span style={{ verticalAlign: "middle" }}>
                  <a
                    href="#"
                    style={{
                      textDecoration: "none",
                      color: "#fff",
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                    }}
                    aria-haspopup="true"
                  >
                    <span>ভাষা বেছে নিন</span>
                    <span style={{ color: "rgba(255,255,255,0.85)" }}>▼</span>
                  </a>
                </span>
              </div>
            </div>
          </div>

          {/* Features Column */}
          <div style={{ flex: "1 1 250px", minWidth: "220px" }}>
            <h6
              style={{
                margin: "0 0 6px 0",
                fontSize: "14px",
                fontWeight: 600,
                color: "#ffffff",
              }}
            >
              Why GameCardDelivery?
            </h6>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "15px",
                alignItems: "center",
              }}
            >
              {["Buy Online", "Instant Delivery", "Easy To Use"].map((t) => (
                <div
                  key={t}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    fontSize: "14px",
                    color: "#ffffff",
                    whiteSpace: "nowrap",
                  }}
                >
                  <span style={{ marginRight: "6px" }}>•</span>
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterPaymentSection;