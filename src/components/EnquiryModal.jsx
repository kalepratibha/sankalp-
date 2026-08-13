import { useState } from "react";

export default function EnquiryModal({ show, onClose }) {
  const [submitted, setSubmitted] = useState(false);

  if (!show) return null;

  const submit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(23,38,28,0.75)" }}
      onClick={onClose}
    >
      <div className="w-full max-w-md" onClick={(e) => e.stopPropagation()}>
        <div style={{ background: "var(--stone)", borderRadius: "2px" }}>
          <div
            className="flex items-start justify-between p-6"
            style={{ borderBottom: "1px solid var(--line)" }}
          >
            <div>
              <span className="eyebrow text-brass block mb-1">Let's talk land</span>
              <h4 style={{ color: "var(--forest)", fontSize: "1.3rem" }}>
                Leave your details
              </h4>
            </div>
            <button
              type="button"
              className="bg-transparent border-0 text-xl"
              onClick={onClose}
              aria-label="Close"
            >
              <i className="bi bi-x-lg"></i>
            </button>
          </div>

          <div className="p-6">
            {submitted ? (
              <div className="text-center py-4">
                <i className="bi bi-check-circle text-brass" style={{ fontSize: "2.5rem" }}></i>
                <p className="mt-3 mb-0" style={{ color: "var(--forest)" }}>
                  Thank you — our team will call you back shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={submit}>
                <input className="form-control-custom" type="text" placeholder="Full name" required />
                <input className="form-control-custom" type="tel" placeholder="Phone number" required />
                <input className="form-control-custom" type="email" placeholder="Email address" />
                <select className="form-control-custom">
                  <option>Interested in: Premium Villas</option>
                  <option>Interested in: NA Plots</option>
                  <option>Interested in: Investment Plots</option>
                  <option>Interested in: Agriculture Plots</option>
                </select>
                <button type="submit" className="btn-gold w-full justify-center mt-2">
                  Submit Enquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
