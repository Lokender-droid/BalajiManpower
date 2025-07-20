import React from "react";
import "./WhoWeAre.css";
import { FaUsers } from "react-icons/fa";

const WhoWeAre = () => {
  return (
    <div className="who-container">
      <div className="who-content">
        <h2 className="who-heading">Who We Are</h2>
        <p className="who-description">
          We are not just recruiters, we are workforce partners to businesses across India and the GCC. From site labourers to qualified healthcare professionals, we supply manpower that’s ready to deliver from day one.
          <br /><br />
          Our expanding footprint across Delhi NCR, Haryana, and the Gulf stands as proof of our commitment to trust, transparency, and timely delivery.
        </p>
      </div>
    </div>
  );
};

export default WhoWeAre;
