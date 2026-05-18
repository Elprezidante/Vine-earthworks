import { useState, useEffect } from "react";
import { COLORS, FONTS, CONTACT } from "../theme";

const NAV_ITEMS = [
  { label: "Home", route: "/" },
  { label: "Glass Works", route: "/services" },
  { label: "Earthworks", route: "/services" },
  { label: "Gallery", route: "/gallery" },
  { label: "About", route: "/about" },
  { label: "Contact", route: "/contact" },
];

export default function Navbar({ onNavigate, currentPage }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (item) => {
    setMobileOpen(false);
    if (item.route) {
      onNavigate(item.route);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (item.section) {
      onNavigate("home");
      setTimeout(() => {
        document.getElementById(item.section)?.scrollIntoView({ behavior: "smooth" });
      }, 80);
    } else {
      onNavigate(item.page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;800;900&family=Barlow:wght@300;400;500;600&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
      `}</style>

      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
        height: 68,
        background: scrolled
          ? "rgba(7,13,26,0.97)"
          : "linear-gradient(180deg,rgba(7,13,26,0.9) 0%,transparent 100%)",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? `1px solid ${COLORS.border}` : "none",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 4vw",
        transition: "all 0.4s ease",
      }}>
        {/* Logo */}
        <button onClick={() => handleNav({ route: "/" })} style={{
          background: "none", border: "none", cursor: "pointer",
          display: "flex", alignItems: "center", gap: 12,
        }}>
          <div style={{
            width: 46, height: 46, borderRadius: "50%",
            background: `linear-gradient(135deg, ${COLORS.navy} 0%, ${COLORS.navyLight} 50%, ${COLORS.orange} 100%)`,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: FONTS.display, fontWeight: 900, fontSize: 17, color: "#fff",
            boxShadow: `0 0 20px ${COLORS.orangeGlow}`,
            border: `2px solid ${COLORS.orange}`,
            flexShrink: 0,
          }}>VE</div>
          <div style={{ textAlign: "left" }}>
            <div style={{
              fontFamily: FONTS.display, fontWeight: 900, fontSize: 20,
              color: COLORS.textPrimary, lineHeight: 1,
              letterSpacing: 1,
            }}>
              <span style={{ color: COLORS.orange }}>VINE</span> EARTHWORKS
            </div>
            <div style={{
              fontFamily: FONTS.body, fontWeight: 400, fontSize: 10,
              color: COLORS.steel, letterSpacing: 2, textTransform: "uppercase",
            }}>Glass & Aluminium Works</div>
          </div>
        </button>

        {/* Desktop Nav */}
        <ul style={{
          display: "flex", gap: 4, listStyle: "none",
          alignItems: "center",
          "@media (max-width: 900px)": { display: "none" },
        }} className="desktop-nav">
          {NAV_ITEMS.map((item) => (
            <li key={item.label}>
              <button
                onMouseEnter={() => setHoveredItem(item.label)}
                onMouseLeave={() => setHoveredItem(null)}
                onClick={() => handleNav(item)}
                style={{
                  background: "none", border: "none", cursor: "pointer",
                  fontFamily: FONTS.display, fontWeight: 700, fontSize: 14,
                  letterSpacing: 1.5, textTransform: "uppercase",
                  color: hoveredItem === item.label ? "#fff" : COLORS.steel,
                  padding: "8px 14px",
                  position: "relative",
                  transition: "color 0.2s",
                }}>
                {item.label}
                <span style={{
                  position: "absolute", bottom: 2, left: 14, right: 14,
                  height: 2, borderRadius: 1,
                  background: COLORS.orange,
                  transform: hoveredItem === item.label ? "scaleX(1)" : "scaleX(0)",
                  transition: "transform 0.25s ease",
                  transformOrigin: "left",
                }} />
              </button>
            </li>
          ))}
        </ul>

        {/* CTA + Phone */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }} className="desktop-cta">
          <a href={`tel:${CONTACT.phone}`} style={{
            fontFamily: FONTS.display, fontWeight: 700, fontSize: 14,
            color: COLORS.steel, textDecoration: "none", letterSpacing: .5,
            display: "flex", alignItems: "center", gap: 6,
          }}>
            <span style={{ color: COLORS.orange }}>📞</span>
            {CONTACT.phoneDisplay}
          </a>
          <button onClick={() => { onNavigate("contact"); window.scrollTo({ top: 0 }); }} style={{
            background: COLORS.orange, color: "#fff", border: "none",
            padding: "10px 22px", borderRadius: 6,
            fontFamily: FONTS.display, fontWeight: 800, fontSize: 14,
            letterSpacing: 1.5, cursor: "pointer",
            textTransform: "uppercase",
            boxShadow: `0 4px 20px ${COLORS.orangeGlow}`,
            transition: "all 0.2s",
          }}
            onMouseEnter={e => e.currentTarget.style.background = COLORS.orangeHover}
            onMouseLeave={e => e.currentTarget.style.background = COLORS.orange}
          >
            Get Quote
          </button>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{
            display: "none", background: "none", border: "none",
            cursor: "pointer", flexDirection: "column", gap: 5, padding: 4,
          }}
          className="hamburger"
          aria-label="Menu"
        >
          {[0, 1, 2].map(i => (
            <span key={i} style={{
              display: "block", width: 26, height: 2, background: "#fff",
              borderRadius: 2, transition: "0.3s",
            }} />
          ))}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div style={{
          position: "fixed", top: 68, left: 0, right: 0, zIndex: 999,
          background: "rgba(7,13,26,0.98)",
          backdropFilter: "blur(20px)",
          borderBottom: `1px solid ${COLORS.border}`,
          padding: "16px 0",
          animation: "slideDown 0.25s ease",
        }}>
          {NAV_ITEMS.map(item => (
            <button key={item.label} onClick={() => handleNav(item)} style={{
              display: "block", width: "100%", background: "none",
              border: "none", cursor: "pointer",
              fontFamily: FONTS.display, fontWeight: 700, fontSize: 18,
              letterSpacing: 2, textTransform: "uppercase",
              color: COLORS.textPrimary, padding: "14px 24px",
              textAlign: "left",
              borderBottom: `1px solid ${COLORS.border}`,
              transition: "color 0.2s",
            }}
              onMouseEnter={e => e.currentTarget.style.color = COLORS.orange}
              onMouseLeave={e => e.currentTarget.style.color = COLORS.textPrimary}
            >
              {item.label}
            </button>
          ))}
          <div style={{ padding: "16px 24px" }}>
            <a href={`tel:${CONTACT.phone}`} style={{
              display: "block", fontFamily: FONTS.display, fontWeight: 700,
              fontSize: 18, color: COLORS.orange, textDecoration: "none",
            }}>
              📞 {CONTACT.phoneDisplay}
            </a>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .desktop-cta { display: none !important; }
          .hamburger { display: flex !important; }
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
}