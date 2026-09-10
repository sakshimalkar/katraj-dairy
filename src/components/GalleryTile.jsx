import { useState } from "react";

export default function GalleryTile({ icon, title, gradient, img, big = false, index = 0 }) {
  const [imgFailed, setImgFailed] = useState(false);
  const showImg = img && !imgFailed;

  return (
    <div
      className={`position-relative overflow-hidden hover-lift ${big ? "h-100" : ""}`}
      data-aos="zoom-in"
      data-aos-delay={(index % 4) * 70}
      style={{
        borderRadius: "18px",
        minHeight: big ? 320 : 220,
        background: showImg ? "var(--cream-deep)" : gradient,
        boxShadow: "var(--shadow-card)",
      }}
    >
      {showImg && (
        <img
          src={img}
          alt={title}
          loading="lazy"
          onError={() => setImgFailed(true)}
          className="position-absolute w-100 h-100"
          style={{ inset: 0, objectFit: "cover", objectPosition: "center" }}
        />
      )}

      {!showImg && (
        <div
          className="position-absolute w-100 h-100 d-flex flex-column align-items-center justify-content-center text-center p-3"
          style={{ color: "#fff" }}
        >
          <i className={`bi ${icon}`} style={{ fontSize: big ? "3.4rem" : "2.4rem", opacity: 0.95 }}></i>
          <span className="fw-semibold mt-2" style={{ fontSize: big ? "1.15rem" : "0.95rem" }}>
            {title}
          </span>
        </div>
      )}

      {/* Darkening gradient + title caption, shown for both image and icon tiles */}
      <div
        className="position-absolute"
        style={{
          inset: 0,
          background: "linear-gradient(180deg, rgba(0,0,0,0) 45%, rgba(0,0,0,0.55) 100%)",
        }}
      ></div>
      {showImg && (
        <span
          className="position-absolute fw-semibold"
          style={{ left: "1rem", bottom: "0.85rem", color: "#fff", fontSize: big ? "1.1rem" : "0.92rem" }}
        >
          {title}
        </span>
      )}
    </div>
  );
}
