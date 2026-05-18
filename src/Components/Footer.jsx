import { useState } from "react";
import { COLORS, FONTS, CONTACT } from "../theme";

const GLASS_LINKS = [
  "Glass Supply", "Glass Fitting", "Aluminium Windows",
  "Stainless Staircases", "Balcony Systems", "Curtain Walls",
  "Frameless Doors", "Shower Cubicles",
];

const EARTH_LINKS = [
  "Excavation & Dumping", "Building Materials",
  "Bush Clearing", "Road Grading",
  "Trench Digging", "Excavator Breaker",
];

const QUICK_LINKS = [
  { label: "Home", page: "home" },
  { label: "Glass Works", page: "home", section: "services" },
  { label: "Earthworks", page: "home", section: "earthworks" },
  { label: "Gallery", page: "home", section: "gallery" },
  { label: "About Us", page: "home", section: "about" },
  { label: "Contact", page: "contact" },
];

function FooterLink({ label, onClick }) {
  const [hovered, setHovered] = useState(false);
  return (
    <li>
      <button onClick={onClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          background: "none", border: "none", cursor: "pointer",
          fontFamily: FONTS.body, fontSize: 14,
          color: hovered ? COLORS.orange : COLORS.steel,
          padding: "3px 0", textAlign: "left",
          transition: "color 0.2s",
          display: "flex", alignItems: "center", gap: 6,
        }}>
        <span style={{
          width: 4, height: 4, borderRadius: "50%",
          background: hovered ? COLORS.orange : "transparent",
          border: `1px solid ${hovered ? COLORS.orange : COLORS.steel}`,
          flexShrink: 0, transition: "all 0.2s",
          display: "inline-block",
        }} />
        {label}
      </button>
    </li>
  );
}

