import React from "react";
import "./TaglineSection.css";

function TaglineSection() {
  const taglines = [
    { title: "Trusted Partner", desc: "Years of expertise in financial markets." },
    { title: "Secure Investments", desc: "Your money is safe with us." },
    { title: "24/7 Support", desc: "We’re here whenever you need us." },
  ];

  return (
    <div className="tagline-section">
      {taglines.map((item, index) => (
        <div key={index} className="tagline-card">
          <h3>{item.title}</h3>
          <p>{item.desc}</p>
        </div>
      ))}
    </div>
  );
}

export default TaglineSection;
