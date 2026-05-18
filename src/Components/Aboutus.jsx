import { useRef, useEffect, useState } from "react";
import { COLORS, FONTS } from "../theme";

const FEATURES = [
  { icon: "🏗️", title: "10+ Years Experience", desc: "Over a decade delivering quality glass, aluminium, and earthmoving services across Kenya." },
  { icon: "⚙️", title: "Modern Equipment", desc: "State-of-the-art heavy plant machinery and precision glass-fitting tools." },
  { icon: "✅", title: "Certified Professionals", desc: "Our technicians and machine operators are fully trained and certified." },
  { icon: "📍", title: "Kenya-Wide Service", desc: "Headquartered in Nairobi, we serve residential and commercial clients across Kenya." },
  { icon: "💰", title: "Competitive Pricing", desc: "Transparent quotes with no hidden costs. Quality you can afford." },
  { icon: "🤝", title: "Client-First Approach", desc: "We listen, plan, and deliver exactly what you need — on time, every time." },
];

const TEAM = [
  { name: "Operations", role: "Earthmoving Division", icon: "🚜" },
  { name: "Installations", role: "Glass & Aluminium Division", icon: "🔲" },
  { name: "Procurement", role: "Materials Supply", icon: "📦" },
  { name: "Client Relations", role: "Customer Service", icon: "🤝" },
];

function CountUp({ end, suffix = "", duration = 2000 }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started) setStarted(true);
    }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const step = Math.ceil(end / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [started, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

function FeatureCard({ f, index }) {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? COLORS.navyLight : COLORS.darkCard,
        border: `1px solid ${hovered ? COLORS.orange : COLORS.border}`,
        borderRadius: 12, padding: "28px 24px",
        transform: visible ? "translateY(0)" : "translateY(30px)",
        opacity: visible ? 1 : 0,
        transition: `all 0.5s ease ${index * 0.1}s`,
        boxShadow: hovered ? `0 16px 48px rgba(232,84,26,0.15)` : "none",
        display: "flex", flexDirection: "column", gap: 12,
      }}>
      <div style={{
        width: 52, height: 52, borderRadius: 10,
        background: hovered ? `rgba(232,84,26,0.2)` : "rgba(255,255,255,0.04)",
        border: `1px solid ${hovered ? "rgba(232,84,26,0.4)" : COLORS.border}`,
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: 24, transition: "all 0.3s",
      }}>{f.icon}</div>
      <h4 style={{
        fontFamily: FONTS.display, fontWeight: 800, fontSize: 18,
        color: COLORS.textPrimary, textTransform: "uppercase", letterSpacing: 0.5,
      }}>{f.title}</h4>
      <p style={{ fontFamily: FONTS.body, fontSize: 14, color: COLORS.steel, lineHeight: 1.65 }}>
        {f.desc}
      </p>
    </div>
  );
}

