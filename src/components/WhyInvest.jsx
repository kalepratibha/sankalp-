import { WHY_REASONS } from "../data/content.js";
import useReveal from "../hooks/useReveal.js";

export default function WhyInvest() {
  const [ref, visible] = useReveal();

  return (
    <section className="why-belt">
      <div className="container-narrow">
        <div className="section-head">
          <span className="eyebrow">Why buyers choose us</span>
          <h2>Reasons to invest with Sankalp</h2>
          <p>
            Not a checklist — the actual reasons over a thousand families
            picked us for their land.
          </p>
        </div>
        <div
          ref={ref}
          className={
            "reveal reveal-stagger grid gap-3 sm:grid-cols-2 lg:grid-cols-4" +
            (visible ? " in-view" : "")
          }
        >
          {WHY_REASONS.map((w) => (
            <div className="why-card" key={w.title}>
              <i className={"bi " + w.icon}></i>
              <h4>{w.title}</h4>
              <p>{w.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
