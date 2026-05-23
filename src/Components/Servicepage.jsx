import { useState, useEffect, useRef } from "react";
import { COLORS, FONTS } from "../theme";

const GLASS_SERVICES = [
  { num: "01", title: "Glass Supply", tag: "Supply & Delivery", desc: "Bulk glass sheets in all specifications supplied and delivered directly to your construction site. Float, tempered, laminated, and tinted glass available.", img: "/Glass%20supply.jpg" },
  { num: "02", title: "Glass Fitting", tag: "Installation", desc: "Expert technicians installing glass panes with precision, safety, and care. We handle residential, commercial, and industrial glazing projects.", img: "/Glassfitting.jpg" },
  { num: "03", title: "Aluminium Windows & Doors", tag: "Fabrication", desc: "Custom-fabricated aluminium window frames, sliding doors, casement windows and bi-fold systems — built to last with modern aesthetics.", img: "/Alumiun%20glass%20door.jpg" },
  { num: "04", title: "Stainless Staircases", tag: "Metalwork", desc: "Stainless steel staircase systems, handrails, balustrades and cable railing — combining structural strength with sleek, modern design.", img: "/stainless%20staircase.jpg" },
  { num: "05", title: "Balcony Systems", tag: "Construction", desc: "Design and build of glass balcony railings, Juliet balconies, and full enclosure systems for modern residential and commercial buildings.", img: "/Glass%20BALCONY.jpg" },
  { num: "06", title: "Curtain Walls", tag: "Commercial", desc: "Full glass curtain wall facade systems for commercial buildings — maximizing natural light while delivering architectural impact.", img: "/Glass%20%20installations.jpg" },
  { num: "07", title: "Frameless Doors", tag: "Design", desc: "Stylish frameless glass entrance doors for offices, retail shops, hotels, and upscale homes that make a lasting first impression.", img: "/FRAMELESS%20DOOR.jpg" },
  { num: "08", title: "Shower Cubicles", tag: "Bathroom", desc: "Frameless and semi-frameless shower enclosures — clean, watertight, and beautifully designed for modern bathroom spaces.", img: "/showercubicles.jpg" },
];

function ServiceCard({ service, index, pdfHref }) {
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? COLORS.navyLight : COLORS.darkCard,
        border: `1px solid ${hovered ? COLORS.orange : COLORS.border}`,
        borderRadius: 12, overflow: "hidden",
        transform: visible ? (hovered ? "translateY(-8px)" : "translateY(0)") : "translateY(40px)",
        opacity: visible ? 1 : 0,
        transition: `all 0.5s ease ${index * 0.07}s`,
        boxShadow: hovered ? `0 20px 60px rgba(232,84,26,0.2)` : "none",
        cursor: "pointer",
      }}>
      {/* Image */}
      <div style={{ height: 190, overflow: "hidden", position: "relative" }}>
        <div style={{
          width: "100%", height: "100%",
          backgroundImage: `url(${service.img})`,
          backgroundSize: "cover", backgroundPosition: "center",
          filter: `brightness(${hovered ? 0.75 : 0.5})`,
          transform: hovered ? "scale(1.08)" : "scale(1)",
          transition: "all 0.5s ease",
        }} />
        {/* Number badge */}
        <div style={{
          position: "absolute", top: 14, left: 14,
          background: COLORS.orange, color: "#fff",
          fontFamily: FONTS.display, fontWeight: 900, fontSize: 13,
          padding: "4px 10px", borderRadius: 4,
          letterSpacing: 1,
        }}>{service.num}</div>
        {/* Tag */}
        <div style={{
          position: "absolute", top: 14, right: 14,
          background: "rgba(0,0,0,0.6)",
          backdropFilter: "blur(8px)",
          border: `1px solid ${COLORS.border}`,
          color: COLORS.steel,
          fontFamily: FONTS.body, fontWeight: 500, fontSize: 11,
          padding: "4px 10px", borderRadius: 20,
          letterSpacing: 1, textTransform: "uppercase",
        }}>{service.tag}</div>
      </div>
      {/* Body */}
      <div style={{ padding: "20px 22px 24px" }}>
        <h3 style={{
          fontFamily: FONTS.display, fontWeight: 800, fontSize: 20,
          textTransform: "uppercase", color: COLORS.textPrimary,
          marginBottom: 10, letterSpacing: 0.5,
          transition: "color 0.2s",
          ...(hovered ? { color: "#fff" } : {}),
        }}>{service.title}</h3>
        <p style={{
          fontFamily: FONTS.body, fontSize: 14, color: COLORS.steel,
          lineHeight: 1.65,
        }}>{service.desc}</p>
        <div style={{
          marginTop: 16, display: "flex", alignItems: "center", gap: 6,
          color: COLORS.orange, fontFamily: FONTS.display, fontWeight: 700,
          fontSize: 13, letterSpacing: 1,
          opacity: hovered ? 1 : 0, transform: hovered ? "translateX(0)" : "translateX(-8px)",
          transition: "all 0.3s",
        }}>
          <a
            href={pdfHref}
            target="_blank"
            rel="noreferrer noopener"
            style={{
              color: COLORS.orange,
              textDecoration: "none",
            }}
          >
            Learn More →
          </a>
        </div>
      </div>
    </div>
  );
}

