import React, { useState, useMemo, useEffect } from "react";

// Enhanced single-file CheckoutPage (inline styles)
// - Page background changed to #E4E4E4
// - Improved header (search + sort), product card hover, badge, subtle shadows
// - Cart column: increment/decrement, remove, clear cart
// - Coupon support (SAVE10 = 10% off)
// - Notice for "added" items
export default function CheckoutPage() {
  const containerWidth = 1200; // wider layout

  const initialProducts = [
    { id: 1, title: "Steam Game Card - $50", denomination: 50, price: 57.99, reviews: 143, badge: "Bestseller" },
    { id: 2, title: "Google Play Card - $100", denomination: 100, price: 112.99, reviews: 153 },
    { id: 3, title: "PlayStation Network - $50", denomination: 50, price: 56.99, reviews: 2035, badge: "Top Rated" },
    { id: 4, title: "Hulu Gift Card - $50", denomination: 50, price: 55.99, reviews: 1 },
    { id: 5, title: "Razer Gold Card - $50", denomination: 50, price: 57.99, reviews: 13, badge: "Limited" },
  ];

  const [products] = useState(initialProducts);
  // cart entries: { productId, qty }
  const [cart, setCart] = useState([]);
  const [notice, setNotice] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortMode, setSortMode] = useState("featured"); // featured, price-asc, price-desc, reviews
  const [couponCode, setCouponCode] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState(null);

  useEffect(() => {
    let t;
    if (notice) t = setTimeout(() => setNotice(null), 1600);
    return () => clearTimeout(t);
  }, [notice]);

  function formatCurrency(v) {
    return v.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }

  function addToCart(productId) {
    setCart((prev) => {
      const existing = prev.find((p) => p.productId === productId);
      if (existing) {
        return prev.map((p) => (p.productId === productId ? { ...p, qty: p.qty + 1 } : p));
      }
      return [...prev, { productId, qty: 1 }];
    });

    const product = products.find((p) => p.id === productId);
    setNotice(`${product.title} added to cart`);
  }

  function removeFromCart(productId) {
    setCart((prev) => prev.filter((p) => p.productId !== productId));
  }

  function setQty(productId, qty) {
    const q = Number(qty) || 0;
    if (q <= 0) return removeFromCart(productId);
    setCart((prev) => prev.map((p) => (p.productId === productId ? { ...p, qty: q } : p)));
  }

  function incQty(productId) {
    setCart((prev) => prev.map((p) => (p.productId === productId ? { ...p, qty: p.qty + 1 } : p)));
  }
  function decQty(productId) {
    setCart((prev) =>
      prev
        .map((p) => (p.productId === productId ? { ...p, qty: p.qty - 1 } : p))
        .filter((p) => p.qty > 0)
    );
  }

  function clearCart() {
    setCart([]);
  }

  function applyCoupon() {
    const code = couponCode.trim().toUpperCase();
    if (code === "SAVE10") {
      setAppliedCoupon({ code, type: "percent", value: 10, label: "10% off" });
      setNotice("Coupon applied: SAVE10");
    } else {
      setAppliedCoupon(null);
      setNotice("Invalid coupon");
    }
  }

  const filteredSortedProducts = useMemo(() => {
    let list = products.filter((p) => p.title.toLowerCase().includes(searchQuery.toLowerCase()));
    if (sortMode === "price-asc") list = [...list].sort((a, b) => a.price - b.price);
    if (sortMode === "price-desc") list = [...list].sort((a, b) => b.price - a.price);
    if (sortMode === "reviews") list = [...list].sort((a, b) => b.reviews - a.reviews);
    // featured: keep original order
    return list;
  }, [products, searchQuery, sortMode]);

  const cartDetails = useMemo(() => {
    const items = cart.map((item) => {
      const prod = products.find((p) => p.id === item.productId);
      const lineTotal = prod.price * item.qty;
      return { ...prod, qty: item.qty, lineTotal };
    });
    const subtotal = items.reduce((s, it) => s + it.lineTotal, 0);
    // shipping policy: free over 100, else 1.99
    const shipping = subtotal > 100 || subtotal === 0 ? 0 : 1.99;
    let discount = 0;
    if (appliedCoupon) {
      if (appliedCoupon.type === "percent") discount = (appliedCoupon.value / 100) * subtotal;
      else if (appliedCoupon.type === "flat") discount = appliedCoupon.value;
    }
    const total = subtotal + shipping - discount;
    return { items, subtotal, shipping, discount, total: Math.max(total, 0) };
  }, [cart, products, appliedCoupon]);

  const styles = {
    page: {
      minHeight: "100vh",
      width: "100%",
      background: "#E4E4E4", // requested background
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
      fontFamily:
        "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
      color: "#222",
      padding: 28,
      boxSizing: "border-box",
    },
    inner: {
      width: containerWidth,
      display: "flex",
      gap: 28,
      boxSizing: "border-box",
    },
    panel: {
      flex: 1,
      background: "#ffffff",
      borderRadius: 12,
      overflow: "hidden",
      boxShadow: "0 10px 30px rgba(17,24,39,0.08)",
      border: "1px solid rgba(0,0,0,0.04)",
    },
    header: {
      padding: "22px 28px",
      background: "linear-gradient(180deg,#0f1724 0%, #111827 100%)",
      color: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 12,
    },
    headerLeft: { display: "flex", alignItems: "center", gap: 14 },
    brand: { fontSize: 20, fontWeight: 800, letterSpacing: 0.6, display: "flex", gap: 10, alignItems: "center" },
    brandLogo: {
      width: 36, height: 36, borderRadius: 8, background: "linear-gradient(135deg,#c92b1a,#ff6b4a)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, color: "#fff",
    },
    headerRight: { display: "flex", alignItems: "center", gap: 12 },
    searchInput: {
      padding: "8px 12px",
      borderRadius: 8,
      border: "1px solid rgba(255,255,255,0.08)",
      background: "rgba(255,255,255,0.04)",
      color: "#fff",
      outline: "none",
      width: 340,
    },
    sortSelect: { padding: "8px 10px", borderRadius: 8, border: "none", outline: "none", background: "#0b1220", color: "#d1d5db" },

    stepsBar: {
      display: "flex",
      background: "#fff",
      borderTop: "4px solid #e6e6e6",
      padding: 10,
      gap: 8,
    },
    step: (active) => ({
      flex: 1,
      padding: "10px 12px",
      textAlign: "center",
      fontSize: 13,
      color: active ? "#111827" : "#9ca3af",
      background: active ? "#fff" : "transparent",
      borderTop: active ? "3px solid #c92b1a" : "3px solid transparent",
    }),
    content: { padding: 28 },
    emptyRow: { display: "flex", gap: 24, alignItems: "center", marginBottom: 26 },
    sadBox: {
      width: 150,
      height: 100,
      background: "#0b85e6",
      borderRadius: 6,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#fff",
      fontSize: 40,
      position: "relative",
      boxShadow: "0 2px 0 rgba(0,0,0,0.15)",
    },

    // product grid
    gridWrap: { marginTop: 18 },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
      gap: 18,
    },
    card: {
      background: "#ffffff",
      borderRadius: 12,
      padding: 14,
      boxShadow: "0 6px 18px rgba(17,24,39,0.04)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      minHeight: 260,
      transition: "transform 180ms ease, box-shadow 180ms ease",
      cursor: "pointer",
      border: "1px solid rgba(0,0,0,0.03)",
    },
    cardHover: {
      transform: "translateY(-6px)",
      boxShadow: "0 18px 36px rgba(17,24,39,0.12)",
    },
    giftTop: {
      width: "100%",
      height: 94,
      borderRadius: 10,
      background: "linear-gradient(135deg,#0b1220,#1f2937)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#fff",
      fontSize: 20,
      fontWeight: 800,
    },
    productTitle: { marginTop: 12, fontSize: 14, fontWeight: 800, color: "#111827", textAlign: "center" },
    productMeta: { fontSize: 12, color: "#6b7280", marginTop: 8 },
    buyNowRow: { display: "flex", gap: 8, alignItems: "center", marginTop: 12 },
    buyBtn: {
      background: "#c92b1a",
      color: "#fff",
      padding: "10px 14px",
      borderRadius: 10,
      fontWeight: 800,
      fontSize: 13,
      border: "none",
      cursor: "pointer",
      letterSpacing: 0.3,
      boxShadow: "0 6px 18px rgba(201,43,26,0.14)",
    },
    quickAddBtn: {
      padding: 10,
      borderRadius: 10,
      border: "1px solid #eef2f6",
      background: "#fff",
      cursor: "pointer",
    },
    badgePill: {
      position: "absolute",
      top: 12,
      left: 12,
      background: "#fde68a",
      color: "#92400e",
      padding: "6px 8px",
      borderRadius: 20,
      fontSize: 12,
      fontWeight: 700,
    },

    // cart column
    cartColumn: {
      width: 380,
      background: "#ffffff",
      borderRadius: 12,
      padding: 18,
      boxShadow: "0 10px 30px rgba(17,24,39,0.08)",
      height: "fit-content",
      position: "sticky",
      top: 28,
      alignSelf: "flex-start",
      border: "1px solid rgba(0,0,0,0.04)",
    },
    cartHeader: { display: "flex", justifyContent: "space-between", alignItems: "center" },
    badge: {
      background: "#c92b1a",
      color: "#fff",
      borderRadius: 20,
      padding: "6px 10px",
      fontWeight: 800,
      fontSize: 13,
    },
    cartItem: { display: "flex", gap: 12, alignItems: "center", marginTop: 14 },
    cartItemInfo: { flex: 1 },
    qtyInput: { width: 64, padding: 8, borderRadius: 8, border: "1px solid #e6e6e6", fontWeight: 700 },
    qtyControl: { display: "flex", gap: 6, alignItems: "center" },
    smallBtn: { padding: "6px 8px", borderRadius: 8, border: "1px solid #eee", cursor: "pointer", background: "#fafafa" },
    removeBtn: { background: "transparent", border: "none", color: "#c92b1a", cursor: "pointer", fontWeight: 700 },
    totals: { marginTop: 18, borderTop: "1px solid #f3f4f6", paddingTop: 12 },
    checkoutBtn: {
      marginTop: 12,
      width: "100%",
      background: "#0b85e6",
      color: "#fff",
      padding: "12px 14px",
      borderRadius: 10,
      border: "none",
      fontWeight: 800,
      cursor: "pointer",
      boxShadow: "0 10px 20px rgba(11,133,230,0.14)",
    },

    couponRow: { display: "flex", gap: 8, marginTop: 12 },
    couponInput: { flex: 1, padding: 8, borderRadius: 8, border: "1px solid #e6e6e6" },
    clearBtn: { marginTop: 8, background: "transparent", border: "1px solid #e6e6e6", padding: "8px 10px", borderRadius: 8, cursor: "pointer" },

    notice: {
      position: "fixed",
      right: 24,
      top: 24,
      background: "#0b85e6",
      color: "#fff",
      padding: "10px 14px",
      borderRadius: 10,
      boxShadow: "0 10px 30px rgba(2,6,23,0.2)",
      zIndex: 9999,
      fontWeight: 800,
    },
  };

  // small helper for card hover state (local)
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div style={styles.page}>
      <div style={styles.inner}>
        <div style={styles.panel}>
          <div style={styles.header}>
            <div style={styles.headerLeft}>
              <div style={styles.brand}>                
              </div>
            </div>

            <div style={styles.headerRight}>
              <input
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={styles.searchInput}
              />
               <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div style={styles.badge}>{cart.reduce((s, i) => s + i.qty, 0)} items</div>
              </div>
            </div>
          </div>
          <div style={styles.stepsBar}>
            <div style={styles.step(true)}>✔ YOUR SHOPPING CART</div>
            <div style={styles.step(false)}>◻ ACCOUNT DETAILS</div>
            <div style={styles.step(false)}>◻ PAYMENT METHOD</div>
          </div>

          <div style={styles.content}>
            {/* Cart empty state / helper */}
            {cart.length === 0 ? (
              <div style={styles.emptyRow}>
                <div style={styles.sadBox}>
                  <div style={{ fontSize: 56, lineHeight: "0" }}>☹</div>
                </div>

                <div>
                  <div style={{ fontWeight: 800, fontSize: 18 }}>YOUR CART IS EMPTY.</div>
                  <div style={{ marginTop: 8, color: "#6b7280" }}>Add items from the best-sellers below.</div>
                </div>
              </div>
            ) : null}

            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 6 }}>
              <div style={{ fontSize: 20, fontWeight: 800, color: "#0f1724" }}>GAME CARD BEST SELLERS</div>
              <div style={{ color: "#6b7280", fontSize: 13 }}>{filteredSortedProducts.length} products</div>
            </div>

            <div style={styles.gridWrap}>
              <div style={styles.grid}>
                {filteredSortedProducts.map((p) => {
                  const hovering = hoveredCard === p.id;
                  return (
                    <div
                      key={p.id}
                      style={{ ...styles.card, ...(hovering ? styles.cardHover : {}) }}
                      onMouseEnter={() => setHoveredCard(p.id)}
                      onMouseLeave={() => setHoveredCard(null)}
                    >
                      {p.badge ? <div style={styles.badgePill}>{p.badge}</div> : null}

                      <div style={styles.giftTop}>${p.denomination}</div>

                      <div
                        style={{
                          width: 160,
                          height: 76,
                          borderRadius: 10,
                          marginTop: 12,
                          background: "linear-gradient(135deg,#f3f4f6,#e5e7eb)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#374151",
                          fontWeight: 800,
                        }}
                      >
                        IMAGE
                      </div>

                      <div style={styles.productTitle}>{p.title}</div>
                      <div style={styles.productMeta}>★★★★★ &nbsp; {p.reviews} Reviews</div>
                      <div style={{ marginTop: 10, fontSize: 16, color: "#c92b1a", fontWeight: 900 }}>${formatCurrency(p.price)}</div>

                      <div style={styles.buyNowRow}>
                        <button style={styles.buyBtn} onClick={() => addToCart(p.id)}>
                          BUY NOW
                        </button>
                        <button
                          title="Add one"
                          onClick={() => addToCart(p.id)}
                          style={styles.quickAddBtn}
                        >
                          🛒
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Cart column */}
        <aside style={styles.cartColumn}>
          <div style={styles.cartHeader}>
            <div style={{ fontSize: 16, fontWeight: 900, color: "#0f1724" }}>Your Cart</div>
            <div style={{ fontSize: 13, color: "#6b7280" }}>{cartDetails.items.length} unique items</div>
          </div>

          {cartDetails.items.length === 0 ? (
            <div style={{ marginTop: 18, color: "#6b7280" }}>No items yet — pick something from the left.</div>
          ) : (
            cartDetails.items.map((it) => (
              <div key={it.id} style={styles.cartItem}>
                <div style={{ width: 72, height: 56, borderRadius: 8, background: "linear-gradient(135deg,#f3f4f6,#e5e7eb)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800 }}>
                  {it.denomination}$
                </div>

                <div style={styles.cartItemInfo}>
                  <div style={{ fontWeight: 800 }}>{it.title}</div>
                  <div style={{ fontSize: 13, color: "#6b7280", marginTop: 6 }}>${formatCurrency(it.price)} each</div>

                  <div style={{ marginTop: 10, display: "flex", alignItems: "center", gap: 8 }}>
                    <div style={styles.qtyControl}>
                      <button style={styles.smallBtn} onClick={() => decQty(it.id)} aria-label="decrease">−</button>
                      <input
                        type="number"
                        min={1}
                        value={it.qty}
                        onChange={(e) => setQty(it.id, Number(e.target.value))}
                        style={styles.qtyInput}
                        aria-label="quantity"
                      />
                      <button style={styles.smallBtn} onClick={() => incQty(it.id)} aria-label="increase">+</button>
                    </div>

                    <div style={{ fontSize: 14, color: "#0f1724", fontWeight: 900 }}>${formatCurrency(it.lineTotal)}</div>

                    <button style={styles.removeBtn} onClick={() => removeFromCart(it.id)}>
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}

          <div style={{ display: "flex", justifyContent: "space-between", marginTop: 14 }}>
            <div style={{ display: "flex", gap: 8 }}>
              <input
                placeholder="Coupon code"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                style={styles.couponInput}
              />
              <button style={styles.smallBtn} onClick={applyCoupon}>Apply</button>
            </div>

            <div>
              <button style={styles.clearBtn} onClick={clearCart}>
                Clear cart
              </button>
            </div>
          </div>

          <div style={styles.totals}>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8 }}>
              <div style={{ color: "#6b7280" }}>Subtotal</div>
              <div style={{ fontWeight: 900 }}>${formatCurrency(cartDetails.subtotal)}</div>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8 }}>
              <div style={{ color: "#6b7280" }}>Shipping</div>
              <div style={{ fontWeight: 800 }}>${formatCurrency(cartDetails.shipping)}</div>
            </div>

            {cartDetails.discount > 0 ? (
              <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8 }}>
                <div style={{ color: "#6b7280" }}>Discount ({appliedCoupon?.code})</div>
                <div style={{ fontWeight: 800, color: "#059669" }}>−${formatCurrency(cartDetails.discount)}</div>
              </div>
            ) : null}

            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 12, fontSize: 18 }}>
              <div style={{ fontWeight: 900 }}>Total</div>
              <div style={{ fontWeight: 900, color: "#c92b1a" }}>${formatCurrency(cartDetails.total)}</div>
            </div>

            <button
              style={styles.checkoutBtn}
              onClick={() =>
                cartDetails.items.length
                  ? alert("Proceed to checkout — integrate payment provider (demo).")
                  : setNotice("Add at least one item to checkout")
              }
            >
              CHECKOUT
            </button>
          </div>
        </aside>
      </div>

      {notice ? <div style={styles.notice}>{notice}</div> : null}
    </div>
  );
}