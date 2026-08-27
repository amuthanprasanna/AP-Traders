import React from "react";
import "./WhyUs.css";

function WhyUs() {
  const reasons = [
    { icon: "✅", title: "Trusted Partner", desc: "Years of expertise in financial markets." },
    { icon: "🔒", title: "Secure Investments", desc: "Your money is safe with us." },
    { icon: "📈", title: "Expert Guidance", desc: "Professional advice for smarter decisions." },
    { icon: "💬", title: "24/7 Support", desc: "We’re here whenever you need us." },
  ];

  return (
    <div className="whyus-container">
      <h2>Why Choose AP Traders?</h2>
      <div className="whyus-grid">
        {reasons.map((item, index) => (
          <div key={index} className="whyus-card">
            <span className="icon">{item.icon}</span>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhyUs;
