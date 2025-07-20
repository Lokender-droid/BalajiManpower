import React from "react";
import "./WhatMakeUsDifferent.css";
import { FaUserTie, FaBolt, FaGlobeAsia, FaBalanceScale, FaHeadset, FaTools } from "react-icons/fa";

const features = [
  {
    icon: <FaUserTie />,
    title: "Industry-Specific Recruitment Expertise",
    description:
      "We provide manpower tailored to the needs of each sector — whether it’s nursing staff, GDA caregivers, welders, security personnel, or retail helpers.",
  },
  {
    icon: <FaBolt />,
    title: "Quick Turnaround & Ready Workforce",
    description:
      "With a robust internal database and trained manpower pool, we ensure fast deployment to minimise your downtime.",
  },
  {
    icon: <FaGlobeAsia />,
    title: "Domestic & Overseas Staffing Solutions",
    description:
      "We handle local hiring across India and Gulf manpower export, especially for healthcare, technical, and construction roles.",
  },
  {
    icon: <FaBalanceScale />,
    title: "100% Statutory Compliance & Documentation",
    description:
      "We handle ESI, PF, GST, and labour law formalities — so your staffing remains fully legal and audit-safe.",
  },
  {
    icon: <FaHeadset />,
    title: "Client-First Support & Flexibility",
    description:
      "We offer dedicated account managers, flexible hiring models, and 24/7 support to keep your operations running smoothly.",
  },
  {
    icon: <FaTools />,
    title: "All Manpower Services",
    description:
      "From sourcing and screening to onboarding and replacements, we offer a full-cycle manpower solution under one roof.",
  },
];

const WhatMakeUsDifferent = () => {
  return (
    <div className="wmud-container">
      <h2 className="wmud-heading">What Makes Us Different</h2>

      <div className="wmud-grid">
        {features.map((feature, index) => (
          <div className="wmud-card" key={index}>
            <div className="wmud-icon">{feature.icon}</div>
            <div className="wmud-content">
              <h3 className="wmud-title">{feature.title}</h3>
              <p className="wmud-description">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatMakeUsDifferent;
