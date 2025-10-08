// Features.jsx
import React, { useState } from "react";

export default function Features() {
  const styles = {
    wrapper: {
      marginTop: 18,
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
    },
    faqCard: {
      background: "#fff",
      padding: 14,
      borderRadius: 6,
      boxShadow: "0 1px 0 rgba(0,0,0,0.03)",
      marginBottom: 12,
    },
    question: {
      fontSize: 14,
      fontWeight: 700,
      color: "#222",
      cursor: "pointer",
      padding: "10px 0",
      borderBottom: "1px solid #f1f1f1",
      textAlign: "left",
      background: "none",
      border: "none",
      width: "100%",
    },
    answer: {
      fontSize: 13,
      color: "#555",
      padding: "10px 0",
      lineHeight: 1.6,
      transition: "all 0.3s ease",
    },
  };

  const faqs = [
    {
      q: "How our digital codes work?",
      a: "After payment we email the code instantly. Redeem on your Apple account.",
    },
    {
      q: "Why Apple Gift Cards through email delivery?",
      a: "Fast, secure and instant delivery — perfect for gifts or immediate use.",
    },
    {
      q: "Can I return an electronic gift card?",
      a: "Electronic gift cards are non-refundable after delivery. Contact support for exceptions.",
    },
    {
      q: "What can I buy with an Apple Gift Card?",
      a: "Apps, in-app purchases, subscriptions (Apple Music/TV+), books, movies and iCloud storage.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div style={styles.wrapper}>
      {faqs.map((f, i) => (
        <div key={i} style={styles.faqCard}>
          <button
            style={styles.question}
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            aria-expanded={openIndex === i}
          >
            {f.q}
          </button>
          {openIndex === i && <div style={styles.answer}>{f.a}</div>}
        </div>
      ))}
    </div>
  );
}