export default function ServicesPage({ onNavigate }) {
  const [activeTab, setActiveTab] = useState("glass");

  const EARTH_SERVICES = [
    { num: "01", title: "Excavation & Dumping", tag: "Heavy Plant", desc: "Hydraulic excavators for deep excavation, material loading, site preparation, and controlled dumping. All soil types handled.", img: "/earthmoving.jpg" },
    { num: "02", title: "Supply of Building Materials", tag: "Materials", desc: "Quality sand, ballast, hardcore, and aggregates sourced and delivered to your site. Bulk orders available at competitive rates.", img: "/Supply%20of%20building%20materials.jpg" },
    { num: "03", title: "Bush Clearing", tag: "Land Prep", desc: "Bulldozer-powered vegetation clearing, tree removal, and raw land site preparation for construction and development projects.", img: "/Bush%20claering.jpg" },
    { num: "04", title: "Road Grading", tag: "Roads", desc: "Levelling and smoothing of earth and dirt roads using motor graders — making surfaces flat, compact, and motorable.", img: "/RoadGrading.jpg" },
    { num: "05", title: "Trench Digging", tag: "Excavation", desc: "Precision narrow bucket excavation for trenches, utility conduits, drainage channels, and foundation footings.", img: "/Trench%20digging.jpg" },
    { num: "06", title: "Excavator Breaker", tag: "Demolition", desc: "Hydraulic breaker attachments for breaking boulders, reinforced concrete slabs, and hard rocky ground on construction sites.", img: "/escavation%20breaker.jpg" },
  ];

  const PDF_DOWNLOADS = {
    glass: {
      href: "/VineEarthworks_Glass_Aluminium_Catalog.pdf",
      label: "Download Glass & Aluminium Brochure",
      download: true,
    },
    earth: {
      href: "/VineEarthworks_Earthworks_Catalog.pdf",
      label: "Download Earthworks Brochure",
      download: true,
    },
  };

  const services = activeTab === "glass" ? GLASS_SERVICES : EARTH_SERVICES;

  return (
    <div style={{ background: COLORS.dark, paddingBottom: 80 }}>
      {/* Section Header */}
      <div style={{
        padding: "80px 6vw 0",
        display: "flex", justifyContent: "space-between",
        alignItems: "flex-end", flexWrap: "wrap", gap: 32, marginBottom: 48,
      }}>
        <div>
          <div style={{
            fontFamily: FONTS.display, fontWeight: 700, fontSize: 12,
            letterSpacing: 4, color: COLORS.orange, textTransform: "uppercase",
            marginBottom: 8,
          }}>What We Do</div>
          <h2 style={{
            fontFamily: FONTS.display, fontWeight: 900,
            fontSize: "clamp(36px,5vw,64px)",
            textTransform: "uppercase", color: COLORS.textPrimary,
            lineHeight: 0.95,
          }}>Our Services</h2>
          <div style={{
            width: 56, height: 4, background: COLORS.orange,
            borderRadius: 2, marginTop: 16,
          }} />
        </div>

        {/* Tab switcher */}
        <div style={{
          display: "flex", gap: 0,
          background: COLORS.darkCard, border: `1px solid ${COLORS.border}`,
          borderRadius: 8, overflow: "hidden",
        }}>
          {[
            { key: "glass", label: "🔲 Glass Works" },
            { key: "earth", label: "🚜 Earthworks" },
          ].map(tab => (
            <button key={tab.key} onClick={() => setActiveTab(tab.key)} style={{
              background: activeTab === tab.key ? COLORS.orange : "transparent",
              color: activeTab === tab.key ? "#fff" : COLORS.steel,
              border: "none", padding: "12px 28px", cursor: "pointer",
              fontFamily: FONTS.display, fontWeight: 700, fontSize: 15,
              letterSpacing: 1, textTransform: "uppercase",
              transition: "all 0.25s",
            }}>
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div style={{
        margin: "0 6vw 32px",
        padding: "24px 28px",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 16,
        background: COLORS.darkCard,
        border: `1px solid ${COLORS.border}`,
        borderRadius: 16,
      }}>
        <div style={{ maxWidth: 660, minWidth: 0 }}>
          <div style={{
            fontFamily: FONTS.display,
            fontWeight: 700,
            fontSize: 14,
            letterSpacing: 0.8,
            color: COLORS.orange,
            textTransform: "uppercase",
            marginBottom: 10,
          }}>
            Download our brochure
          </div>
          <p style={{
            fontFamily: FONTS.body,
            fontSize: 14,
            lineHeight: 1.7,
            color: COLORS.steel,
            margin: 0,
          }}>
            View or save a detailed PDF with scope, project examples, and service highlights for the current section.
          </p>
        </div>
        <a
          href={PDF_DOWNLOADS[activeTab].href}
          download
          target="_blank"
          rel="noreferrer noopener"
          style={{
            background: COLORS.orange,
            color: "#fff",
            padding: "14px 28px",
            borderRadius: 999,
            textDecoration: "none",
            fontFamily: FONTS.display,
            fontWeight: 800,
            fontSize: 14,
            letterSpacing: 0.8,
            whiteSpace: "normal",
            maxWidth: "100%",
          }}
        >
          {PDF_DOWNLOADS[activeTab].label}
        </a>
      </div>

      {/* Grid */}
      <div style={{
        padding: "0 6vw",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        gap: 24,
      }}>
        {services.map((s, i) => (
          <ServiceCard key={`${activeTab}-${i}`} service={s} index={i} pdfHref={PDF_DOWNLOADS[activeTab].href} />
        ))}
      </div>

      {/* CTA Banner */}
      <div style={{
        margin: "60px 6vw 0",
        background: `linear-gradient(135deg, ${COLORS.navyLight} 0%, ${COLORS.navy} 100%)`,
        border: `1px solid rgba(232,84,26,0.3)`,
        borderRadius: 16, padding: "48px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        flexWrap: "wrap", gap: 24,
        position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", right: -60, top: -60,
          width: 280, height: 280, borderRadius: "50%",
          background: `radial-gradient(circle, rgba(232,84,26,0.12) 0%, transparent 70%)`,
        }} />
        <div>
          <h3 style={{
            fontFamily: FONTS.display, fontWeight: 900, fontSize: "clamp(24px,3vw,38px)",
            color: "#fff", textTransform: "uppercase",
          }}>Ready to Start Your Project?</h3>
          <p style={{ fontFamily: FONTS.body, color: COLORS.steel, fontSize: 15, marginTop: 8 }}>
            Get a free consultation and quote from our team today.
          </p>
        </div>
        <button onClick={() => { onNavigate("contact"); window.scrollTo({ top: 0 }); }} style={{
          background: COLORS.orange, color: "#fff", border: "none",
          padding: "16px 40px", borderRadius: 8, cursor: "pointer",
          fontFamily: FONTS.display, fontWeight: 800, fontSize: 18,
          letterSpacing: 1.5, textTransform: "uppercase",
          boxShadow: `0 8px 32px rgba(232,84,26,0.4)`,
          transition: "all 0.25s", whiteSpace: "nowrap",
        }}
          onMouseEnter={e => { e.currentTarget.style.background = COLORS.orangeHover; e.currentTarget.style.transform = "translateY(-2px)"; }}
          onMouseLeave={e => { e.currentTarget.style.background = COLORS.orange; e.currentTarget.style.transform = "none"; }}
        >
          Get Free Quote →
        </button>
      </div>
    </div>
  );
}