import { useState } from "react";
import { COLORS, FONTS, CONTACT } from "../theme";

const SERVICES_LIST = [
  "Glass Supply", "Glass Fitting", "Aluminium Windows & Doors",
  "Stainless Staircases", "Balcony Systems", "Curtain Walls",
  "Frameless Doors", "Shower Cubicles", "Excavation & Dumping",
  "Supply of Building Materials", "Bush Clearing", "Road Grading",
  "Trench Digging", "Excavator Breaker",
];

const INFO_CARDS = [
  { icon: "📞", label: "Phone / WhatsApp", value: CONTACT.phoneDisplay, href: `tel:${CONTACT.phone}`, cta: "Call Now" },
  { icon: "✉️", label: "Email Address", value: CONTACT.email, href: `mailto:${CONTACT.email}`, cta: "Send Email" },
  { icon: "📍", label: "Location", value: CONTACT.location, href: "#", cta: "View Map" },
  { icon: "🕐", label: "Working Hours", value: "Mon–Sat: 7:00 AM – 6:00 PM\nSun: By Appointment", href: null, cta: null },
];

function InputField({ label, type = "text", id, placeholder, value, onChange }) {
  const [focused, setFocused] = useState(false);
  return (
    <div style={{ marginBottom: 20 }}>
      <label style={{
        display: "block", fontFamily: FONTS.display, fontWeight: 700,
        fontSize: 12, letterSpacing: 2, textTransform: "uppercase",
        color: focused ? COLORS.orange : COLORS.steel, marginBottom: 8,
        transition: "color 0.2s",
      }}>{label}</label>
      <input
        type={type} id={id} name={id} placeholder={placeholder}
        value={value} onChange={onChange}
        onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
        style={{
          width: "100%",
          background: focused ? "rgba(232,84,26,0.04)" : "rgba(255,255,255,0.04)",
          border: `1px solid ${focused ? COLORS.orange : COLORS.border}`,
          borderRadius: 8, padding: "13px 16px",
          color: COLORS.textPrimary, fontFamily: FONTS.body, fontSize: 14,
          outline: "none", transition: "all 0.2s",
        }}
      />
    </div>
  );
}

function TextAreaField({ label, id, placeholder, value, onChange }) {
  const [focused, setFocused] = useState(false);
  return (
    <div style={{ marginBottom: 20 }}>
      <label style={{
        display: "block", fontFamily: FONTS.display, fontWeight: 700,
        fontSize: 12, letterSpacing: 2, textTransform: "uppercase",
        color: focused ? COLORS.orange : COLORS.steel, marginBottom: 8,
        transition: "color 0.2s",
      }}>{label}</label>
      <textarea
        id={id} name={id} placeholder={placeholder} value={value} onChange={onChange}
        onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
        rows={5}
        style={{
          width: "100%", resize: "vertical",
          background: focused ? "rgba(232,84,26,0.04)" : "rgba(255,255,255,0.04)",
          border: `1px solid ${focused ? COLORS.orange : COLORS.border}`,
          borderRadius: 8, padding: "13px 16px",
          color: COLORS.textPrimary, fontFamily: FONTS.body, fontSize: 14,
          outline: "none", transition: "all 0.2s",
          minHeight: 120,
        }}
      />
    </div>
  );
}

function SelectField({ label, id, value, onChange, options }) {
  const [focused, setFocused] = useState(false);
  return (
    <div style={{ marginBottom: 20 }}>
      <label style={{
        display: "block", fontFamily: FONTS.display, fontWeight: 700,
        fontSize: 12, letterSpacing: 2, textTransform: "uppercase",
        color: focused ? COLORS.orange : COLORS.steel, marginBottom: 8, transition: "color 0.2s",
      }}>{label}</label>
      <select
        id={id} name={id} value={value} onChange={onChange}
        onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
        style={{
          width: "100%",
          background: focused ? "rgba(232,84,26,0.04)" : "#0F1929",
          border: `1px solid ${focused ? COLORS.orange : COLORS.border}`,
          borderRadius: 8, padding: "13px 16px",
          color: value ? COLORS.textPrimary : COLORS.steel,
          fontFamily: FONTS.body, fontSize: 14,
          outline: "none", transition: "all 0.2s", cursor: "pointer",
        }}
      >
        <option value="">Select a service...</option>
        {options.map(o => <option key={o} value={o} style={{ background: "#0F1929" }}>{o}</option>)}
      </select>
    </div>
  );
}

