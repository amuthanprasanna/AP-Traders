import React from "react";
import "./ServicePages.css";

function MutualFunds() {
  const funds = [
    "Equity Funds",
    "Debt Funds",
    "Hybrid Funds",
    "Index Funds",
  ];

  return (
    <div className="service-detail">
      <h3>Mutual Funds</h3>
      <p>Diversify your portfolio with our trusted mutual fund options.</p>
      <ul>
        {funds.map((fund, index) => (
          <li key={index}>{fund}</li>
        ))}
      </ul>
    </div>
  );
}

export default MutualFunds;
