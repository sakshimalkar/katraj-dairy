import { useState } from "react";
import { Link } from "react-router-dom";
import SectionIntro from "../components/SectionIntro";
import ProductCard from "../components/ProductCard";
import EnquiryModal from "../components/EnquiryModal";
import WaveDivider from "../components/WaveDivider";
import MilkPourArt from "../components/MilkPourArt";
import { products } from "../data/products";
import { store } from "../data/store";

const highlights = products.slice(0, 6);

const stats = [
  { value: "25+", label: "Years serving Dattawadi" },
  { value: "18", label: "Fresh products daily" },
  { value: "4.4★", label: "Rated by 110+ customers" },
];

const testimonials = [
  { name: "Priya Deshmukh", text: "The lassi tastes exactly like homemade — thick, fresh and never overly sweet. Our weekend staple now." },
  { name: "Rahul Kadam", text: "Their cow ghee has that real, slow-cooked aroma you just don't find in packaged brands anymore." },
  { name: "Sneha Joshi", text: "Paneer is always soft and fresh, even on a Sunday evening. Never disappoints." },
];

export default function Home() {
  const [enquireProduct, setEnquireProduct] = useState(null);

  return (
    <>
      {/* HERO */}
      <section
        className="position-relative overflow-hidden"
        style={{ paddingTop: "9.5rem", paddingBottom: "5rem", background: "linear-gradient(180deg, #FBF6EC 0%, #F1E8D8 100%)" }}
      >
        <div
          className="drop-float d-none d-lg-block"
          style={{ top: "18%", left: "6%", width: 90, height: 90, background: "var(--gold)" }}
        ></div>
        <div
          className="drop-float d-none d-lg-block"
          style={{ bottom: "10%", left: "18%", width: 50, height: 50, background: "var(--red)", animationDelay: "2s" }}
        ></div>

        <div className="container position-relative">
          <div className="row align-items-center gy-5">
            <div className="col-lg-6" data-aos="fade-right">
              <div className="pill-badge mb-3">
                <span className="dot-live"></span> Open now · Closes 11:30 pm
              </div>
              <span className="eyebrow">Fresh from Dattawadi, since generations</span>
              <h1 className="mt-2 mb-3" style={{ fontSize: "clamp(2.3rem, 5vw, 3.6rem)", lineHeight: 1.05 }}>
                Milk, <span className="text-brand-red">malai</span> &amp; memories,
                <br />
                poured fresh <span className="text-brand-red">Everyday</span> since morning.
              </h1>
              <p style={{ color: "var(--charcoal-soft)", fontSize: "1.1rem", maxWidth: 480 }}>
                From bilona-style ghee to hand-churned lassi — everything at{" "}
                <strong>{store.name}</strong> is made the way Dattawadi has always liked it:
                fresh, honest, and a little indulgent.
              </p>
              <div className="d-flex flex-wrap gap-3 mt-4">
                <Link to="/products" className="btn btn-brand">
                  Explore Our Menu <i className="bi bi-arrow-right ms-1"></i>
                </Link>
                <a
                  href={`https://wa.me/${store.waNumber}?text=${encodeURIComponent("Hi! I'd like to place an order.")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline-brand"
                >
                  <i className="bi bi-whatsapp me-1"></i> Order on WhatsApp
                </a>
              </div>

              <div className="d-flex flex-wrap gap-4 mt-5">
                {stats.map((s) => (
                  <div key={s.label}>
                    <div className="display-font fw-bold" style={{ fontSize: "1.7rem", color: "var(--indigo-deep)" }}>{s.value}</div>
                    <div style={{ fontSize: "0.82rem", color: "var(--charcoal-soft)" }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-lg-6" data-aos="fade-left">
              <MilkPourArt />
            </div>
          </div>
        </div>
      </section>

      <WaveDivider fill="#FFFFFF" />

      {/* WHY US */}
      <section className="section bg-white">
        <div className="container">
          <SectionIntro
            eyebrow="Why Dattawadi trusts us"
            title="Small parlour, uncompromising freshness"
            desc="Everything is sourced, set, or churned within the day — no long shelf lives, no shortcuts."
            align="center"
          />
          <div className="row g-4 mt-4">
            {[
              { icon: "bi-sunrise", title: "Delivered every morning", text: "Milk arrives before sunrise and is on the shelf within hours." },
              { icon: "bi-egg-fried", title: "Bilona-style ghee", text: "Slow-simmered the traditional way for real aroma and taste." },
              { icon: "bi-hand-thumbs-up", title: "110+ happy regulars", text: "Rated 4.4★ by neighbours who've been coming back for years." },
            ].map((f, i) => (
              <div className="col-md-4" key={f.title} data-aos="fade-up" data-aos-delay={i * 90}>
                <div className="card-brand h-100 p-4 text-center">
                  <div
                    className="mx-auto mb-3 d-flex align-items-center justify-content-center"
                    style={{ width: 64, height: 64, borderRadius: "50%", background: "var(--cream-deep)", color: "var(--red)", fontSize: "1.7rem" }}
                  >
                    <i className={`bi ${f.icon}`}></i>
                  </div>
                  <h3 className="h5">{f.title}</h3>
                  <p style={{ color: "var(--charcoal-soft)", fontSize: "0.94rem" }}>{f.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HIGHLIGHT PRODUCTS */}
      <section className="section bg-cream">
        <div className="container">
          <div className="d-flex flex-wrap justify-content-between align-items-end gap-3 mb-4">
            <SectionIntro
              eyebrow="Bestsellers"
              title="A taste of our menu"
              desc="A quick look at what regulars order most. See everything on our full menu."
            />
            <Link to="/products" className="btn btn-outline-brand" data-aos="fade-up">
              View full menu <i className="bi bi-grid ms-1"></i>
            </Link>
          </div>
          <div className="row g-4">
            {highlights.map((p, i) => (
              <div className="col-sm-6 col-lg-4" key={p.id}>
                <ProductCard product={p} index={i} onEnquire={setEnquireProduct} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider fill="#12294A" flip />

      {/* TESTIMONIALS */}
      <section className="section" style={{ background: "var(--indigo-deep)" }}>
        <div className="container">
          <SectionIntro
            eyebrow="Voices from Dattawadi"
            title="What our regulars say"
            align="center"
            light
          />
          <div className="row g-4 mt-4">
            {testimonials.map((t, i) => (
              <div className="col-md-4" key={t.name} data-aos="fade-up" data-aos-delay={i * 100}>
                <div
                  className="h-100 p-4"
                  style={{ background: "rgba(255,255,255,0.06)", borderRadius: "18px", border: "1px solid rgba(255,255,255,0.1)" }}
                >
                  <div style={{ color: "var(--gold-light)" }} className="mb-2">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-half"></i>
                  </div>
                  <p style={{ color: "#E7E2D6", fontStyle: "italic" }}>&ldquo;{t.text}&rdquo;</p>
                  <div className="fw-semibold" style={{ color: "#fff" }}>— {t.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="py-5" style={{ background: "linear-gradient(120deg, var(--red), var(--red-deep))" }}>
        <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between gap-3 text-center text-md-start">
          <div data-aos="fade-right">
            <h2 className="text-white mb-1" style={{ fontSize: "1.6rem" }}>Ready for fresh milk at your door?</h2>
            <p className="mb-0" style={{ color: "rgba(255,255,255,0.85)" }}>Message us on WhatsApp or drop by the Dattawadi shop today.</p>
          </div>
          <div className="d-flex gap-2" data-aos="fade-left">
            <Link to="/contact" className="btn btn-light fw-semibold" style={{ borderRadius: "999px" }}>
              Contact Us
            </Link>
            <a
              href={`https://wa.me/${store.waNumber}`}
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline-light fw-semibold"
              style={{ borderRadius: "999px" }}
            >
              <i className="bi bi-whatsapp me-1"></i> WhatsApp
            </a>
          </div>
        </div>
      </section>

      <EnquiryModal product={enquireProduct} onClose={() => setEnquireProduct(null)} />
    </>
  );
}
