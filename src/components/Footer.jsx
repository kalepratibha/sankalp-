export default function Footer() {
  return (
    <footer id="contact">
      <div className="container-narrow">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="mb-3">
              <span
                className="font-display"
                style={{ fontWeight: 600, fontSize: "1.4rem", color: "var(--stone)" }}
              >
                Sankalp Landmark
              </span>
            </div>
            <p>
              Office No. 7–8, 1st Floor, Shreeji The Status,
              <br />
              Opposite City Center Mall, Nashik, Maharashtra – 422007
            </p>
            <p>
              <i className="bi bi-telephone-fill text-brass mr-2"></i>
              <a href="tel:+918007751751" style={{ display: "inline" }}>
                +91 8007 751 751
              </a>
              <br />
              <i className="bi bi-envelope-fill text-brass mr-2"></i>
              <a href="mailto:enquiry@sankalplandmark.com" style={{ display: "inline" }}>
                enquiry@sankalplandmark.com
              </a>
            </p>
            <div className="footer-social">
              <a href="https://www.facebook.com/profile.php?id=100089781020973" aria-label="Facebook">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://www.instagram.com/sankalp_landmark/" aria-label="Instagram">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/company/92481111" aria-label="LinkedIn">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="https://www.youtube.com/@SankalpLandmark" aria-label="YouTube">
                <i className="bi bi-youtube"></i>
              </a>
            </div>
          </div>

          <div className="col-span-6 lg:col-span-2">
            <h5>Quick Links</h5>
            <a href="#home">Home</a>
            <a href="#about">About Us</a>
            <a href="#projects">Our Team</a>
            <a href="#contact">Contact Us</a>
          </div>

          <div className="col-span-6 lg:col-span-3">
            <h5>Verticals</h5>
            <a href="#verticals">Premium Villas</a>
            <a href="#verticals">NA Plots</a>
            <a href="#verticals">Investment Plots</a>
            <a href="#verticals">Agriculture Plots</a>
          </div>

          <div className="lg:col-span-3">
            <h5>Get in touch</h5>
            <p className="mb-3">
              Leave your number and our team will call you back within the
              day.
            </p>
            <a href="#contact" className="btn-gold" style={{ display: "inline-flex" }}>
              Enquire Now
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Sankalp Landmark. All rights reserved.</span>
          <span>Privacy Policy &nbsp;|&nbsp; Disclaimer</span>
        </div>
      </div>
    </footer>
  );
}
