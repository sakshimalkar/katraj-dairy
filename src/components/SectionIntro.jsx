export default function SectionIntro({ eyebrow, title, desc, align = "start", light = false }) {
  return (
    <div
      className={`d-flex flex-column ${align === "center" ? "align-items-center text-center mx-auto" : ""}`}
      style={align === "center" ? { maxWidth: 620 } : {}}
      data-aos="fade-up"
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="mt-2 mb-0" style={{ fontSize: "clamp(1.8rem, 3.2vw, 2.6rem)", color: light ? "#fff" : "var(--indigo-deep)" }}>
        {title}
      </h2>
      <div className="section-divider" style={align === "center" ? { marginInline: "auto" } : {}}></div>
      {desc && (
        <p style={{ color: light ? "#D9D3C4" : "var(--charcoal-soft)", fontSize: "1.05rem", maxWidth: 560 }}>
          {desc}
        </p>
      )}
    </div>
  );
}
