import { GALLERY } from "../data/content.js";
import useReveal from "../hooks/useReveal.js";

export default function Gallery() {
  const [ref, visible] = useReveal();

  return (
    <section id="gallery" style={{ background: "var(--stone-2)" }}>
      <div className="container-narrow">
        <div className="section-head">
          <span className="eyebrow">A closer look</span>
          <h2>Sites, villas &amp; land — as they really are</h2>
          <p>
            A glimpse of what buyers walk through on a site visit, from
            finished villas to open, ready-to-build plots.
          </p>
        </div>
        <div
          ref={ref}
          className={"reveal gallery-grid" + (visible ? " in-view" : "")}
        >
          {GALLERY.map((g, i) => (
            <div
              className={
                "gallery-item" +
                (i === 0 ? " g-wide g-tall" : "") +
                (i === 4 ? " g-wide" : "")
              }
              key={g.alt}
            >
              <img src={g.src} alt={g.alt} loading="lazy" />
              <div className="g-caption">{g.alt}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
