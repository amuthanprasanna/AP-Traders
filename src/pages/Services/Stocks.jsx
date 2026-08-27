import React, { useEffect, useState } from "react";
import "./ServicePages.css";

function Stocks() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Demo API fetch (placeholder)
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=3")
      .then((res) => res.json())
      .then((result) => setData(result))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="service-detail">
      <h3>Stocks</h3>
      <p>Invest in top-performing stocks with AP Traders.</p>
      <ul>
  <li>Access to top-performing companies</li>
  <li>Real-time market insights</li>
  <li>Flat fees with no hidden charges</li>
</ul>

    </div>
  );
}

export default Stocks;
