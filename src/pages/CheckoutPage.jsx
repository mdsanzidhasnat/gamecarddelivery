import React, { useState, useMemo } from "react";

// Single-file professional CheckoutPage with inline styles.
// Features:
// - Product grid with BUY NOW buttons
// - Persistent right-side cart that shows added items, quantities, remove, and totals
// - Cart badge and simple "Added" confirmation
// - All styling inline so you can paste into any React app

export default function CheckoutPage() {
  const containerWidth = 1100;

  const initialProducts = [
    { id: 1, title: "Steam Game Card - $50", denomination: 50, price: 57.99, reviews: 143 },
    { id: 2, title: "Google Play Card - $100", denomination: 100, price: 112.99, reviews: 153 },
    { id: 3, title: "PlayStation Network - $50", denomination: 50, price: 56.99, reviews: 2035 },
    { id: 4, title: "Hulu Gift Card - $50", denomination: 50, price: 55.99, reviews: 1 },
    { id: 5, title: "Razer Gold Card - $50", denomination: 50, price: 57.99, reviews: 13 },
  ];

  const [products] = useState(initialProducts);
  const [cart, setCart] = useState([]); // { productId, qty }
  const [notice, setNotice] = useState(null);

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
    // clear notice after short time
    setTimeout(() => setNotice(null), 1800);
  }

  function removeFromCart(productId) {
    setCart((prev) => prev.filter((p) => p.productId !== productId));
  }

  function setQty(productId, qty) {
    if (qty <= 0) return removeFromCart(productId);
    setCart((prev) => prev.map((p) => (p.productId === productId ? { ...p, qty } : p)));
  }

  const cartDetails = useMemo(() => {
    const items = cart.map((item) => {
      const prod = products.find((p) => p.id === item.productId);
      const lineTotal = prod.price * item.qty;
      return { ...prod, qty: item.qty, lineTotal };
    });
    const subtotal = items.reduce((s, it) => s + it.lineTotal, 0);
    const shipping = items.length ? 1.99 : 0; // tiny shipping for demo
    const total = subtotal + shipping;
    return { items, subtotal, shipping, total };
  }, [cart, products]);

  const styles = {
    page: {
      minHeight: "100vh",
      width: "100%",
      background: "linear-gradient(#0b0b0b 0%, #0b0b0b 30%, #1c1c1c 100%)",
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
      fontFamily:
        "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
      color: "#222",
      padding: 20,
      boxSizing: "border-box",
    },
    inner: {
      width: containerWidth,
      display: "flex",
      gap: 24,
      boxSizing: "border-box",
    },
    panel: {
      flex: 1,
      background: "#f7f7f8",
      borderRadius: 8,
      overflow: "hidden",
      boxShadow: "0 6px 20px rgba(0,0,0,0.4)",
    },
    header: {
      padding: "22px 28px",
      background: "linear-gradient(180deg,#1b2630 0%, #3b2832 100%)",
      color: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 12,
    },
    headerLeft: { display: "flex", alignItems: "center", gap: 12 },
    brand: { fontSize: 22, fontWeight: 700, letterSpacing: 1 },
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
      color: active ? "#222" : "#a1a1a1",
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
      gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
      gap: 16,
    },
    card: {
      background: "#fff",
      borderRadius: 8,
      padding: 12,
      boxShadow: "0 4px 10px rgba(0,0,0,0.06)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      minHeight: 230,
    },
    giftTop: {
      width: "100%",
      height: 84,
      borderRadius: 6,
      background: "linear-gradient(135deg,#111,#333)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#fff",
      fontSize: 18,
    },
    productTitle: { marginTop: 10, fontSize: 13, fontWeight: 700, color: "#333", textAlign: "center" },
    productMeta: { fontSize: 12, color: "#777", marginTop: 6 },
    buyNowRow: { display: "flex", gap: 8, alignItems: "center", marginTop: 12 },
    buyBtn: {
      background: "#c92b1a",
      color: "#fff",
      padding: "8px 12px",
      borderRadius: 6,
      fontWeight: 700,
      fontSize: 13,
      border: "none",
      cursor: "pointer",
    },

    // cart column
    cartColumn: {
      width: 360,
      background: "#fff",
      borderRadius: 8,
      padding: 18,
      boxShadow: "0 6px 20px rgba(0,0,0,0.45)",
      height: "fit-content",
      position: "sticky",
      top: 26,
      alignSelf: "flex-start",
    },
    cartHeader: { display: "flex", justifyContent: "space-between", alignItems: "center" },
    badge: {
      background: "#c92b1a",
      color: "#fff",
      borderRadius: 20,
      padding: "6px 10px",
      fontWeight: 700,
      fontSize: 13,
    },
    cartItem: { display: "flex", gap: 12, alignItems: "center", marginTop: 14 },
    cartItemInfo: { flex: 1 },
    qtyInput: { width: 56, padding: 6, borderRadius: 6, border: "1px solid #e6e6e6" },
    removeBtn: { background: "transparent", border: "none", color: "#c92b1a", cursor: "pointer" },
    totals: { marginTop: 18, borderTop: "1px solid #eee", paddingTop: 12 },
    checkoutBtn: {
      marginTop: 12,
      width: "100%",
      background: "#0b85e6",
      color: "#fff",
      padding: "12px 14px",
      borderRadius: 8,
      border: "none",
      fontWeight: 700,
      cursor: "pointer",
    },

    notice: {
      position: "fixed",
      right: 24,
      top: 24,
      background: "#0b85e6",
      color: "#fff",
      padding: "8px 12px",
      borderRadius: 8,
      boxShadow: "0 6px 20px rgba(0,0,0,0.4)",
    },
  };

  return (
    <div style={styles.page}>
      <div style={styles.inner}>
        <div style={styles.panel}>
          <div style={styles.header}>
            <div style={styles.headerLeft}>
              <div style={styles.brand}>GameCardDelivery</div>
              <div style={{ color: "#d1d1d1", fontSize: 14 }}>Secure Checkout</div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ fontSize: 13, color: "#d1d1d1" }}>Safe payments · Fast email delivery</div>
              <div style={styles.badge}>{cart.reduce((s, i) => s + i.qty, 0)} items</div>
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
                  <div style={{ fontWeight: 700, fontSize: 18 }}>YOUR CART IS EMPTY.</div>
                  <div style={{ marginTop: 8, color: "#666" }}>Add items from the best-sellers below.</div>
                </div>
              </div>
            ) : null}

            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 6 }}>
              <div style={{ fontSize: 20, fontWeight: 700 }}>GAME CARD BEST SELLERS</div>
              <div style={{ color: "#888", fontSize: 13 }}>{products.length} products</div>
            </div>

            <div style={styles.gridWrap}>
              <div style={styles.grid}>
                {products.map((p) => (
                  <div key={p.id} style={styles.card}>
                    <div style={styles.giftTop}>${p.denomination}</div>

                    <div style={{ width: 120, height: 64, borderRadius: 6, marginTop: 10, background: "linear-gradient(135deg,#e6e6e6,#cfcfcf)", display: "flex", alignItems: "center", justifyContent: "center", color: "#444" }}>
                      Image
                    </div>

                    <div style={styles.productTitle}>{p.title}</div>
                    <div style={styles.productMeta}>★★★★★ &nbsp; {p.reviews} Reviews</div>
                    <div style={{ marginTop: 10, fontSize: 14, color: "#c92b1a", fontWeight: 800 }}>${p.price.toFixed(2)}</div>

                    <div style={styles.buyNowRow}>
                      <button style={styles.buyBtn} onClick={() => addToCart(p.id)}>
                        BUY NOW
                      </button>
                      <button
                        title="Add one more"
                        onClick={() => addToCart(p.id)}
                        style={{ padding: 8, borderRadius: 6, border: "1px solid #eee", background: "transparent", cursor: "pointer" }}
                      >
                        🛒
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Cart column */}
        <aside style={styles.cartColumn}>
          <div style={styles.cartHeader}>
            <div style={{ fontSize: 16, fontWeight: 800 }}>Your Cart</div>
            <div style={{ fontSize: 13, color: "#666" }}>{cartDetails.items.length} unique items</div>
          </div>

          {cartDetails.items.length === 0 ? (
            <div style={{ marginTop: 18, color: "#777" }}>No items yet — pick something from the left.</div>
          ) : (
            cartDetails.items.map((it) => (
              <div key={it.id} style={styles.cartItem}>
                <div style={{ width: 64, height: 48, borderRadius: 6, background: "linear-gradient(135deg,#ddd,#bbb)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  {it.denomination}$
                </div>

                <div style={styles.cartItemInfo}>
                  <div style={{ fontWeight: 700 }}>{it.title}</div>
                  <div style={{ fontSize: 13, color: "#777", marginTop: 6 }}>${it.price.toFixed(2)} each</div>

                  <div style={{ marginTop: 8, display: "flex", alignItems: "center", gap: 8 }}>
                    <input
                      type="number"
                      min={1}
                      value={it.qty}
                      onChange={(e) => setQty(it.id, Number(e.target.value))}
                      style={styles.qtyInput}
                    />

                    <div style={{ fontSize: 13, color: "#333", fontWeight: 700 }}>${it.lineTotal.toFixed(2)}</div>

                    <button style={styles.removeBtn} onClick={() => removeFromCart(it.id)}>
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}

          <div style={styles.totals}>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8 }}>
              <div style={{ color: "#777" }}>Subtotal</div>
              <div style={{ fontWeight: 800 }}>${cartDetails.subtotal.toFixed(2)}</div>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8 }}>
              <div style={{ color: "#777" }}>Shipping</div>
              <div style={{ fontWeight: 700 }}>${cartDetails.shipping.toFixed(2)}</div>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 12, fontSize: 18 }}>
              <div style={{ fontWeight: 800 }}>Total</div>
              <div style={{ fontWeight: 900, color: "#c92b1a" }}>${cartDetails.total.toFixed(2)}</div>
            </div>

            <button style={styles.checkoutBtn} onClick={() => alert("Proceed to checkout — implement payment flow")}>CHECKOUT</button>
          </div>
        </aside>
      </div>

      {notice ? <div style={styles.notice}>{notice}</div> : null}
    </div>
  );
}