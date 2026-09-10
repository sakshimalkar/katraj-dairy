import { store } from "../data/store";

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${store.waNumber}?text=${encodeURIComponent(
        "Hi Katraj Milk Parlour! I'd like to place an order."
      )}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="d-flex align-items-center justify-content-center"
      style={{
        position: "fixed",
        bottom: "24px",
        right: "24px",
        width: "58px",
        height: "58px",
        borderRadius: "50%",
        background: "#25D366",
        color: "#fff",
        fontSize: "1.6rem",
        boxShadow: "0 10px 26px -8px rgba(37,211,102,0.7)",
        zIndex: 1050,
        animation: "wa-bounce 2.6s ease-in-out infinite",
      }}
    >
      <i className="bi bi-whatsapp"></i>
      <style>{`
        @keyframes wa-bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
      `}</style>
    </a>
  );
}
