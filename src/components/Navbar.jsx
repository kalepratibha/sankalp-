import { useEffect, useState } from "react";
import { NAV_LINKS } from "../data/content.js";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav className={"site-nav" + (scrolled ? " scrolled" : "")}>
        <div className="container-narrow nav-inner">
          <a href="#home" className="brand-mark">
            <span className="brand-title">Sankalp Landmark</span>
            <span className="brand-sub">IGATPURI · NASHIK</span>
          </a>

          <div className="nav-links hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((l) => (
              <a key={l.label} href={l.href}>
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a href="tel:+918007751751" className="nav-phone hidden lg:flex">
              <i className="bi bi-telephone-fill"></i> +91 8007 751 751
            </a>
            <a href="#contact" className="btn-gold hidden lg:inline-flex">
              Enquire Now
            </a>
            <button
              className="lg:hidden bg-transparent border-0 text-stone text-2xl"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <i className="bi bi-list"></i>
            </button>
          </div>
        </div>
      </nav>

      <div className={"mobile-menu" + (mobileOpen ? " open" : "")}>
        <button
          className="self-end bg-transparent border-0 text-stone text-3xl"
          onClick={() => setMobileOpen(false)}
          aria-label="Close menu"
        >
          <i className="bi bi-x-lg"></i>
        </button>
        <div className="mt-4">
          {NAV_LINKS.map((l) => (
            <a key={l.label} href={l.href} onClick={() => setMobileOpen(false)}>
              {l.label}
            </a>
          ))}
        </div>
        <a href="tel:+918007751751" className="btn-gold mt-4 self-start">
          <i className="bi bi-telephone-fill"></i> +91 8007 751 751
        </a>
      </div>
    </>
  );
}