export default function Footer({ onNavigate }) {
  const [emailInput, setEmailInput] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleNav = (item) => {
    if (item.section) {
      onNavigate("home");
      setTimeout(() => document.getElementById(item.section)?.scrollIntoView({ behavior: "smooth" }), 80);
    } else {
      onNavigate(item.page);
      window.scrollTo({ top: 0 });
    }
  };

  const handleSubscribe = () => {
    if (emailInput.includes("@")) { setSubscribed(true); setEmailInput(""); }
  };

  return (
    <footer style={{
      background: "#040810",
      borderTop: `1px solid rgba(232,84,26,0.2)`,
    }}>
      {/* Top CTA banner */}
      <div style={{
        background: `linear-gradient(135deg, ${COLORS.navy} 0%, ${COLORS.navyLight} 60%, rgba(232,84,26,0.15) 100%)`,
        padding: "48px 6vw",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        flexWrap: "wrap", gap: 24,
        borderBottom: `1px solid rgba(255,255,255,0.06)`,
        position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", right: -100, top: -100,
          width: 400, height: 400, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(232,84,26,0.1) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
        <div>
          <div style={{
            fontFamily: FONTS.display, fontWeight: 700, fontSize: 12,
            letterSpacing: 3, color: COLORS.orange, textTransform: "uppercase", marginBottom: 6,
          }}>Ready to Build?</div>
          <h3 style={{
            fontFamily: FONTS.display, fontWeight: 900,
            fontSize: "clamp(24px,3.5vw,44px)",
            color: "#fff", textTransform: "uppercase",
          }}>
            Start Your Project Today
          </h3>
          <p style={{ fontFamily: FONTS.body, color: COLORS.steel, fontSize: 15, marginTop: 6 }}>
            Free consultation & quote — no obligation.
          </p>
        </div>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <a href={`tel:${CONTACT.phone}`} style={{
            background: COLORS.orange, color: "#fff",
            padding: "14px 28px", borderRadius: 6, textDecoration: "none",
            fontFamily: FONTS.display, fontWeight: 800, fontSize: 16,
            letterSpacing: 1.5, textTransform: "uppercase",
            boxShadow: `0 8px 28px rgba(232,84,26,0.4)`,
            transition: "all 0.25s", display: "flex", alignItems: "center", gap: 8,
          }}
            onMouseEnter={e => { e.currentTarget.style.background = COLORS.orangeHover; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = COLORS.orange; e.currentTarget.style.transform = "none"; }}
          >
            📞 Call Now
          </a>
          <button onClick={() => { onNavigate("contact"); window.scrollTo({ top: 0 }); }} style={{
            background: "transparent", color: "#fff",
            border: "2px solid rgba(255,255,255,0.25)",
            padding: "14px 28px", borderRadius: 6, cursor: "pointer",
            fontFamily: FONTS.display, fontWeight: 800, fontSize: 16,
            letterSpacing: 1.5, textTransform: "uppercase",
            transition: "all 0.25s",
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "#fff"; e.currentTarget.style.background = "rgba(255,255,255,0.08)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)"; e.currentTarget.style.background = "transparent"; }}
          >
            Send Message
          </button>
        </div>
      </div>

      {/* Main footer grid */}
      <div style={{
        padding: "60px 6vw 40px",
        display: "grid",
        gridTemplateColumns: "2.2fr 1fr 1fr 1.5fr",
        gap: "5vw",
      }} className="footer-grid">

        {/* Brand column */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <div style={{
              width: 50, height: 50, borderRadius: "50%",
              background: `linear-gradient(135deg, ${COLORS.navy} 0%, ${COLORS.navyLight} 50%, ${COLORS.orange} 100%)`,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontFamily: FONTS.display, fontWeight: 900, fontSize: 18, color: "#fff",
              border: `2px solid ${COLORS.orange}`,
              boxShadow: `0 0 20px rgba(232,84,26,0.3)`,
            }}>VE</div>
            <div>
              <div style={{
                fontFamily: FONTS.display, fontWeight: 900, fontSize: 18,
                color: COLORS.textPrimary, lineHeight: 1,
              }}>
                <span style={{ color: COLORS.orange }}>VINE</span> EARTHWORKS
              </div>
              <div style={{
                fontFamily: FONTS.body, fontSize: 10, color: COLORS.steel,
                letterSpacing: 2, textTransform: "uppercase",
              }}>Glass & Aluminium Works</div>
            </div>
          </div>
          <p style={{
            fontFamily: FONTS.body, fontSize: 14, color: COLORS.steel,
            lineHeight: 1.75, marginBottom: 20, maxWidth: 280,
          }}>
            Professional glass, aluminium, and earthmoving services in Nairobi, Kenya. Reliability you can build on since 2014.
          </p>

          {/* Contact mini */}
          <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 24 }}>
            {[
              { icon: "📞", val: CONTACT.phoneDisplay, href: `tel:${CONTACT.phone}` },
              { icon: "✉️", val: CONTACT.email, href: `mailto:${CONTACT.email}` },
              { icon: "📍", val: CONTACT.location, href: null },
            ].map((c, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ fontSize: 14 }}>{c.icon}</span>
                {c.href ? (
                  <a href={c.href} target={c.href.startsWith("mailto:") ? "_blank" : undefined} rel="noreferrer noopener" style={{
                    fontFamily: FONTS.body, fontSize: 13, color: COLORS.steel,
                    textDecoration: "none", transition: "color 0.2s",
                  }}
                    onMouseEnter={e => e.currentTarget.style.color = COLORS.orange}
                    onMouseLeave={e => e.currentTarget.style.color = COLORS.steel}
                  >{c.val}</a>
                ) : (
                  <span style={{ fontFamily: FONTS.body, fontSize: 13, color: COLORS.steel }}>{c.val}</span>
                )}
              </div>
            ))}
          </div>

          {/* Social */}
          <div style={{ display: "flex", gap: 8 }}>
            {[
              { label: "f", href: CONTACT.facebook, color: "#1877F2" },
              { label: "in", href: "#", color: "#0A66C2" },
              { label: "▶", href: "#", color: "#FF0000" },
            ].map((s, i) => (
              <a key={i} href={s.href} target="_blank" rel="noreferrer" style={{
                width: 36, height: 36, borderRadius: 7,
                background: "rgba(255,255,255,0.05)",
                border: `1px solid ${COLORS.border}`,
                display: "flex", alignItems: "center", justifyContent: "center",
                textDecoration: "none",
                fontFamily: FONTS.display, fontWeight: 900, fontSize: 13,
                color: COLORS.steel, transition: "all 0.2s",
              }}
                onMouseEnter={e => { e.currentTarget.style.background = s.color; e.currentTarget.style.borderColor = s.color; e.currentTarget.style.color = "#fff"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; e.currentTarget.style.borderColor = COLORS.border; e.currentTarget.style.color = COLORS.steel; }}
              >{s.label}</a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h5 style={{
            fontFamily: FONTS.display, fontWeight: 800, fontSize: 14,
            letterSpacing: 2, textTransform: "uppercase", color: COLORS.textPrimary,
            marginBottom: 20, position: "relative", paddingBottom: 10,
          }}>
            Quick Links
            <span style={{
              position: "absolute", bottom: 0, left: 0,
              width: 24, height: 2, background: COLORS.orange, borderRadius: 1,
            }} />
          </h5>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 6 }}>
            {QUICK_LINKS.map(item => (
              <FooterLink key={item.label} label={item.label} onClick={() => handleNav(item)} />
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h5 style={{
            fontFamily: FONTS.display, fontWeight: 800, fontSize: 14,
            letterSpacing: 2, textTransform: "uppercase", color: COLORS.textPrimary,
            marginBottom: 20, position: "relative", paddingBottom: 10,
          }}>
            Services
            <span style={{
              position: "absolute", bottom: 0, left: 0,
              width: 24, height: 2, background: COLORS.orange, borderRadius: 1,
            }} />
          </h5>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 6 }}>
            {[...GLASS_LINKS.slice(0, 5), ...EARTH_LINKS.slice(0, 3)].map(s => (
              <FooterLink key={s} label={s} onClick={() => {}} />
            ))}
          </ul>
        </div>

        {/* Newsletter / Hours */}
        <div>
          <h5 style={{
            fontFamily: FONTS.display, fontWeight: 800, fontSize: 14,
            letterSpacing: 2, textTransform: "uppercase", color: COLORS.textPrimary,
            marginBottom: 20, position: "relative", paddingBottom: 10,
          }}>
            Stay Updated
            <span style={{
              position: "absolute", bottom: 0, left: 0,
              width: 24, height: 2, background: COLORS.orange, borderRadius: 1,
            }} />
          </h5>
          <p style={{ fontFamily: FONTS.body, fontSize: 13, color: COLORS.steel, lineHeight: 1.65, marginBottom: 16 }}>
            Subscribe for project updates and service announcements.
          </p>
          {subscribed ? (
            <div style={{
              background: "rgba(76,175,80,0.12)", border: "1px solid rgba(76,175,80,0.3)",
              borderRadius: 8, padding: "12px 16px",
              fontFamily: FONTS.body, fontSize: 13, color: "#4CAF50",
            }}>✅ Subscribed! Thank you.</div>
          ) : (
            <div style={{ display: "flex", gap: 0 }}>
              <input
                type="email" placeholder="your@email.com"
                value={emailInput} onChange={e => setEmailInput(e.target.value)}
                onKeyDown={e => e.key === "Enter" && handleSubscribe()}
                style={{
                  flex: 1, background: "rgba(255,255,255,0.05)",
                  border: `1px solid ${COLORS.border}`,
                  borderRight: "none",
                  borderRadius: "6px 0 0 6px",
                  padding: "10px 14px", color: COLORS.textPrimary,
                  fontFamily: FONTS.body, fontSize: 13, outline: "none",
                }}
                onFocus={e => e.target.style.borderColor = COLORS.orange}
                onBlur={e => e.target.style.borderColor = COLORS.border}
              />
              <button onClick={handleSubscribe} style={{
                background: COLORS.orange, color: "#fff",
                border: "none", borderRadius: "0 6px 6px 0",
                padding: "10px 16px", cursor: "pointer",
                fontFamily: FONTS.display, fontWeight: 700, fontSize: 13,
                transition: "background 0.2s",
              }}
                onMouseEnter={e => e.currentTarget.style.background = COLORS.orangeHover}
                onMouseLeave={e => e.currentTarget.style.background = COLORS.orange}
              >→</button>
            </div>
          )}

          {/* Hours */}
          <div style={{ marginTop: 24 }}>
            <div style={{
              fontFamily: FONTS.display, fontWeight: 700, fontSize: 12,
              letterSpacing: 2, color: COLORS.orange, textTransform: "uppercase", marginBottom: 10,
            }}>Working Hours</div>
            {[
              { day: "Monday – Friday", hours: "7:00 AM – 6:00 PM" },
              { day: "Saturday", hours: "8:00 AM – 4:00 PM" },
              { day: "Sunday", hours: "By Appointment" },
            ].map((h, i) => (
              <div key={i} style={{
                display: "flex", justifyContent: "space-between",
                marginBottom: 6, gap: 8,
              }}>
                <span style={{ fontFamily: FONTS.body, fontSize: 12, color: COLORS.steel }}>{h.day}</span>
                <span style={{ fontFamily: FONTS.body, fontSize: 12, color: COLORS.textPrimary, fontWeight: 500 }}>{h.hours}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{
        padding: "18px 6vw",
        background: "rgba(232,84,26,0.08)",
        display: "flex", justifyContent: "center",
      }}>
        <a
          href={`https://wa.me/${CONTACT.phone.replace(/\D/g, "")}?text=${encodeURIComponent("👋 Hi Vine Earthworks, I saw your footer offer and I’d like to learn more about your latest glass and earthworks services.")}`}
          target="_blank"
          rel="noreferrer noopener"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
            padding: "14px 22px",
            borderRadius: 999,
            background: "rgba(255,255,255,0.06)",
            border: `1px solid rgba(232,84,26,0.25)`,
            color: COLORS.orange,
            textDecoration: "none",
            fontFamily: FONTS.display,
            fontWeight: 700,
            fontSize: 13,
            letterSpacing: 1.2,
            transition: "all 0.2s",
          }}
          onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.12)"; }}
          onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.06)"; }}
        >
          🔔 Special Offer: Chat with us on WhatsApp for our latest brochure
        </a>
      </div>

      <div style={{
        padding: "20px 6vw",
        borderTop: `1px solid ${COLORS.border}`,
        display: "flex", justifyContent: "space-between",
        alignItems: "center", flexWrap: "wrap", gap: 12,
      }}>
        <p style={{ fontFamily: FONTS.body, fontSize: 13, color: COLORS.textMuted }}>
          © {new Date().getFullYear()} Vine Earthworks Glass & Aluminium Works. All rights reserved.
        </p>
        <div style={{ display: "flex", gap: 20 }}>
          {["Privacy Policy", "Terms of Service"].map(link => (
            <button key={link} style={{
              background: "none", border: "none", cursor: "pointer",
              fontFamily: FONTS.body, fontSize: 12, color: COLORS.textMuted,
              transition: "color 0.2s",
            }}
              onMouseEnter={e => e.currentTarget.style.color = COLORS.orange}
              onMouseLeave={e => e.currentTarget.style.color = COLORS.textMuted}
            >{link}</button>
          ))}
        </div>
        <p style={{ fontFamily: FONTS.body, fontSize: 13, color: COLORS.textMuted }}>
          Nairobi, Kenya &nbsp;|&nbsp;
          <a href={`tel:${CONTACT.phone}`} style={{ color: COLORS.orange, textDecoration: "none" }}>
            {CONTACT.phoneDisplay}
          </a>
        </p>
      </div>

      <div style={{ padding: '14px 6vw', background: '#02060f', borderTop: `1px solid ${COLORS.border}` }}>
        <marquee behavior="scroll" direction="left" scrollamount="6" style={{
          color: COLORS.orange,
          fontFamily: FONTS.display,
          fontSize: 14,
          letterSpacing: 1.5,
          textTransform: 'uppercase',
        }}>
          Thank you for being here — Vine Earthworks appreciates your visit.
        </marquee>
      </div>

      <style>{`
        @media (max-width: 1000px) { .footer-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 600px) { .footer-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </footer>
  );
}