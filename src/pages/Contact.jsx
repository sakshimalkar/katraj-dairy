import { useState } from "react";
import SectionIntro from "../components/SectionIntro";
import useFormSubmit from "../hooks/useFormSubmit";
import { store } from "../data/store";

const infoCards = [
  { icon: "bi-geo-alt-fill", title: "Address", lines: [store.address] },
  { icon: "bi-telephone-fill", title: "Phone", lines: [store.phoneDisplay], href: `tel:${store.phoneIntl}` },
  { icon: "bi-envelope-fill", title: "Email", lines: [store.email], href: `mailto:${store.email}` },
  { icon: "bi-clock-fill", title: "Hours", lines: ["Open daily · 7:00 am – 11:30 pm"] },
];

export default function Contact() {
  const { status, submit, reset } = useFormSubmit("New contact form message — Katraj Milk Parlour");
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    submit({
      Name: form.name,
      Email: form.email,
      Phone: form.phone,
      Message: form.message,
    });
  };

  const handleReset = () => {
    reset();
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <>
      <section className="position-relative" style={{ paddingTop: "9rem", paddingBottom: "3rem", background: "linear-gradient(180deg,#FBF6EC,#F1E8D8)" }}>
        <div className="container">
          <SectionIntro
            eyebrow="Get in touch"
            title="We'd love to hear from you"
            desc="Questions about an order, bulk requirements, or just want to say hello — send us a message."
            align="center"
          />
        </div>
      </section>

      <section className="section bg-white pt-0">
        <div className="container">
          <div className="row g-3 mb-5">
            {infoCards.map((c, i) => (
              <div className="col-6 col-lg-3" key={c.title} data-aos="fade-up" data-aos-delay={i * 80}>
                <a
                  href={c.href || undefined}
                  className="card-brand d-block h-100 p-4 text-center"
                  style={{ cursor: c.href ? "pointer" : "default" }}
                >
                  <div
                    className="mx-auto mb-3 d-flex align-items-center justify-content-center"
                    style={{ width: 52, height: 52, borderRadius: "50%", background: "var(--cream-deep)", color: "var(--red)", fontSize: "1.3rem" }}
                  >
                    <i className={`bi ${c.icon}`}></i>
                  </div>
                  <div className="fw-semibold mb-1" style={{ color: "var(--indigo-deep)" }}>{c.title}</div>
                  {c.lines.map((l) => (
                    <div key={l} style={{ color: "var(--charcoal-soft)", fontSize: "0.84rem" }}>{l}</div>
                  ))}
                </a>
              </div>
            ))}
          </div>

          <div className="row g-4">
            <div className="col-lg-6" data-aos="fade-right">
              <div className="card-brand p-4 p-md-5 h-100">
                {status === "success" ? (
                  <div className="text-center py-5">
                    <div style={{ fontSize: "3rem", color: "#3AA655" }}>
                      <i className="bi bi-check-circle-fill"></i>
                    </div>
                    <h3 className="h4 mt-3">Message sent!</h3>
                    <p style={{ color: "var(--charcoal-soft)" }}>
                      Thanks {form.name || "there"}, we'll reply to you shortly.
                    </p>
                    <button className="btn btn-brand mt-2" onClick={handleReset}>Send another message</button>
                  </div>
                ) : (
                  <>
                    <span className="eyebrow">Send a message</span>
                    <h3 className="h4 mt-1 mb-4" style={{ color: "var(--indigo-deep)" }}>Fill the form below</h3>
                    <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
                      <div className="row g-3">
                        <div className="col-md-6">
                          <label className="form-label fw-semibold" style={{ fontSize: "0.85rem" }}>Name</label>
                          <input required name="name" value={form.name} onChange={handleChange} type="text" className="form-control" placeholder="Your name" />
                        </div>
                        <div className="col-md-6">
                          <label className="form-label fw-semibold" style={{ fontSize: "0.85rem" }}>Phone</label>
                          <input required name="phone" value={form.phone} onChange={handleChange} type="tel" pattern="[0-9+ ]{7,15}" className="form-control" placeholder="98xxxxxxxx" />
                        </div>
                      </div>
                      <div>
                        <label className="form-label fw-semibold" style={{ fontSize: "0.85rem" }}>Email</label>
                        <input required name="email" value={form.email} onChange={handleChange} type="email" className="form-control" placeholder="you@email.com" />
                      </div>
                      <div>
                        <label className="form-label fw-semibold" style={{ fontSize: "0.85rem" }}>Message</label>
                        <textarea required name="message" value={form.message} onChange={handleChange} rows={4} className="form-control" placeholder="How can we help?" />
                      </div>

                      {status === "error" && (
                        <div className="text-danger" style={{ fontSize: "0.85rem" }}>
                          Something went wrong — please try again, or call us directly.
                        </div>
                      )}

                      <button type="submit" className="btn btn-brand" disabled={status === "sending"}>
                        {status === "sending" ? (
                          <span className="spinner-border spinner-border-sm" />
                        ) : (
                          <>Send Message <i className="bi bi-send-fill ms-1"></i></>
                        )}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>

            <div className="col-lg-6" data-aos="fade-left">
              <div className="card-brand h-100 overflow-hidden" style={{ minHeight: 420 }}>
                <iframe
                  title="Katraj Milk Parlour location on Google Maps"
                  src={store.mapEmbedSrc}
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: 420 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <a
                href={store.directionsUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-brand w-100 mt-3"
              >
                <i className="bi bi-signpost-split-fill me-1"></i> Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
