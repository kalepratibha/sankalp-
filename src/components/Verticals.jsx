import { VERTICALS } from "../data/content.js";
import useReveal from "../hooks/useReveal.js";

export default function Verticals() {
  const [ref, visible] = useReveal();

  return (
    <section id="verticals" style={{ background: "var(--stone-2)" }}>
      <div className="container-narrow">
        <div className="section-head">
          <span className="eyebrow">What we build &amp; sell</span>
          <h2>Four ways to own a piece of Igatpuri</h2>
          <p>
            From ready villas to raw agricultural land — pick the vertical
            that matches your reason for buying.
          </p>
        </div>
        <div
          ref={ref}
          className={
            "reveal reveal-stagger grid gap-6 sm:grid-cols-2 lg:grid-cols-4" +
            (visible ? " in-view" : "")
          }
        >
          {VERTICALS.map((v) => (
            <div className="vertical-card" key={v.title}>
              <span className="v-index">{v.idx}</span>
              <div className="v-thumb">
                <img src={v.img} alt={v.title} loading="lazy" />
              </div>
              <div className="v-icon">
                <i className={"bi " + v.icon}></i>
              </div>
              <h3>{v.title}</h3>
              <p>{v.desc}</p>
              <a href="#contact" className="v-link">
                View details <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
