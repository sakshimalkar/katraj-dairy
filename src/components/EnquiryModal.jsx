import { useEffect, useState } from "react";
import useFormSubmit from "../hooks/useFormSubmit";

export default function EnquiryModal({ product, onClose }) {
  const { status, submit, reset } = useFormSubmit(
    product ? `New product enquiry — ${product.name}` : "New enquiry — Katraj Milk Parlour"
  );
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  useEffect(() => {
    if (product) {
      setForm((f) => ({
        ...f,
        message: `Hi, I'd like to know more about ${product.name} (${product.nameDev}). Please share price and availability.`,
      }));
    }
  }, [product]);

  useEffect(() => {
    document.body.style.overflow = product ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [product]);

  if (!product) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    submit({
      Name: form.name,
      Phone: form.phone,
      Product: product.name,
      Message: form.message,
    });
  };

  const handleClose = () => {
    reset();
    setForm({ name: "", phone: "", message: "" });
    onClose();
  };

  return (
    <div
      className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center p-3"
      style={{ background: "rgba(18,41,74,0.55)", zIndex: 1080, animation: "fadeIn 0.25s ease" }}
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Enquire about ${product.name}`}
    >
      <div
        className="bg-white p-4 p-md-5 position-relative"
        style={{ borderRadius: "22px", maxWidth: 480, width: "100%", boxShadow: "var(--shadow-soft)", animation: "popIn 0.3s ease" }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          aria-label="Close"
          className="btn-close position-absolute"
          style={{ top: 22, right: 22 }}
        ></button>

        {status === "success" ? (
          <div className="text-center py-4">
            <div style={{ fontSize: "2.6rem", color: "#3AA655" }}>
              <i className="bi bi-check-circle-fill"></i>
            </div>
            <h3 className="h5 mt-3">Enquiry sent!</h3>
            <p style={{ color: "var(--charcoal-soft)" }}>
              Thanks {form.name || "there"} — we'll get back to you about {product.name} shortly.
            </p>
            <button className="btn btn-brand mt-2" onClick={handleClose}>Close</button>
          </div>
        ) : (
          <>
            <span className="eyebrow">Quick enquiry</span>
            <h3 className="h4 mt-1 mb-1" style={{ color: "var(--indigo-deep)" }}>
              {product.name} <span className="font-dev text-brand-red">· {product.nameDev}</span>
            </h3>
            <p style={{ color: "var(--charcoal-soft)", fontSize: "0.92rem" }} className="mb-3">
              Tell us how much you need — we'll confirm price and pickup or delivery.
            </p>

            <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
              <div>
                <label className="form-label fw-semibold" style={{ fontSize: "0.85rem" }}>Your name</label>
                <input
                  required
                  type="text"
                  className="form-control"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="form-label fw-semibold" style={{ fontSize: "0.85rem" }}>Phone number</label>
                <input
                  required
                  type="tel"
                  pattern="[0-9+ ]{7,15}"
                  className="form-control"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="e.g. 98xxxxxxxx"
                />
              </div>
              <div>
                <label className="form-label fw-semibold" style={{ fontSize: "0.85rem" }}>Message</label>
                <textarea
                  required
                  rows={3}
                  className="form-control"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
              </div>

              {status === "error" && (
                <div className="text-danger" style={{ fontSize: "0.85rem" }}>
                  Something went wrong — please try again or WhatsApp us directly.
                </div>
              )}

              <button type="submit" className="btn btn-brand w-100" disabled={status === "sending"}>
                {status === "sending" ? (
                  <span className="spinner-border spinner-border-sm" />
                ) : (
                  <>Send Enquiry <i className="bi bi-send-fill ms-1"></i></>
                )}
              </button>
            </form>
          </>
        )}
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes popIn { from { opacity: 0; transform: scale(0.92) translateY(10px); } to { opacity: 1; transform: scale(1) translateY(0); } }
      `}</style>
    </div>
  );
}
