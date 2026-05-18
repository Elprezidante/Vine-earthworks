import { useState, useRef, useEffect } from "react";
import { COLORS, FONTS, CONTACT } from "../theme";

const QUICK_REPLIES = [
  { label: "🔲 Glass services", text: "Tell me about your glass services" },
  { label: "🚜 Earthworks", text: "What earthmoving services do you offer?" },
  { label: "💰 Get a quote", text: "I'd like to get a quote" },
  { label: "📞 Contact info", text: "What are your contact details?" },
  { label: "🚿 Shower cubicles", text: "Tell me about shower cubicles" },
  { label: "🏗️ Curtain walls", text: "Do you install curtain walls?" },
];

const KB = [
  {
    keys: ["glass supply", "glass sheet", "deliver", "supply glass"],
    reply: `🔲 **Glass Supply & Delivery**\n\nWe supply all types of glass sheets including float, tempered, laminated, and tinted glass — delivered directly to your site.\n\n📞 Call us: **${CONTACT.phoneDisplay}**`,
  },
  {
    keys: ["glass fit", "install glass", "fitting", "glaz"],
    reply: `🔧 **Glass Fitting & Installation**\n\nOur expert technicians handle professional glass installation for residential, commercial, and industrial projects — safety-first, every time.\n\n📞 ${CONTACT.phoneDisplay}`,
  },
  {
    keys: ["aluminium", "aluminum", "window", "sliding door", "casement"],
    reply: `🪟 **Aluminium Windows & Doors**\n\nWe fabricate and install:\n• Casement & awning windows\n• Sliding & bi-fold doors\n• Custom aluminium frames\n• Commercial partitions\n\n📞 ${CONTACT.phoneDisplay}`,
  },
  {
    keys: ["staircase", "handrail", "balustrade", "stainless steel"],
    reply: `🪜 **Stainless Staircases & Balustrades**\n\nWe design and fabricate stainless steel staircases, handrails, cable railings, and balustrades — structurally strong and elegantly finished.\n\n📞 ${CONTACT.phoneDisplay}`,
  },
  {
    keys: ["balcony", "railing"],
    reply: `🏙️ **Balcony Glass Systems**\n\nWe build glass balcony railings, Juliet balconies, and full enclosures for modern residential and commercial buildings.\n\n📞 ${CONTACT.phoneDisplay}`,
  },
  {
    keys: ["curtain wall", "facade", "commercial glass"],
    reply: `🏢 **Curtain Walls**\n\nFull glass curtain wall facade systems for commercial buildings — maximizing natural light and architectural impact.\n\n📞 ${CONTACT.phoneDisplay}`,
  },
  {
    keys: ["frameless door", "glass door", "office door", "entrance"],
    reply: `🚪 **Frameless Doors**\n\nStylish frameless glass entrance doors for offices, retail shops, hotels, and luxury homes.\n\n📞 ${CONTACT.phoneDisplay}`,
  },
  {
    keys: ["shower", "cubicle", "bathroom", "enclosure"],
    reply: `🚿 **Shower Cubicles**\n\nWe install frameless and semi-frameless shower enclosures — clean, watertight, and beautifully designed.\n\n📞 ${CONTACT.phoneDisplay}`,
  },
  {
    keys: ["excavat", "dumping", "dig", "earthmov"],
    reply: `🚜 **Excavation & Dumping**\n\nHydraulic excavators for:\n• Deep site excavation\n• Material loading & dumping\n• Foundation digging\n• All soil types handled\n\n📞 ${CONTACT.phoneDisplay}`,
  },
  {
    keys: ["sand", "ballast", "hardcore", "building material", "aggregate"],
    reply: `📦 **Building Materials Supply**\n\nWe supply quality sand, ballast, hardcore, and aggregates — delivered to your site. Bulk orders welcome.\n\n📞 ${CONTACT.phoneDisplay}`,
  },
  {
    keys: ["bush clear", "vegetation", "land clear", "raw land"],
    reply: `🌿 **Bush Clearing**\n\nBulldozer-powered vegetation clearing, tree removal, and raw land site preparation for any construction project.\n\n📞 ${CONTACT.phoneDisplay}`,
  },
  {
    keys: ["road grad", "level", "smooth road", "dirt road"],
    reply: `🛣️ **Road Grading**\n\nWe level and smooth earth and dirt roads using motor graders — making surfaces flat, compact, and motorable.\n\n📞 ${CONTACT.phoneDisplay}`,
  },
  {
    keys: ["trench", "trench dig", "utility", "drainage"],
    reply: `⛏️ **Trench Digging**\n\nPrecision narrow bucket excavation for:\n• Utility conduits\n• Drainage channels\n• Foundation footings\n\n📞 ${CONTACT.phoneDisplay}`,
  },
  {
    keys: ["breaker", "rock break", "concrete break", "demolit"],
    reply: `💥 **Excavator Breaker**\n\nHydraulic breaker attachments for breaking boulders, reinforced concrete slabs, and hard rocky ground on site.\n\n📞 ${CONTACT.phoneDisplay}`,
  },
  {
    keys: ["quote", "price", "cost", "how much", "rate", "charge", "pricing", "estimate"],
    reply: `💰 **Get a Free Quote**\n\nFor a free, no-obligation quote:\n\n📞 Call/WhatsApp: **${CONTACT.phoneDisplay}**\n✉️ Email: **${CONTACT.email}**\n\nOr use our Contact page and we'll respond within 24 hours!`,
  },
  {
    keys: ["contact", "phone", "email", "address", "location", "reach", "call", "whatsapp", "nairobi", "where"],
    reply: `📞 **Contact Vine Earthworks**\n\n📱 Phone/WhatsApp: **${CONTACT.phoneDisplay}**\n✉️ Email: **${CONTACT.email}**\n📍 Location: ${CONTACT.location}\n🌐 Social: ${CONTACT.social}\n\n⏰ Mon–Sat: 7AM–6PM`,
  },
  {
    keys: ["glass service", "glass work", "what glass", "glass option"],
    reply: `🔲 **Glass & Aluminium Services:**\n\n1. Glass Supply & Delivery\n2. Glass Fitting & Installation\n3. Aluminium Windows & Doors\n4. Stainless Staircases\n5. Balcony Glass Systems\n6. Curtain Walls\n7. Frameless Doors\n8. Shower Cubicles\n\nAsk me about any of these! 📞 ${CONTACT.phoneDisplay}`,
  },
  {
    keys: ["earthwork", "earth service", "what earth", "heavy", "machine", "plant"],
    reply: `🚜 **Earthmoving Services:**\n\n1. Excavation & Dumping\n2. Supply of Building Materials\n3. Bush Clearing\n4. Road Grading\n5. Trench Digging\n6. Excavator Breaker\n\nAsk me about any of these! 📞 ${CONTACT.phoneDisplay}`,
  },
  {
    keys: ["hi", "hello", "hey", "halo", "good morning", "good afternoon", "jambo", "habari"],
    reply: `👋 **Hello! Welcome to Vine Earthworks!**\n\nI'm your virtual assistant and I can help you with:\n\n🔲 Glass & Aluminium services\n🚜 Earthmoving services\n💰 Quotes & pricing\n📞 Contact details\n\nWhat can I help you with today?`,
  },
  {
    keys: ["who are you", "about vine", "about company", "what do you do"],
    reply: `🏗️ **About Vine Earthworks**\n\nWe are a Nairobi-based construction company with 10+ years of experience specialising in:\n\n✅ Professional Glass & Aluminium Works\n✅ Heavy-duty Earthmoving Services\n\n📍 Based in Nairobi, serving Kenya-wide.\n📞 ${CONTACT.phoneDisplay}`,
  },
];

