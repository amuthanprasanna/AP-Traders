import React from "react";
import "./ServicePages.css";

function Commodities() {
  const commodities = [
    "Gold",
    "Silver",
    "Crude Oil",
    "Natural Gas",
    "Agricultural Products",
  ];

  return (
    <div className="service-detail">
      <h3>Commodities</h3>
      <p>Trade commodities like gold, silver, and oil with ease.</p>
      <ul>
        {commodities.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Commodities;
