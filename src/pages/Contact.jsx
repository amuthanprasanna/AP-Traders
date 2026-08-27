import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError("All fields are required.");
      setSuccess("");
    } else {
      setError("");
      setSuccess("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    }
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <div className="contact-grid">
        {/* Contact Info */}
        <div className="contact-info">
          <p><strong>Address:</strong> 123 Market Street, Chennai</p>
          <p><strong>Phone:</strong> +91 98765 43210</p>
          <p><strong>Email:</strong> support@aptraders.com</p>
        </div>

        {/* Contact Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            value={form.message}
            onChange={handleChange}
          ></textarea>
          {error && <p className="error">{error}</p>}
          {success && <p className="success">{success}</p>}
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
