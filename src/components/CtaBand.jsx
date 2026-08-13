import { ContourLines } from "./Decorative.jsx";

export default function CtaBand({ onEnquire }) {
  return (
    <section className="cta-band">
      <div className="contour-svg" style={{ opacity: 0.3 }}>
        <ContourLines />
      </div>
      <div
        className="container-narrow flex flex-wrap items-center justify-between gap-4"
        style={{ position: "relative", zIndex: 2 }}
      >
        <div>
          <h2>Ready to walk the land yourself?</h2>
          <p>
            Book a site visit and see Igatpuri's hills the way our clients
            did — before they signed.
          </p>
        </div>
        <button className="btn-gold" onClick={onEnquire}>
          Schedule a Visit <i className="bi bi-arrow-right"></i>
        </button>
      </div>
    </section>
  );
}
