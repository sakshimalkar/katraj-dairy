import { Link } from "react-router-dom";
import { store } from "../data/store";
import useFormSubmit from "../hooks/useFormSubmit";

export default function Footer() {
  const { status, submit, reset } = useFormSubmit("New newsletter signup — Katraj Milk Parlour");

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.elements.newsletterEmail.value;
    submit({ email, type: "Newsletter signup" });
    e.target.reset();
    setTimeout(reset, 4000);
  };

  return (
    <footer className="bg-indigo pt-5 pb-4" style={{ color: "#E7E2D6" }}>
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-4">
            <div className="d-flex align-items-center gap-2 mb-3">
              <span className="navbar-brand-mark" style={{ background: "var(--gold)", color: "var(--indigo-deep)" }}>
                कत्रज़
              </span>
              <div>
                <div className="fw-bold text-white" style={{ fontFamily: "var(--font-display)" }}>
                  Katraj Milk Parlour
                </div>
                <div style={{ fontSize: "0.8rem", color: "var(--gold-light)" }}>Dattawadi, Pune</div>
              </div>
            </div>
            <p style={{ color: "#C9C3B4", maxWidth: "320px" }}>
              Fresh milk, ghee, paneer, lassi and shrikhand — churned, skimmed and
              set the traditional way, every single day.
            </p>
            <div className="d-flex gap-2 mt-3">
              {[
                { icon: "bi-whatsapp", href: `https://wa.me/${store.waNumber}` },
                { icon: "bi-telephone-fill", href: `tel:${store.phoneIntl}` },
                { icon: "bi-envelope-fill", href: `mailto:${store.email}` },
                { icon: "bi-geo-alt-fill", href: store.directionsUrl },
              ].map((s) => (
                <a
                  key={s.icon}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="d-inline-flex align-items-center justify-content-center hover-lift"
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.1)",
                    color: "var(--gold-light)",
                  }}
                >
                  <i className={`bi ${s.icon}`}></i>
                </a>
              ))}
            </div>
          </div>

          <div className="col-6 col-lg-2">
            <div className="fw-bold text-white mb-3">Explore</div>
            <ul className="list-unstyled d-flex flex-column gap-2">
              <li><Link to="/" style={{ color: "#C9C3B4" }}>Home</Link></li>
              <li><Link to="/about" style={{ color: "#C9C3B4" }}>About Us</Link></li>
              <li><Link to="/products" style={{ color: "#C9C3B4" }}>Our Menu</Link></li>
              <li><Link to="/gallery" style={{ color: "#C9C3B4" }}>Gallery</Link></li>
              <li><Link to="/contact" style={{ color: "#C9C3B4" }}>Contact</Link></li>
            </ul>
          </div>

          <div className="col-6 col-lg-3">
            <div className="fw-bold text-white mb-3">Visit Us</div>
            <p style={{ color: "#C9C3B4", fontSize: "0.92rem" }}>{store.address}</p>
            <p style={{ color: "var(--gold-light)", fontSize: "0.92rem" }} className="mb-1">
              <i className="bi bi-clock me-2"></i>Open · 7:00 am – 11:30 pm
            </p>
          </div>

          <div className="col-lg-3">
            <div className="fw-bold text-white mb-3">Get taste updates</div>
            <p style={{ color: "#C9C3B4", fontSize: "0.88rem" }}>
              Seasonal specials like Aamrakhand, straight to your inbox.
            </p>
            <form onSubmit={handleSubmit} className="d-flex gap-2">
              <input
                type="email"
                name="newsletterEmail"
                required
                placeholder="you@email.com"
                className="form-control"
                style={{ borderRadius: "999px", border: "none", padding: "0.55rem 1rem" }}
              />
              <button
                type="submit"
                className="btn btn-brand"
                style={{ padding: "0.55rem 1.1rem" }}
                disabled={status === "sending"}
              >
                {status === "sending" ? (
                  <span className="spinner-border spinner-border-sm" />
                ) : (
                  <i className="bi bi-send-fill"></i>
                )}
              </button>
            </form>
            {status === "success" && (
              <div style={{ color: "#8FD19E", fontSize: "0.82rem" }} className="mt-2">
                <i className="bi bi-check-circle-fill me-1"></i>Subscribed! Check your inbox.
              </div>
            )}
            {status === "error" && (
              <div style={{ color: "#E89A9A", fontSize: "0.82rem" }} className="mt-2">
                Something went wrong. Please try again.
              </div>
            )}
          </div>
        </div>

        <hr style={{ borderColor: "rgba(255,255,255,0.12)", margin: "2.2rem 0 1.2rem" }} />
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-2" style={{ fontSize: "0.82rem", color: "#9C9686" }}>
          <span>© {new Date().getFullYear()} Katraj Milk Parlour, Dattawadi. All rights reserved.</span>
          <span>Made with <i className="bi bi-heart-fill text-brand-red"></i> in Pune</span>
        </div>
      </div>
    </footer>
  );
}
