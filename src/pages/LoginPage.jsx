// LoginPage.jsx
// Updated React component — login box slightly lower and title width fixed for better visibility.

import React from 'react';

export default function LoginPage() {
  const BG_IMAGE = 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead'; // Example placeholder

  const styles = {
    page: {
      minHeight: '100vh',
      fontFamily: "'Helvetica Neue', Arial, sans-serif",
      backgroundColor: '#f5f5f5',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start',
      padding: '0 20px',
      boxSizing: 'border-box',
      color: '#222'
    },
    topBand: {
      position: 'fixed',
      left: 0,
      right: 0,
      height: 80,
      backgroundImage: `url(${BG_IMAGE})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 2,
      boxShadow: 'inset 0 -60px 60px rgba(0,0,0,0.6)'
    },
    titleBox: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      padding: '10px 20px',
      borderRadius: 6,
      maxWidth: 320, // 🔽 reduced width to make it compact
      textAlign: 'center'
    },
    title: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 700,
      letterSpacing: '0.5px',
      margin: 0
    },
    cardWrapper: {
      width: '100%',
      maxWidth: 980,
      marginTop: 160, // 🔽 lowered the card more (from 100 → 160)
      backgroundColor: '#fff',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      padding: '40px 36px',
      boxSizing: 'border-box',
      zIndex: 1
    },
    columns: {
      display: 'flex',
      gap: 40,
      alignItems: 'flex-start'
    },
    left: {
      flex: 1,
      paddingRight: 20
    },
    right: {
      flex: 1,
      paddingLeft: 20,
      borderLeft: '1px solid rgba(0,0,0,0.1)'
    },
    heading: {
      fontSize: 24,
      fontWeight: 700,
      marginBottom: 22,
      color: '#333'
    },
    smallText: {
      fontSize: 13,
      color: '#6d6d6d',
      marginBottom: 12,
      lineHeight: 1.4
    },
    input: {
      width: '100%',
      padding: '12px 10px',
      marginBottom: 14,
      border: '1px solid #cfcfcf',
      borderRadius: 4,
      boxSizing: 'border-box',
      fontSize: 14,
      backgroundColor: '#fff'
    },
    buttonPrimary: {
      display: 'inline-block',
      width: '100%',
      padding: '12px 16px',
      backgroundColor: '#e44d26',
      color: '#fff',
      border: 'none',
      borderRadius: 4,
      fontWeight: 700,
      letterSpacing: 1,
      cursor: 'pointer',
      marginTop: 10
    },
    socialBox: {
      marginTop: 28,
      padding: '18px',
      backgroundColor: '#f9f9f9',
      border: '1px solid rgba(0,0,0,0.08)'
    },
    socialRow: {
      display: 'flex',
      gap: 12,
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 12
    },
    socialBtn: {
      flex: 1,
      padding: '10px 12px',
      borderRadius: 3,
      border: 'none',
      cursor: 'pointer',
      fontWeight: 600,
      fontSize: 12
    },
    footerText: {
      textAlign: 'center',
      fontSize: 12,
      color: '#666',
      marginTop: 30
    }
  };

  return (
    <div style={styles.page}>
      {/* Top band with title */}
      <div style={styles.topBand}>
        <div style={styles.titleBox}>
          <h1 style={styles.title}>Log in or Sign Up</h1>
        </div>
      </div>

      {/* Card Section */}
      <div style={styles.cardWrapper}>
        <div style={styles.columns}>
          {/* Left: Existing Customer */}
          <div style={styles.left}>
            <div style={styles.heading}>Existing Customer</div>

            <input style={styles.input} placeholder="Enter your email address" />
            <input style={styles.input} placeholder="Enter your password" type="password" />
            <div style={{ ...styles.smallText, marginTop: 6 }}>
              <a href="#" style={{ color: '#e44d26', textDecoration: 'none' }}>Forgot Your Password?</a>
            </div>

            <button style={styles.buttonPrimary}>LOGIN</button>

            <div style={styles.socialBox}>
              <div style={{ textAlign: 'center', fontSize: 16, fontWeight: 600, marginBottom: 10 }}>or login with</div>
              <div style={styles.socialRow}>
                <button style={{ ...styles.socialBtn, backgroundColor: '#3b5998', color: '#fff' }}>Facebook</button>
                <button style={{ ...styles.socialBtn, backgroundColor: '#fff', border: '1px solid #ddd', color: '#222' }}>Google</button>
                <button style={{ ...styles.socialBtn, backgroundColor: '#00457C', color: '#fff' }}>PayPal</button>
              </div>
            </div>
          </div>

          {/* Right: New Customer */}
          <div style={styles.right}>
            <div style={styles.heading}>New Customer</div>
            <div style={styles.smallText}>
              Your account is free and requested to <strong>track your orders!</strong>
            </div>

            <input style={styles.input} placeholder="Enter your email address" />
            <input style={styles.input} placeholder="Enter your full name" />
            <input style={styles.input} placeholder="Enter your mobile number" />
            
            <input style={styles.input} placeholder="Enter your password" type="password" />

            <button style={styles.buttonPrimary}>SIGN UP</button>
          </div>
        </div>
      </div>
    </div>
  );
}