export default function AboutPage({ onNavigate }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div id="about" style={{ background: COLORS.dark }}>

      {/* Hero split */}
      <div style={{
        padding: "80px 6vw",
        display: "grid", gridTemplateColumns: "1fr 1fr",
        gap: "6vw", alignItems: "center",
      }} className="about-grid" ref={ref}>

        {/* Image mosaic */}
        <div style={{ position: "relative", height: 500 }}>
          <div style={{
            position: "absolute", right: 0, bottom: 0,
            width: "72%", height: "80%",
            backgroundImage: "url(https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80)",
            backgroundSize: "cover", backgroundPosition: "center",
            borderRadius: 14,
            border: `3px solid ${COLORS.orange}`,
            boxShadow: `0 24px 60px rgba(0,0,0,0.5)`,
            transform: visible ? "translateX(0)" : "translateX(40px)",
            opacity: visible ? 1 : 0,
            transition: "all 0.8s ease 0.2s",
          }} />
          <div style={{
            position: "absolute", left: 0, top: 0,
            width: "55%", height: "58%",
            backgroundImage: "url(https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&q=80)",
            backgroundSize: "cover", backgroundPosition: "center",
            borderRadius: 14,
            boxShadow: `0 24px 60px rgba(0,0,0,0.6)`,
            border: `2px solid ${COLORS.border}`,
            transform: visible ? "translateX(0)" : "translateX(-40px)",
            opacity: visible ? 1 : 0,
            transition: "all 0.8s ease 0.1s",
          }} />
          {/* Badge */}
          <div style={{
            position: "absolute", bottom: 28, left: 24, zIndex: 2,
            background: COLORS.orange,
            borderRadius: 10, padding: "18px 22px",
            textAlign: "center",
            boxShadow: `0 12px 36px rgba(232,84,26,0.5)`,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            opacity: visible ? 1 : 0,
            transition: "all 0.8s ease 0.4s",
          }}>
            <div style={{
              fontFamily: FONTS.display, fontWeight: 900, fontSize: 36,
              color: "#fff", lineHeight: 1,
            }}>10+</div>
            <div style={{
              fontFamily: FONTS.body, fontWeight: 500, fontSize: 12,
              color: "rgba(255,255,255,0.85)", letterSpacing: 1.5, textTransform: "uppercase",
            }}>Years of<br />Excellence</div>
          </div>
          {/* Decorative ring */}
          <div style={{
            position: "absolute", top: -20, right: -20,
            width: 120, height: 120, borderRadius: "50%",
            border: `2px dashed rgba(232,84,26,0.3)`,
            animation: "spin 20s linear infinite",
          }} />
        </div>

        {/* Text content */}
        <div style={{
          transform: visible ? "translateX(0)" : "translateX(40px)",
          opacity: visible ? 1 : 0,
          transition: "all 0.8s ease 0.3s",
        }}>
          <div style={{
            fontFamily: FONTS.display, fontWeight: 700, fontSize: 12,
            letterSpacing: 4, color: COLORS.orange, textTransform: "uppercase", marginBottom: 8,
          }}>About Us</div>
          <h2 style={{
            fontFamily: FONTS.display, fontWeight: 900,
            fontSize: "clamp(34px,4vw,58px)",
            textTransform: "uppercase", color: COLORS.textPrimary,
            lineHeight: 0.95, marginBottom: 20,
          }}>
            Reliability You<br />
            <em style={{ color: COLORS.orange, fontStyle: "normal" }}>Can Build On</em>
          </h2>
          <div style={{ width: 56, height: 4, background: COLORS.orange, borderRadius: 2, marginBottom: 24 }} />
          <p style={{
            fontFamily: FONTS.body, fontSize: 15, color: COLORS.steel,
            lineHeight: 1.8, marginBottom: 16,
          }}>
            Vine Earthworks is a Nairobi-based construction company specialising in professional glass and aluminium installations as well as heavy-duty earthmoving services.
          </p>
          <p style={{
            fontFamily: FONTS.body, fontSize: 15, color: COLORS.steel,
            lineHeight: 1.8, marginBottom: 32,
          }}>
            We combine technical excellence with modern equipment to deliver projects on time and within budget — from frameless shower cubicles to full curtain wall systems, from road grading to deep excavations.
          </p>

          {/* Stats row */}
          <div style={{ display: "flex", gap: 32, marginBottom: 32, flexWrap: "wrap" }}>
            {[
              { val: 500, suffix: "+", label: "Projects" },
              { val: 10, suffix: "+", label: "Years" },
              { val: 8, suffix: "", label: "Services" },
            ].map((s, i) => (
              <div key={i}>
                <div style={{
                  fontFamily: FONTS.display, fontWeight: 900, fontSize: 38,
                  color: COLORS.orange, lineHeight: 1,
                }}>
                  <CountUp end={s.val} suffix={s.suffix} />
                </div>
                <div style={{
                  fontFamily: FONTS.body, fontSize: 12, color: COLORS.steel,
                  letterSpacing: 2, textTransform: "uppercase", marginTop: 4,
                }}>{s.label}</div>
              </div>
            ))}
          </div>

          <button onClick={() => { onNavigate("contact"); window.scrollTo({ top: 0 }); }} style={{
            background: COLORS.orange, color: "#fff", border: "none",
            padding: "14px 34px", borderRadius: 6, cursor: "pointer",
            fontFamily: FONTS.display, fontWeight: 800, fontSize: 16,
            letterSpacing: 1.5, textTransform: "uppercase",
            boxShadow: `0 8px 28px rgba(232,84,26,0.4)`,
            transition: "all 0.25s",
          }}
            onMouseEnter={e => { e.currentTarget.style.background = COLORS.orangeHover; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = COLORS.orange; e.currentTarget.style.transform = "none"; }}
          >
            Work With Us →
          </button>
        </div>
      </div>

      {/* Why Choose Us */}
      <div style={{ padding: "0 6vw 80px" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <div style={{
            fontFamily: FONTS.display, fontWeight: 700, fontSize: 12,
            letterSpacing: 4, color: COLORS.orange, textTransform: "uppercase", marginBottom: 8,
          }}>Why Us</div>
          <h3 style={{
            fontFamily: FONTS.display, fontWeight: 900,
            fontSize: "clamp(28px,4vw,48px)",
            textTransform: "uppercase", color: COLORS.textPrimary,
          }}>Why Choose Vine Earthworks</h3>
        </div>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: 20,
        }}>
          {FEATURES.map((f, i) => <FeatureCard key={i} f={f} index={i} />)}
        </div>
      </div>

      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @media (max-width: 800px) { .about-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  );
}