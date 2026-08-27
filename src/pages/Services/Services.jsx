import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./Services.css";

function Services() {
  const services = [
    {
      path: "stocks",
      title: "Stocks",
      desc: "Invest in top-performing stocks with AP Traders.",
    },
    {
      path: "mutualfunds",
      title: "Mutual Funds",
      desc: "Diversify your portfolio with trusted mutual fund options.",
    },
    {
      path: "commodities",
      title: "Commodities",
      desc: "Trade commodities like gold, silver, and oil with ease.",
    },
  ];

  return (
    <div className="services-container">
      <h2>Our Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <Link key={index} to={service.path} className="service-card">
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </Link>
        ))}
      </div>

      {/* Nested route content will render here */}
      <div className="nested-content">
        <Outlet />
      </div>
    </div>
  );
}

export default Services;
