import { PROJECTS } from "../data/content.js";
import useReveal from "../hooks/useReveal.js";

export default function Projects() {
  const [ref, visible] = useReveal();

  return (
    <section id="projects">
      <div className="container-narrow">
        <div className="section-head">
          <span className="eyebrow">Currently open for booking</span>
          <h2>Upcoming projects</h2>
        </div>
        <div
          ref={ref}
          className={
            "reveal reveal-stagger grid gap-6 md:grid-cols-2 lg:grid-cols-3" +
            (visible ? " in-view" : "")
          }
        >
          {PROJECTS.map((p) => (
            <div className="project-card" key={p.name}>
              <div className="project-thumb">
                <img src={p.img} alt={p.name + " project"} loading="lazy" />
                <span className="p-tag">{p.tag}</span>
              </div>
              <div className="project-body">
                <h3>{p.name}</h3>
                <p className="p-addr">
                  <i className="bi bi-geo-alt-fill"></i>
                  {p.addr}
                </p>
                <a
                  href="#contact"
                  className="btn-forest-outline w-full text-center block"
                >
                  Download Brochure
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