export default function ContactPage() {
  const [form, setForm] = useState({ fname: "", lname: "", email: "", phone: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const formAction = `https://formsubmit.co/${encodeURIComponent(CONTACT.email)}`;
  const nextUrl = typeof window !== "undefined" ? `${window.location.origin}/contact` : "/contact";

  const set = (key) => (e) => setForm(f => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e) => {
    if (!form.email || !form.message) {
      e.preventDefault();
      alert("Please enter your email and a message before sending.");
      return;
    }

    setSending(true);
  };

  return (
    <div style={{
      background: COLORS.dark, minHeight: "100vh",
      paddingTop: 100, paddingBottom: 80,
    }}>
      {/* Page Header */}
      <div style={{
        textAlign: "center", padding: "0 6vw 60px",
        background: `linear-gradient(180deg, ${COLORS.navyLight} 0%, ${COLORS.dark} 100%)`,
        position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
          width: 600, height: 300,
          background: `radial-gradient(ellipse, rgba(232,84,26,0.08) 0%, transparent 70%)`,
          pointerEvents: "none",
        }} />
        <div style={{
          fontFamily: FONTS.display, fontWeight: 700, fontSize: 12,
          letterSpacing: 4, color: COLORS.orange, textTransform: "uppercase", marginBottom: 8,
        }}>Let's Talk</div>
        <h1 style={{
          fontFamily: FONTS.display, fontWeight: 900,
          fontSize: "clamp(38px,6vw,80px)",
          textTransform: "uppercase", color: COLORS.textPrimary,
          lineHeight: 0.95, marginBottom: 16,
        }}>Get In Touch</h1>
        <div style={{ width: 56, height: 4, background: COLORS.orange, borderRadius: 2, margin: "0 auto 16px" }} />
        <p style={{
          fontFamily: FONTS.body, fontSize: 16, color: COLORS.steel,
          maxWidth: 520, margin: "0 auto", lineHeight: 1.7,
        }}>
          Ready to start your project? Reach out and our team will respond with a detailed quote within 24 hours.
        </p>
      </div>

      {/* Info cards */}
      <div style={{
        padding: "0 6vw 60px",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: 16,
      }}>
        {INFO_CARDS.map((card, i) => (
          <div key={i} style={{
            background: COLORS.darkCard,
            border: `1px solid ${COLORS.border}`,
            borderRadius: 12, padding: "24px 22px",
            display: "flex", flexDirection: "column", gap: 10,
            transition: "all 0.3s",
            animation: `fadeUp 0.5s ease ${i * 0.1}s both`,
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = COLORS.orange; e.currentTarget.style.transform = "translateY(-4px)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = COLORS.border; e.currentTarget.style.transform = "none"; }}
          >
            <div style={{
              width: 48, height: 48, borderRadius: 10, fontSize: 22,
              background: "rgba(232,84,26,0.1)", border: `1px solid rgba(232,84,26,0.2)`,
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>{card.icon}</div>
            <div style={{
              fontFamily: FONTS.display, fontWeight: 700, fontSize: 12,
              letterSpacing: 2, color: COLORS.orange, textTransform: "uppercase",
            }}>{card.label}</div>
            <div style={{
              fontFamily: FONTS.body, fontSize: 14, color: COLORS.steel,
              lineHeight: 1.6, whiteSpace: "pre-line",
            }}>{card.value}</div>
            {card.href && card.cta && (
              <a href={card.href} target={card.href.startsWith("mailto:") ? "_blank" : undefined} rel="noreferrer noopener" style={{
                marginTop: 4, fontFamily: FONTS.display, fontWeight: 700,
                fontSize: 13, color: COLORS.orange, textDecoration: "none",
                letterSpacing: 1, display: "flex", alignItems: "center", gap: 4,
              }}>
                {card.cta} →
              </a>
            )}
          </div>
        ))}
      </div>

      {/* Form section */}
      <div style={{
        padding: "0 6vw",
        display: "grid", gridTemplateColumns: "1fr 1.2fr",
        gap: "6vw", alignItems: "start",
      }} className="contact-grid">

        {/* Left: info + social */}
        <div>
          <h3 style={{
            fontFamily: FONTS.display, fontWeight: 900, fontSize: "clamp(24px,3vw,40px)",
            textTransform: "uppercase", color: COLORS.textPrimary, marginBottom: 16,
          }}>
            We're Here<br />
            <em style={{ color: COLORS.orange, fontStyle: "normal" }}>To Help</em>
          </h3>
          <div style={{ width: 48, height: 3, background: COLORS.orange, borderRadius: 2, marginBottom: 20 }} />
          <p style={{ fontFamily: FONTS.body, fontSize: 14, color: COLORS.steel, lineHeight: 1.75, marginBottom: 32 }}>
            Whether you need a frameless shower cubicle, a full curtain wall system, or a site to be excavated — we have the team and equipment to make it happen.
          </p>

          {/* WhatsApp CTA */}
          <a href={`https://wa.me/${CONTACT.phone.replace(/\D/g, "")}?text=${encodeURIComponent("👋 Hello from Vine Earthworks! I’m interested in your services. Please send me your brochure and more details on your offers.")}`} target="_blank" rel="noreferrer noopener" style={{
            display: "flex", alignItems: "center", gap: 14,
            background: "rgba(37,211,102,0.1)", border: "1px solid rgba(37,211,102,0.3)",
            borderRadius: 10, padding: "16px 20px", textDecoration: "none",
            marginBottom: 24, transition: "all 0.25s",
          }}
            onMouseEnter={e => e.currentTarget.style.background = "rgba(37,211,102,0.18)"}
            onMouseLeave={e => e.currentTarget.style.background = "rgba(37,211,102,0.1)"}
          >
            <span style={{ fontSize: 28 }}>💬</span>
            <div>
              <div style={{ fontFamily: FONTS.display, fontWeight: 700, fontSize: 15, color: "#25D366" }}>
                WhatsApp Us Now
              </div>
              <div style={{ fontFamily: FONTS.body, fontSize: 13, color: COLORS.steel }}>
                {CONTACT.phoneDisplay} — Fast responses guaranteed
              </div>
            </div>
          </a>

          {/* Social */}
          <div style={{
            background: COLORS.darkCard, border: `1px solid ${COLORS.border}`,
            borderRadius: 10, padding: "20px",
          }}>
            <div style={{
              fontFamily: FONTS.display, fontWeight: 700, fontSize: 13,
              letterSpacing: 2, color: COLORS.steel, textTransform: "uppercase", marginBottom: 12,
            }}>Follow Us</div>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              {[
                { label: "Facebook", icon: "f", href: CONTACT.facebook, color: "#1877F2" },
                { label: "LinkedIn", icon: "in", href: "#", color: "#0A66C2" },
              ].map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer" style={{
                  display: "flex", alignItems: "center", gap: 8,
                  background: "rgba(255,255,255,0.05)", border: `1px solid ${COLORS.border}`,
                  borderRadius: 6, padding: "8px 16px", textDecoration: "none",
                  transition: "all 0.2s",
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = s.color; e.currentTarget.style.background = `${s.color}18`; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = COLORS.border; e.currentTarget.style.background = "rgba(255,255,255,0.05)"; }}
                >
                  <span style={{ fontFamily: FONTS.display, fontWeight: 900, fontSize: 13, color: s.color }}>{s.icon}</span>
                  <span style={{ fontFamily: FONTS.body, fontSize: 13, color: COLORS.steel }}>{s.label}</span>
                </a>
              ))}
            </div>
            <div style={{ marginTop: 10, fontFamily: FONTS.body, fontSize: 12, color: COLORS.textMuted }}>
              {CONTACT.social}
            </div>
          </div>
        </div>

        {/* Right: form */}
        <form
          action={formAction}
          method="POST"
          onSubmit={handleSubmit}
          style={{
            background: COLORS.darkCard, border: `1px solid ${COLORS.border}`,
            borderRadius: 16, padding: "36px",
            boxShadow: "0 24px 60px rgba(0,0,0,0.3)",
          }}
        >
          <input type="hidden" name="_next" value={nextUrl} />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_subject" value="New contact from Vine Earthworks website" />
          <input type="hidden" name="_replyto" value={form.email || CONTACT.email} />
          {submitted ? (
            <div style={{ textAlign: "center", padding: "40px 0" }}>
              <div style={{ fontSize: 56, marginBottom: 16 }}>✅</div>
              <h3 style={{
                fontFamily: FONTS.display, fontWeight: 900, fontSize: 28,
                color: "#4CAF50", textTransform: "uppercase", marginBottom: 12,
              }}>Message Sent!</h3>
              <p style={{ fontFamily: FONTS.body, color: COLORS.steel, lineHeight: 1.6 }}>
                Thank you for reaching out. Our team will contact you within 24 hours with a detailed quote.
              </p>
              <button onClick={() => { setSubmitted(false); setForm({ fname: "", lname: "", email: "", phone: "", service: "", message: "" }); }} style={{
                marginTop: 24, background: "transparent", border: `1px solid ${COLORS.border}`,
                color: COLORS.steel, padding: "10px 24px", borderRadius: 6,
                fontFamily: FONTS.display, fontWeight: 700, fontSize: 14,
                cursor: "pointer", transition: "all 0.2s",
              }}>Send Another Message</button>
            </div>
          ) : (
            <>
              <h3 style={{
                fontFamily: FONTS.display, fontWeight: 900, fontSize: 24,
                color: COLORS.textPrimary, marginBottom: 6,
              }}>Send Us a Message</h3>
              <p style={{ fontFamily: FONTS.body, fontSize: 13, color: COLORS.steel, marginBottom: 28 }}>
                Fill in the form and we'll get back to you with a free quote.
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 16px" }}>
                <InputField label="First Name" id="fname" placeholder="John" value={form.fname} onChange={set("fname")} />
                <InputField label="Last Name" id="lname" placeholder="Doe" value={form.lname} onChange={set("lname")} />
              </div>
              <InputField label="Email" type="email" id="email" placeholder="your@email.com" value={form.email} onChange={set("email")} />
              <InputField label="Phone / WhatsApp" type="tel" id="phone" placeholder="+254 7XX XXX XXX" value={form.phone} onChange={set("phone")} />
              <SelectField label="Service Required" id="service" value={form.service} onChange={set("service")} options={SERVICES_LIST} />
              <TextAreaField label="Project Details" id="message" placeholder="Tell us about your project — location, size, timeline..." value={form.message} onChange={set("message")} />

              <button type="submit" disabled={sending} style={{
                width: "100%", background: sending ? COLORS.orangeHover : COLORS.orange,
                color: "#fff", border: "none", padding: "16px", borderRadius: 8,
                fontFamily: FONTS.display, fontWeight: 800, fontSize: 18,
                letterSpacing: 1.5, textTransform: "uppercase", cursor: "pointer",
                boxShadow: `0 8px 28px rgba(232,84,26,0.4)`,
                transition: "all 0.25s",
                display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
              }}
                onMouseEnter={e => { if (!sending) e.currentTarget.style.background = COLORS.orangeHover; }}
                onMouseLeave={e => { if (!sending) e.currentTarget.style.background = COLORS.orange; }}
              >
                {sending ? (
                  <>
                    <span style={{
                      width: 18, height: 18, border: "3px solid rgba(255,255,255,0.3)",
                      borderTopColor: "#fff", borderRadius: "50%",
                      display: "inline-block", animation: "spin 0.8s linear infinite",
                    }} />
                    Sending...
                  </>
                ) : "Send Message →"}
              </button>
            </>
          )}
        </form>
      </div>

      <style>{`
        @keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: none; } }
        @keyframes spin { to { transform: rotate(360deg); } }
        @media (max-width: 800px) { .contact-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  );
}