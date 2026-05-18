import { useState, useRef, useEffect } from "react";
import { COLORS, FONTS } from "../theme";

const GALLERY_ITEMS = [
  { title: "Curtain Wall Facade", subtitle: "Commercial glazing project, Nairobi CBD", category: "Glass", img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=700&q=80", span: "tall" },
  { title: "Excavation & Site Prep", subtitle: "Large-scale earthmoving, Thika Road", category: "Earthworks", img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=700&q=80", span: "wide" },
  { title: "Frameless Glass Door", subtitle: "Office entrance, Westlands", category: "Glass", img: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=400&q=80" },
  { title: "Aluminium Windows", subtitle: "Residential installation, Karen", category: "Aluminium", img: "https://images.unsplash.com/photo-1448630360428-65456885c650?w=400&q=80" },
  { title: "Shower Cubicle", subtitle: "Luxury bathroom, Kilimani", category: "Glass", img: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400&q=80" },
  { title: "Road Grading", subtitle: "Access road, Ngong", category: "Earthworks", img: "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?w=700&q=80", span: "wide" },
  { title: "Glass Balcony", subtitle: "Residential estate, Runda", category: "Glass", img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&q=80" },
  { title: "Stainless Staircase", subtitle: "Commercial complex, Upper Hill", category: "Metalwork", img: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=400&q=80" },
];

const CATEGORIES = ["All", "Glass", "Aluminium", "Earthworks", "Metalwork"];

const CATEGORY_COLORS = {
  Glass: "#3B82F6", Aluminium: "#8B5CF6",
  Earthworks: COLORS.orange, Metalwork: "#10B981",
};

function GalleryCard({ item, index }) {
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const isWide = item.span === "wide";
  const isTall = item.span === "tall";

  return (
    <div ref={ref} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{
        gridColumn: isWide ? "span 2" : "span 1",
        gridRow: isTall ? "span 2" : "span 1",
        borderRadius: 12, overflow: "hidden",
        position: "relative", cursor: "pointer",
        transform: visible ? "translateY(0)" : "translateY(30px)",
        opacity: visible ? 1 : 0,
        transition: `all 0.5s ease ${index * 0.06}s`,
        boxShadow: hovered ? `0 24px 60px rgba(0,0,0,0.5)` : "0 4px 20px rgba(0,0,0,0.3)",
        minHeight: isTall ? 480 : isWide ? 260 : 240,
      }}>

      {/* Background image */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: `url(${item.img})`,
        backgroundSize: "cover", backgroundPosition: "center",
        filter: `brightness(${hovered ? 0.65 : 0.45})`,
        transform: hovered ? "scale(1.08)" : "scale(1)",
        transition: "all 0.6s ease",
      }} />

      {/* Gradient */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)",
      }} />

      {/* Category badge */}
      <div style={{
        position: "absolute", top: 14, left: 14,
        background: CATEGORY_COLORS[item.category] || COLORS.orange,
        color: "#fff", fontFamily: FONTS.display, fontWeight: 700,
        fontSize: 11, letterSpacing: 1.5, textTransform: "uppercase",
        padding: "4px 12px", borderRadius: 20,
        opacity: hovered ? 1 : 0.85,
        transition: "opacity 0.3s",
      }}>{item.category}</div>

      {/* Content */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, padding: "24px 20px",
        transform: hovered ? "translateY(0)" : "translateY(8px)",
        transition: "transform 0.35s ease",
      }}>
        <h4 style={{
          fontFamily: FONTS.display, fontWeight: 800, fontSize: "clamp(18px,2vw,22px)",
          textTransform: "uppercase", color: "#fff", marginBottom: 4, lineHeight: 1.1,
        }}>{item.title}</h4>
        <p style={{
          fontFamily: FONTS.body, fontSize: 13, color: "rgba(255,255,255,0.7)",
          opacity: hovered ? 1 : 0, transition: "opacity 0.3s ease 0.1s",
          marginTop: 6,
        }}>{item.subtitle}</p>
        <div style={{
          marginTop: 10, display: "flex", alignItems: "center", gap: 6,
          color: COLORS.orange, fontFamily: FONTS.display, fontWeight: 700, fontSize: 13,
          opacity: hovered ? 1 : 0, transition: "opacity 0.3s ease 0.15s",
        }}>
          <span style={{
            display: "inline-block", width: 24, height: 2,
            background: COLORS.orange, marginRight: 4,
          }} />
          View Project
        </div>
      </div>

      {/* Hover border */}
      <div style={{
        position: "absolute", inset: 0,
        border: `2px solid ${hovered ? COLORS.orange : "transparent"}`,
        borderRadius: 12, transition: "border-color 0.3s",
        pointerEvents: "none",
      }} />
    </div>
  );
}

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const filtered = activeCategory === "All"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(i => i.category === activeCategory);

  return (
    <div id="gallery" style={{ background: "#090F1C", padding: "80px 5vw" }}>
      {/* Header */}
      <div style={{ marginBottom: 48 }}>
        <div style={{
          fontFamily: FONTS.display, fontWeight: 700, fontSize: 12,
          letterSpacing: 4, color: COLORS.orange, textTransform: "uppercase", marginBottom: 8,
        }}>Portfolio</div>
        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "flex-end",
          flexWrap: "wrap", gap: 24,
        }}>
          <h2 style={{
            fontFamily: FONTS.display, fontWeight: 900,
            fontSize: "clamp(34px,5vw,62px)",
            textTransform: "uppercase", color: COLORS.textPrimary,
            lineHeight: 0.95,
          }}>Project<br />Gallery</h2>
          {/* Filter pills */}
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {CATEGORIES.map(cat => (
              <button key={cat} onClick={() => setActiveCategory(cat)} style={{
                background: activeCategory === cat ? COLORS.orange : "transparent",
                color: activeCategory === cat ? "#fff" : COLORS.steel,
                border: `1px solid ${activeCategory === cat ? COLORS.orange : COLORS.border}`,
                padding: "8px 18px", borderRadius: 6, cursor: "pointer",
                fontFamily: FONTS.display, fontWeight: 700, fontSize: 13,
                letterSpacing: 1, textTransform: "uppercase",
                transition: "all 0.2s",
              }}
                onMouseEnter={e => { if (activeCategory !== cat) { e.currentTarget.style.borderColor = COLORS.orange; e.currentTarget.style.color = "#fff"; } }}
                onMouseLeave={e => { if (activeCategory !== cat) { e.currentTarget.style.borderColor = COLORS.border; e.currentTarget.style.color = COLORS.steel; } }}
              >{cat}</button>
            ))}
          </div>
        </div>
        <div style={{ width: 56, height: 4, background: COLORS.orange, borderRadius: 2, marginTop: 16 }} />
      </div>

      {/* Grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gridAutoRows: "240px",
        gap: 14,
      }}>
        {filtered.map((item, i) => (
          <GalleryCard key={`${activeCategory}-${i}`} item={item} index={i} />
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .gallery-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 500px) {
          .gallery-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}