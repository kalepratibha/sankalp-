import { ContourLines } from "./Decorative.jsx";

export default function Hero({ onEnquire }) {
  return (
    <section id="home" className="hero">
      <div className="hero-media">
        <img
          src="https://images.unsplash.com/photo-1470770903676-69b98201ea1c?w=1600&q=80&auto=format&fit=crop"
          alt="Misty Sahyadri hills near Igatpuri"
          loading="eager"
        />
      </div>
      <div className="contour-svg" style={{ opacity: 0.35 }}>
        <ContourLines />
      </div>
      <div className="hero-grain"></div>
      <div className="container-narrow hero-inner">
        <div className="hero-eyebrow">
          <span className="rule"></span>
          <span className="eyebrow">A journey of two decades in Igatpuri</span>
        </div>
        <h1>
          Turning the Sahyadri's <em>soil</em> into legacies worth keeping.
        </h1>
        <p className="hero-desc">
          For 20 years, Sankalp Landmark has sold land the way it should be
          sold — with clear titles, honest returns, and a place in the family
          long after the paperwork is done.
        </p>
        <div className="hero-actions">
          <a href="#verticals" className="btn-gold">
            Explore Verticals <i className="bi bi-arrow-right"></i>
          </a>
          <button className="btn-outline-line" onClick={onEnquire}>
            Book a Site Visit
          </button>
        </div>

        <div className="stat-strip">
          <div className="stat-item">
            <div className="stat-num">
              <span>20</span>+
            </div>
            <div className="stat-label">Years in Igatpuri</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">
              <span>200</span>+
            </div>
            <div className="stat-label">Acres sold</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">
              <span>1000</span>+
            </div>
            <div className="stat-label">Families served</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">
              <span>7</span>
            </div>
            <div className="stat-label">Live projects</div>
          </div>
        </div>
      </div>
    </section>
  );
}
