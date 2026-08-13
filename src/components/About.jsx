import useReveal from "../hooks/useReveal.js";

export default function About() {
  const [visRef, visible] = useReveal();
  const [copyRef, copyVisible] = useReveal();

  return (
    <section id="about">
      <div className="container-narrow">
        <div className="grid gap-10 lg:grid-cols-12 items-center">
          <div className="lg:col-span-5">
            <div
              ref={visRef}
              className={"reveal about-visual-wrap" + (visible ? " in-view" : "")}
            >
              <div className="about-visual">
                <img
                  className="about-main"
                  src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80&auto=format&fit=crop"
                  alt="A Sankalp Landmark villa property"
                  loading="lazy"
                />
                <div className="about-visual-badge">
                  <div className="num">200+</div>
                  <div className="lbl">Acres sold across Nashik &amp; Igatpuri</div>
                </div>
              </div>
              <div className="about-visual-secondary">
                <img
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=500&q=80&auto=format&fit=crop"
                  alt="Interior of a Sankalp Landmark villa"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div
            ref={copyRef}
            className={"reveal lg:col-span-7" + (copyVisible ? " in-view" : "")}
          >
            <span className="eyebrow text-brass block mb-3">Our story</span>
            <h2
              className="mb-4"
              style={{
                fontSize: "clamp(1.9rem,3vw,2.5rem)",
                color: "var(--forest)",
                fontWeight: 600,
              }}
            >
              A journey of two decades
            </h2>
            <div className="about-copy">
              <p>
                Our company was started twenty years ago by our founder, Mr.
                Uttam Appa Shinde, in Nashik's Igatpuri belt. Under his
                direction, the company has sold over 200 acres of land — a
                milestone that still shapes how we work today.
              </p>
              <p>
                We don't see ourselves as just sellers of land and villas.
                Every buyer who joins us becomes part of the Sankalp family,
                and we stay invested in making sure that relationship pays
                off — literally and otherwise.
              </p>
            </div>
            <div className="founder-line">
              <div className="founder-avatar">US</div>
              <div>
                <div className="founder-name">Uttam Appa Shinde</div>
                <div className="founder-role">Founder, Sankalp Landmark</div>
              </div>
              <a
                href="#contact"
                className="btn-forest-outline ml-auto hidden sm:inline-block"
              >
                Know More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
