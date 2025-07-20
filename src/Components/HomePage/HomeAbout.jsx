import React from "react";
import { Link } from "react-router-dom";
import "./HomeAbout.css";
import HomeImage from "../../assets/Homepage Assets/Services/HomeImage1.jpg";

const HomeAbout = () => {
  return (
    <section className="Home-about-wrapper">
      <div className="Home-about-container">
        {/* Left Side - Text */}
        <div className="Home-about-content">
          <h2 className="Home-about-title">
            <span>Balaji Manpower Recruitment Pvt. Ltd.</span>
          </h2>
          <p>
            Balaji Manpower Recruitment Pvt. Ltd. is a leading manpower supply
            company in Faridabad, offering reliable and compliant staffing
            solutions across Delhi NCR, PAN India, and Gulf countries.
          </p>
          <p>
            We specialize in skilled, semi-skilled, and unskilled labour supply,
            supporting industries like construction, healthcare, security,
            housekeeping, manufacturing, and more.
          </p>
          <p>
            Whether you're seeking GDA staff for hospitals, factory workers, or
            nurses for international placements, we provide fully vetted
            manpower that fits your timeline and budget.
          </p>
          <p className="Home-about-mission">
            <strong>Our mission:</strong> to empower businesses with dependable
            human resources — fast, legally compliant, and professionally
            managed.
          </p>
        </div>

        {/* Right Side - Visual */}
        <div className="Home-about-visual">
          <img src={HomeImage} alt="About Visual" className="about-image" />
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
