import React from "react";
import "./AboutPage.css";
import WhoWeAre from "./WhoWeAre";
import WhatMakeUsDifferent from "../../Components/AboutPage/WhatMakeUsDifferent";
import IndustriesWeServe from "./IndustriesWeServe";
import aboutBanner from "../../assets/AboutPage/banner1.png";
import aboutimage from "../../assets/AboutPage/aboutimage.jpg";
import GlobalReach from "./GlobalReach";

const AboutPage = () => {
  return (
    <>
      <div className="about-page">
        <div
          className="about-banner"
          style={{ backgroundImage: `url(${aboutBanner})` }}
        >
          <h1 className="about-title">About Us</h1>
        </div>

        <div className="about-content-grid">
          <div className="about-text">
            <p className="about-description">
              <strong>Balaji Manpower Recruitment Pvt. Ltd.</strong> is a leading{" "}
              <strong>manpower supply company in Faridabad,</strong> offering
              comprehensive <strong>staffing solutions</strong> across{" "}
              <strong>India and the Gulf countries</strong>. With over a decade of
              industry experience, we specialise in supplying{" "}
              <strong>skilled, semi-skilled, and unskilled manpower</strong> to
              sectors like <strong>construction, healthcare, security, facility
              management, logistics, and manufacturing.</strong>
            </p>
            <p className="about-description">
              Our focus is to connect businesses with{" "}
              <strong>trained, verified, and reliable manpower</strong> that fuels
              productivity and supports growth. Whether it’s{" "}
              <strong>GDA staff for hospitals, construction labour, or nurses for
              overseas hiring,</strong> we ensure quick deployment, legal
              compliance, and long-term reliability.
            </p>
          </div>
          <div className="about-image">
            <img
              src={aboutimage}
              alt="About Visual"
              className="animated-img"
            />
          </div>
        </div>
      </div>

      <div>
        <WhoWeAre />
      </div>

      <div>
        <WhatMakeUsDifferent />
      </div>

      <div>
        <IndustriesWeServe />
      </div>

      <div>
        <GlobalReach />
      </div>
    </>
  );
};

export default AboutPage;
