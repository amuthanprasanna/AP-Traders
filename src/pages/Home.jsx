import React from "react";
import Banner from "../components/Banner.jsx";
import TaglineSection from "../components/TaglineSection.jsx";

function Home() {
  return (
    <div>
      {/* Hero Banner */}
      <Banner />

      {/* Tagline Highlights */}
      <TaglineSection />

      {/* Extra welcome text */}
      <section style={{ textAlign: "center", margin: "40px 20px" }}>
        <h2>Welcome to AP Traders</h2>
        <p>
          Your trusted partner in <strong>Stocks</strong>, <strong>Mutual Funds</strong>, 
          and <strong>Commodities</strong>. Invest smart, grow strong, and secure your future.
        </p>
      </section>
    </div>
  );
}

export default Home;
