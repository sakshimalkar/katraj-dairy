import SectionIntro from "../components/SectionIntro";
import WaveDivider from "../components/WaveDivider";
import { Link } from "react-router-dom";

const values = [
  { icon: "bi-droplet-fill", title: "No shortcuts", text: "Milk is never held over — what doesn't sell fresh, doesn't sell." },
  { icon: "bi-heart-fill", title: "Made like home", text: "Ghee, lassi and shrikhand are prepared the way our own families make them." },
  { icon: "bi-people-fill", title: "Neighbourhood first", text: "We know most of our customers by name — Dattawadi is home." },
];

const timeline = [
  { step: "Before sunrise", title: "Milk arrives", text: "Fresh milk reaches the parlour and is tested for quality before anything else happens." },
  { step: "Morning", title: "Churning & setting", text: "Curd is set, buttermilk is churned, and cream is skimmed by hand." },
  { step: "Midday", title: "Ghee simmers slow", text: "Our ghee is cooked low and slow, bilona-style, for real aroma." },
  { step: "Evening", title: "Fresh on the shelf", text: "Lassi, shrikhand and paneer are ready for the evening rush — same day, always." },
];

export default function About() {
  return (
    <>
      <section className="position-relative" style={{ paddingTop: "9rem", paddingBottom: "4rem", background: "linear-gradient(180deg,#FBF6EC,#F1E8D8)" }}>
        <div className="container">
          <div className="row align-items-center gy-4">
            <div className="col-lg-7" data-aos="fade-right">
              <span className="eyebrow">Our story</span>
              <h1 className="mt-2" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
                A Dattawadi parlour, run the old-fashioned way
              </h1>
              <p style={{ color: "var(--charcoal-soft)", fontSize: "1.08rem" }}>
                Katraj Milk Parlour started as a single milk counter on Dattawadi Road,
                serving neighbours who wanted milk they could trust. Word travelled fast —
                today, the same counter serves lassi, ghee, paneer and shrikhand to a
                community that has grown up on it. The recipe for staying small and
                dependable hasn't changed: fresh stock, honest measure, and a shopkeeper
                who remembers your order.
              </p>
              <div className="d-flex gap-4 mt-4 flex-wrap">
                <div>
                  <div className="fw-bold" style={{ fontSize: "1.6rem", color: "var(--red)" }}>4.4★</div>
                  <div style={{ fontSize: "0.85rem", color: "var(--charcoal-soft)" }}>110+ Google reviews</div>
                </div>
                <div>
                  <div className="fw-bold" style={{ fontSize: "1.6rem", color: "var(--red)" }}>18</div>
                  <div style={{ fontSize: "0.85rem", color: "var(--charcoal-soft)" }}>Products made fresh daily</div>
                </div>
              </div>
            </div>
            <div className="col-lg-5" data-aos="fade-left">
              <div
                className="p-4"
                style={{ background: "var(--indigo-deep)", borderRadius: "22px", boxShadow: "var(--shadow-soft)" }}
              >
                <div className="font-dev text-center" style={{ color: "var(--gold-light)", fontSize: "2.4rem", fontWeight: 700 }}>
                  कात्रज़
                </div>
                <p className="text-center mb-0" style={{ color: "#D9D3C4", fontStyle: "italic" }}>
                  "मिल्क प्रोडक्ट्स, फ्रेश हॅन्डमेड पार्लर"
                </p>
                <hr style={{ borderColor: "rgba(255,255,255,0.15)" }} />
                <ul className="list-unstyled d-flex flex-column gap-2 mb-0" style={{ color: "#E7E2D6", fontSize: "0.92rem" }}>
                  <li><i className="bi bi-check2-circle me-2" style={{ color: "var(--gold-light)" }}></i>Milk sourced &amp; sold same day</li>
                  <li><i className="bi bi-check2-circle me-2" style={{ color: "var(--gold-light)" }}></i>Ghee cooked bilona-style</li>
                  <li><i className="bi bi-check2-circle me-2" style={{ color: "var(--gold-light)" }}></i>Paneer cut fresh to order</li>
                  <li><i className="bi bi-check2-circle me-2" style={{ color: "var(--gold-light)" }}></i>Family-run since day one</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WaveDivider fill="#FFFFFF" />

      <section className="section bg-white">
        <div className="container">
          <SectionIntro eyebrow="What we believe" title="Values that never get diluted" align="center" />
          <div className="row g-4 mt-4">
            {values.map((v, i) => (
              <div className="col-md-4" key={v.title} data-aos="fade-up" data-aos-delay={i * 100}>
                <div className="card-brand h-100 p-4 text-center">
                  <div
                    className="mx-auto mb-3 d-flex align-items-center justify-content-center"
                    style={{ width: 60, height: 60, borderRadius: "50%", background: "var(--cream-deep)", color: "var(--red)", fontSize: "1.6rem" }}
                  >
                    <i className={`bi ${v.icon}`}></i>
                  </div>
                  <h3 className="h5">{v.title}</h3>
                  <p style={{ color: "var(--charcoal-soft)", fontSize: "0.94rem" }}>{v.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-cream">
        <div className="container">
          <SectionIntro eyebrow="A day at the parlour" title="From dawn to your doorstep" align="center" />
          <div className="row g-4 mt-4">
            {timeline.map((t, i) => (
              <div className="col-md-6 col-lg-3" key={t.title} data-aos="fade-up" data-aos-delay={i * 90}>
                <div className="card-brand h-100 p-4 position-relative">
                  <span className="eyebrow">{t.step}</span>
                  <h3 className="h6 mt-2 mb-1" style={{ color: "var(--indigo-deep)" }}>{t.title}</h3>
                  <p style={{ color: "var(--charcoal-soft)", fontSize: "0.88rem" }}>{t.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-5" style={{ background: "linear-gradient(120deg, var(--indigo-deep), var(--indigo))" }}>
        <div className="container text-center" data-aos="zoom-in">
          <h2 className="text-white mb-2" style={{ fontSize: "1.7rem" }}>Come taste the difference yourself</h2>
          <p style={{ color: "#D9D3C4" }}>Shop No 2, 432, Dattawadi Rd, opp. Annapurna Mess, Pune</p>
          <Link to="/contact" className="btn btn-brand mt-2">Find Directions <i className="bi bi-geo-alt ms-1"></i></Link>
        </div>
      </section>
    </>
  );
}
