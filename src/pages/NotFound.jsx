import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section
      className="d-flex align-items-center justify-content-center text-center"
      style={{ minHeight: "100vh", paddingTop: "6rem", background: "linear-gradient(180deg,#FBF6EC,#F1E8D8)" }}
    >
      <div>
        <div className="font-dev" style={{ fontSize: "4rem", color: "var(--red)", fontWeight: 700 }}>404</div>
        <h1 className="h3 mt-2">This shelf is empty</h1>
        <p style={{ color: "var(--charcoal-soft)" }}>The page you're looking for has been sold out or moved.</p>
        <Link to="/" className="btn btn-brand mt-2">Back to Home</Link>
      </div>
    </section>
  );
}
