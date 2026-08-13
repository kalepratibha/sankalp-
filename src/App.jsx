import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Verticals from "./components/Verticals.jsx";
import WhyInvest from "./components/WhyInvest.jsx";
import Projects from "./components/Projects.jsx";
import Gallery from "./components/Gallery.jsx";
import Testimonials from "./components/Testimonials.jsx";
import CtaBand from "./components/CtaBand.jsx";
import Footer from "./components/Footer.jsx";
import EnquiryModal from "./components/EnquiryModal.jsx";

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Navbar />
      <Hero onEnquire={() => setModalOpen(true)} />
      <About />
      <Verticals />
      <WhyInvest />
      <Projects />
      <Gallery />
      <Testimonials />
      <CtaBand onEnquire={() => setModalOpen(true)} />
      <Footer />

      <a
        href="https://wa.me/+918007751751"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <i className="bi bi-whatsapp"></i>
      </a>

      <EnquiryModal show={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
