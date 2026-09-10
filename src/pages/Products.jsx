import { useState } from "react";
import SectionIntro from "../components/SectionIntro";
import ProductCard from "../components/ProductCard";
import EnquiryModal from "../components/EnquiryModal";
import { products, categories } from "../data/products";
import { store } from "../data/store";

export default function Products() {
  const [active, setActive] = useState("all");
  const [enquireProduct, setEnquireProduct] = useState(null);

  const filtered = active === "all" ? products : products.filter((p) => p.category === active);

  return (
    <>
      <section
        className="position-relative"
        style={{ paddingTop: "9rem", paddingBottom: "3rem", background: "linear-gradient(180deg,#FBF6EC,#F1E8D8)" }}
      >
        <div className="container">
          <SectionIntro
            eyebrow="Our full menu"
            title="Everything on the Katraj shelf"
            desc="18 products, made fresh through the day — tap any card to enquire about price and availability."
            align="center"
          />
        </div>
      </section>

      <section className="section bg-white pt-0">
        <div className="container">
          {/* Category filter pills */}
          <div className="d-flex flex-wrap justify-content-center gap-2 mb-5" data-aos="fade-up">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setActive(c.id)}
                className="btn btn-sm"
                style={{
                  borderRadius: "999px",
                  padding: "0.5rem 1.15rem",
                  fontWeight: 600,
                  border: active === c.id ? "none" : "1.5px solid var(--line)",
                  background: active === c.id ? "var(--red)" : "transparent",
                  color: active === c.id ? "#fff" : "var(--charcoal)",
                  transition: "all 0.25s ease",
                }}
              >
                {c.label}
              </button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-5">
              <i className="bi bi-emoji-frown" style={{ fontSize: "2.5rem", color: "var(--charcoal-soft)" }}></i>
              <p className="mt-3" style={{ color: "var(--charcoal-soft)" }}>No products in this category yet.</p>
            </div>
          ) : (
            <div className="row g-4">
              {filtered.map((p, i) => (
                <div className="col-sm-6 col-lg-4" key={p.id}>
                  <ProductCard product={p} index={i} onEnquire={setEnquireProduct} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-5" style={{ background: "linear-gradient(120deg, var(--red), var(--red-deep))" }}>
        <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between gap-3 text-center text-md-start">
          <div data-aos="fade-right">
            <h2 className="text-white mb-1" style={{ fontSize: "1.5rem" }}>Can't find what you're looking for?</h2>
            <p className="mb-0" style={{ color: "rgba(255,255,255,0.85)" }}>Message us — we usually have more than what's listed.</p>
          </div>
          <a
            href={`https://wa.me/${store.waNumber}?text=${encodeURIComponent("Hi! Do you have...")}`}
            target="_blank"
            rel="noreferrer"
            className="btn btn-light fw-semibold"
            style={{ borderRadius: "999px" }}
            data-aos="fade-left"
          >
            <i className="bi bi-whatsapp me-1"></i> Ask on WhatsApp
          </a>
        </div>
      </section>

      <EnquiryModal product={enquireProduct} onClose={() => setEnquireProduct(null)} />
    </>
  );
}