function getBotReply(msg) {
  const m = msg.toLowerCase();
  for (const entry of KB) {
    if (entry.keys.some(k => m.includes(k))) return entry.reply;
  }
  return `🤔 **I'm not sure about that.**\n\nFor specific information, please reach out directly:\n\n📞 **${CONTACT.phoneDisplay}**\n✉️ ${CONTACT.email}\n\nOr try asking about: glass services, earthworks, quotes, or contact details.`;
}

function formatMsg(text) {
  return text
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\n/g, "<br/>");
}

export default function Chatbot({ onNavigate }) {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "👋 **Hello!** Welcome to **Vine Earthworks**.\n\nI can help you with glass services, earthmoving, quotes, and more. What would you like to know?" },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [showQuick, setShowQuick] = useState(true);
  const [pulse, setPulse] = useState(false);
  const msgsRef = useRef();
  const inputRef = useRef();

  useEffect(() => {
    if (msgsRef.current) msgsRef.current.scrollTop = msgsRef.current.scrollHeight;
  }, [messages, typing]);

  useEffect(() => {
    const openTimer = setTimeout(() => setOpen(true), 800);
    const pulseTimer = setTimeout(() => setPulse(false), 4000);
    return () => {
      clearTimeout(openTimer);
      clearTimeout(pulseTimer);
    };
  }, []);

  const send = (text) => {
    const userMsg = text || input.trim();
    if (!userMsg) return;
    setInput("");
    setShowQuick(false);
    setMessages(m => [...m, { from: "user", text: userMsg }]);
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages(m => [...m, { from: "bot", text: getBotReply(userMsg) }]);
    }, 900 + Math.random() * 500);
  };

  return (
    <>
      {/* Floating toggle */}
      <button onClick={() => setOpen(o => !o)} style={{
        position: "fixed", bottom: 28, right: 28, zIndex: 1100,
        width: 62, height: 62, borderRadius: "50%",
        background: open ? COLORS.navyLight : COLORS.orange,
        border: `2px solid ${open ? COLORS.border : COLORS.orange}`,
        color: "#fff", fontSize: 26, cursor: "pointer",
        boxShadow: open ? "0 4px 20px rgba(0,0,0,0.3)" : `0 8px 32px rgba(232,84,26,0.6)`,
        transition: "all 0.3s cubic-bezier(.34,1.56,.64,1)",
        display: "flex", alignItems: "center", justifyContent: "center",
        transform: open ? "rotate(180deg)" : "scale(1)",
      }} aria-label="Chat with us">
        {open ? "✕" : "💬"}
      </button>

      {/* Pulse badge */}
      {!open && pulse && (
        <div style={{
          position: "fixed", bottom: 80, right: 20, zIndex: 1099,
          background: COLORS.dark, border: `1px solid ${COLORS.border}`,
          borderRadius: 10, padding: "10px 14px",
          fontFamily: FONTS.body, fontSize: 13, color: COLORS.textPrimary,
          boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
          animation: "fadeUp 0.4s ease",
          whiteSpace: "nowrap",
        }}>
          👋 Chat with us!
          <div style={{
            position: "absolute", bottom: -6, right: 24,
            width: 12, height: 12, background: COLORS.dark,
            border: `1px solid ${COLORS.border}`, borderTop: "none", borderLeft: "none",
            transform: "rotate(45deg)",
          }} />
        </div>
      )}

      {/* Chat panel */}
      <div style={{
        position: "fixed", bottom: 100, right: 28, zIndex: 1099,
        width: 380, maxHeight: 600,
        background: COLORS.dark, border: `1px solid rgba(232,84,26,0.25)`,
        borderRadius: 18, overflow: "hidden",
        boxShadow: "0 24px 80px rgba(0,0,0,0.7)",
        display: "flex", flexDirection: "column",
        transform: open ? "scale(1) translateY(0)" : "scale(0.9) translateY(20px)",
        opacity: open ? 1 : 0,
        pointerEvents: open ? "all" : "none",
        transition: "all 0.35s cubic-bezier(.34,1.56,.64,1)",
        transformOrigin: "bottom right",
      }}>

        {/* Header */}
        <div style={{
          background: `linear-gradient(135deg, ${COLORS.navy} 0%, ${COLORS.navyLight} 60%, rgba(232,84,26,0.3) 100%)`,
          padding: "16px 20px",
          display: "flex", alignItems: "center", gap: 12,
          borderBottom: `1px solid rgba(255,255,255,0.06)`,
        }}>
          <div style={{
            width: 44, height: 44, borderRadius: "50%",
            background: "rgba(255,255,255,0.1)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 22, border: `2px solid rgba(232,84,26,0.5)`,
          }}>🏗️</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: FONTS.display, fontWeight: 800, fontSize: 16, color: "#fff" }}>
              Vine Assistant
            </div>
            <div style={{ fontFamily: FONTS.body, fontSize: 12, color: "rgba(255,255,255,0.6)", display: "flex", alignItems: "center", gap: 5 }}>
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#4CAF50", display: "inline-block" }} />
              Online · Usually replies instantly
            </div>
          </div>
          <a href={`tel:${CONTACT.phone}`} style={{
            background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)",
            borderRadius: 6, padding: "6px 12px",
            fontFamily: FONTS.display, fontWeight: 700, fontSize: 12,
            color: "#fff", textDecoration: "none", letterSpacing: 0.5,
            transition: "all 0.2s",
          }}
            onMouseEnter={e => e.currentTarget.style.background = COLORS.orange}
            onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.1)"}
          >📞 Call</a>
        </div>

        {/* Messages */}
        <div ref={msgsRef} style={{
          flex: 1, overflowY: "auto", padding: "16px",
          display: "flex", flexDirection: "column", gap: 12,
          scrollbarWidth: "thin", scrollbarColor: "rgba(255,255,255,0.1) transparent",
        }}>
          {messages.map((msg, i) => (
            <div key={i} style={{
              display: "flex",
              justifyContent: msg.from === "user" ? "flex-end" : "flex-start",
              animation: "fadeUp 0.25s ease",
            }}>
              {msg.from === "bot" && (
                <div style={{
                  width: 28, height: 28, borderRadius: "50%", flexShrink: 0,
                  background: COLORS.orange, display: "flex", alignItems: "center",
                  justifyContent: "center", fontSize: 14, marginRight: 8, marginTop: 2,
                }}>🏗</div>
              )}
              <div style={{
                maxWidth: "78%",
                background: msg.from === "user"
                  ? `linear-gradient(135deg, ${COLORS.orange}, ${COLORS.orangeHover})`
                  : "rgba(255,255,255,0.07)",
                border: msg.from === "bot" ? `1px solid ${COLORS.border}` : "none",
                borderRadius: msg.from === "user" ? "14px 14px 4px 14px" : "4px 14px 14px 14px",
                padding: "10px 14px",
                fontFamily: FONTS.body, fontSize: 13.5, lineHeight: 1.55,
                color: msg.from === "user" ? "#fff" : COLORS.textPrimary,
              }} dangerouslySetInnerHTML={{ __html: formatMsg(msg.text) }} />
            </div>
          ))}

          {/* Typing indicator */}
          {typing && (
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{
                width: 28, height: 28, borderRadius: "50%",
                background: COLORS.orange, display: "flex", alignItems: "center",
                justifyContent: "center", fontSize: 14, flexShrink: 0,
              }}>🏗</div>
              <div style={{
                background: "rgba(255,255,255,0.07)", border: `1px solid ${COLORS.border}`,
                borderRadius: "4px 14px 14px 14px",
                padding: "12px 16px", display: "flex", gap: 4, alignItems: "center",
              }}>
                {[0, 1, 2].map(i => (
                  <span key={i} style={{
                    width: 6, height: 6, borderRadius: "50%",
                    background: COLORS.steel, display: "block",
                    animation: `bounce 0.9s ease ${i * 0.2}s infinite`,
                  }} />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Quick replies */}
        {showQuick && (
          <div style={{
            padding: "4px 12px 12px",
            display: "flex", flexWrap: "wrap", gap: 6,
          }}>
            {QUICK_REPLIES.map((q, i) => (
              <button key={i} onClick={() => send(q.text)} style={{
                background: "rgba(232,84,26,0.1)", border: `1px solid rgba(232,84,26,0.25)`,
                color: "#E8A07A", padding: "6px 12px", borderRadius: 20,
                fontFamily: FONTS.body, fontSize: 12, cursor: "pointer",
                transition: "all 0.2s", whiteSpace: "nowrap",
              }}
                onMouseEnter={e => { e.currentTarget.style.background = COLORS.orange; e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = COLORS.orange; }}
                onMouseLeave={e => { e.currentTarget.style.background = "rgba(232,84,26,0.1)"; e.currentTarget.style.color = "#E8A07A"; e.currentTarget.style.borderColor = "rgba(232,84,26,0.25)"; }}
              >{q.label}</button>
            ))}
          </div>
        )}

        {/* Input */}
        <div style={{
          padding: "12px 14px",
          borderTop: `1px solid ${COLORS.border}`,
          display: "flex", gap: 8,
          background: "rgba(0,0,0,0.2)",
        }}>
          <input
            ref={inputRef}
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === "Enter" && send()}
            placeholder="Type a message..."
            style={{
              flex: 1, background: "rgba(255,255,255,0.05)",
              border: `1px solid ${COLORS.border}`,
              borderRadius: 24, padding: "10px 16px",
              color: COLORS.textPrimary, fontFamily: FONTS.body, fontSize: 13.5,
              outline: "none",
            }}
            onFocus={e => e.target.style.borderColor = COLORS.orange}
            onBlur={e => e.target.style.borderColor = COLORS.border}
          />
          <button onClick={() => send()} style={{
            width: 42, height: 42, borderRadius: "50%",
            background: COLORS.orange, border: "none", color: "#fff",
            fontSize: 16, cursor: "pointer", flexShrink: 0,
            display: "flex", alignItems: "center", justifyContent: "center",
            transition: "all 0.2s",
          }}
            onMouseEnter={e => e.currentTarget.style.background = COLORS.orangeHover}
            onMouseLeave={e => e.currentTarget.style.background = COLORS.orange}
          >➤</button>
        </div>
      </div>

      <style>{`
        @keyframes fadeUp { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }
        @keyframes bounce { 0%, 60%, 100% { transform: translateY(0); } 30% { transform: translateY(-5px); } }
        @media (max-width: 440px) { 
          div[style*="width: 380px"] { width: calc(100vw - 32px) !important; right: 16px !important; }
        }
      `}</style>
    </>
  );
}