import React from "react";
import "./GlobalReach.css";
import { FaGlobeAsia, FaLightbulb } from "react-icons/fa";

const GlobalReach = () => {
  return (
    <div className="globalreach-container">
      <div className="globalreach-grid">
        <div className="globalreach-card">
          <FaGlobeAsia className="globalreach-icon" />
          <h2 className="globalreach-title">Our Global Reach</h2>
          <p className="globalreach-desc">
            As a trusted manpower export agency in India, we support hiring needs in UAE, Saudi Arabia, Oman, and other Gulf countries. From visa processing to candidate training, we manage every step to deliver deployment-ready manpower.
          </p>
        </div>

        <div className="globalreach-card">
          <FaLightbulb className="globalreach-icon belief-icon" />
          <h2 className="globalreach-title"> Our Belief</h2>
          <p className="globalreach-desc">
            “Manpower isn’t just a resource, it’s the asset that drives your business forward.”<br /><br />
            We empower companies by placing the right people in the right roles, ensuring operational success and long-term partnership.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GlobalReach;
