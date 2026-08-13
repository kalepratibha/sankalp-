import { useEffect, useRef, useState } from "react";
import { TESTIMONIALS } from "../data/content.js";
import useReveal from "../hooks/useReveal.js";

export default function Testimonials() {
  const count = TESTIMONIALS.length;
  const [i, setI] = useState(0);
  const timer = useRef(null);
  const [revealRef, visible] = useReveal();

  // touch/drag support for the slider
  const dragX = useRef(null);

  useEffect(() => {
    timer.current = setInterval(() => setI((v) => (v + 1) % count), 6000);
    return () => clearInterval(timer.current);
  }, [count]);

  const go = (n) => {
    clearInterval(timer.current);
    setI((n + count) % count);
  };

  const onTouchStart = (e) => {
    dragX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e) => {
    if (dragX.current === null) return;
    const diff = e.changedTouches[0].clientX - dragX.current;
    if (diff > 40) go(i - 1);
    else if (diff < -40) go(i + 1);
    dragX.current = null;
  };

  return (
    <section className="testi-section">
      <div className="container-narrow">
        <div className="section-head text-center mx-auto" style={{ maxWidth: 560 }}>
          <span className="eyebrow block">Client stories</span>
          <h2>What people think about us</h2>
        </div>

        <div
          ref={revealRef}
          className={"reveal testi-row" + (visible ? " in-view" : "")}
        >
          <button
            className="testi-nav-btn hidden md:flex"
            onClick={() => go(i - 1)}
            aria-label="Previous testimonial"
          >
            <i className="bi bi-arrow-left"></i>
          </button>

          <div
            className="testi-viewport"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <div
              className="testi-track"
              style={{
                width: count * 100 + "%",
                transform: `translateX(-${(100 / count) * i}%)`,
              }}
            >
              {TESTIMONIALS.map((t) => (
                <div
                  className="testi-slide"
                  style={{ width: 100 / count + "%" }}
                  key={t.name}
                >
                  <div className="testi-card">
                    <div className="testi-avatar">
                      <img src={t.avatar} alt={t.name} loading="lazy" />
                    </div>
                    <i className="bi bi-quote testi-quote-icon"></i>
                    <p className="testi-quote">{t.quote}</p>
                    <div className="testi-name">{t.name}</div>
                    <div className="testi-role">{t.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            className="testi-nav-btn hidden md:flex"
            onClick={() => go(i + 1)}
            aria-label="Next testimonial"
          >
            <i className="bi bi-arrow-right"></i>
          </button>
        </div>

        <div className="testi-dots">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              className={idx === i ? "active" : ""}
              onClick={() => go(idx)}
              aria-label={"Go to testimonial " + (idx + 1)}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}
