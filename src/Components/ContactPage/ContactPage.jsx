import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./ContactPage.css";

const ContactPage = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zxo039w", // 🔁 Replace with your actual service ID
        "template_maz3bfh", // 🔁 Replace with your actual template ID
        form.current,
        "1TAT0rogZ2hMqesX5" // 🔁 Replace with your actual Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          form.current.reset(); // Clear form
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className="contact-container">
      {/* Banner */}
      <div className="contact-banner">
        <h1>Let’s Connect</h1>
        <p>Reach out to us for any queries or collaboration</p>
      </div>

      {/* Form & Sidebar */}
      <div className="contact-wrapper">
        {/* Contact Form */}
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <h2>Contact Us</h2>

          <div className="form-group">
            <input type="text" name="user_name" required placeholder=" " />
            <label>Name</label>
          </div>

          <div className="form-group">
            <input type="email" name="user_email" required placeholder=" " />
            <label>Email</label>
          </div>

          <div className="form-group">
            <input type="text" name="subject" required placeholder=" " />
            <label>Subject</label>
          </div>

          <div className="form-group">
            <textarea
              rows="4"
              name="message"
              required
              placeholder=" "
            ></textarea>
            <label>Message</label>
          </div>

          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>

        {/* Visual Sidebar */}
        <div className="contact-visual-box">
          <h3>“Building digital connections that matter.”</h3>
          <p>
            Whether it's business, support, or collaboration — your message can
            spark the next big move.
          </p>
          <div className="circle-shape" />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
