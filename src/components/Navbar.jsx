import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { store } from "../data/store";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Menu" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top py-2 ${
        scrolled ? "shadow-sm" : ""
      }`}
      style={{
        background: scrolled ? "rgba(251,246,236,0.96)" : "rgba(251,246,236,0.85)",
        backdropFilter: "blur(8px)",
        transition: "background 0.3s ease, box-shadow 0.3s ease",
        borderBottom: "1px solid rgba(43,38,32,0.08)",
      }}
    >
      <div className="container">
        <NavLink to="/" className="navbar-brand d-flex align-items-center gap-2" onClick={() => setOpen(false)}>
          <span className="navbar-brand-mark">कात्रज</span>
          <span className="d-flex flex-column lh-1">
            <span className="fw-bold" style={{ fontFamily: "var(--font-display)", color: "var(--indigo-deep)", fontSize: "1.50rem" }}>
              Katraj Milk Parlour
            </span>
            <span className="text-brand-red" style={{ fontSize: "1.02rem", fontWeight: 600 }}>
              Dattawadi, Pune
            </span>
          </span>
        </NavLink>

        <button
          className="navbar-toggler border-0"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <i className={`bi ${open ? "bi-x-lg" : "bi-list"}`} style={{ fontSize: "1.5rem", color: "var(--indigo-deep)" }}></i>
        </button>

        <div className={`collapse navbar-collapse ${open ? "show" : ""}`}>
          <ul className="navbar-nav mx-auto gap-lg-2 mt-3 mt-lg-0">
            {links.map((l) => (
              <li className="nav-item" key={l.to}>
                <NavLink
                  to={l.to}
                  end={l.to === "/"}
                  className={({ isActive }) =>
                    "nav-link fw-semibold px-3 " + (isActive ? "text-brand-red" : "")
                  }
                  style={{ color: "var(--charcoal)" }}
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="d-flex gap-2 mt-3 mt-lg-0">
            <a
              href={`tel:${store.phoneIntl}`}
              className="btn btn-outline-brand btn-sm d-none d-md-inline-flex align-items-center gap-1"
            >
              <i className="bi bi-telephone-fill"></i> Call
            </a>
            <a
              href={`https://wa.me/${store.waNumber}?text=${encodeURIComponent(
                "Hi Katraj Milk Parlour! I'd like to place an order."
              )}`}
              target="_blank"
              rel="noreferrer"
              className="btn btn-brand btn-sm d-inline-flex align-items-center gap-1"
            >
              <i className="bi bi-whatsapp"></i> Order
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
