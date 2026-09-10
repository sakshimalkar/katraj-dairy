export default function ProductCard({ product, onEnquire, index = 0 }) {
  return (
    <div
      className="card-brand h-100 p-4 position-relative overflow-hidden"
      data-aos="fade-up"
      data-aos-delay={(index % 3) * 80}
    >
      <div
        className="d-flex align-items-center justify-content-center mb-3"
        style={{
          width: 56,
          height: 56,
          borderRadius: "16px",
          background: "linear-gradient(135deg, var(--cream-deep), var(--cream))",
          color: "var(--red)",
          fontSize: "1.5rem",
        }}
      >
        <i className={`bi ${product.icon}`}></i>
      </div>

      <span
        className="position-absolute top-0 end-0 m-3 pill-badge"
        style={{ fontSize: "0.7rem", padding: "0.3rem 0.7rem" }}
      >
        {product.tag}
      </span>

      <h3 className="h5 mb-1" style={{ color: "var(--indigo-deep)" }}>{product.name}</h3>
      <div className="font-dev mb-2" style={{ color: "var(--red)", fontWeight: 600 }}>{product.nameDev}</div>
      <p style={{ color: "var(--charcoal-soft)", fontSize: "0.92rem" }}>{product.desc}</p>

      <button
        onClick={() => onEnquire(product)}
        className="btn btn-outline-brand btn-sm mt-2 align-self-start"
      >
        <i className="bi bi-chat-dots me-1"></i> Enquire
      </button>
    </div>
  );
}
