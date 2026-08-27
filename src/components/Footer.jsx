import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <img src="/logo.png" alt="AP Traders Logo" />
          <p>Trust with Confidence, Invest in Everything</p>
        </div>

        <div className="footer-downloads">
          <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
            <img src="/google-play-badge.png" alt="Get it on Google Play" />
          </a>
          <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
            <img src="/app-store-badge.png" alt="Download on the App Store" />
          </a>
        </div>

        <div className="footer-social">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">🌐 Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">🐦 Twitter</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">📸 Instagram</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">💼 LinkedIn</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} AP Traders. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
