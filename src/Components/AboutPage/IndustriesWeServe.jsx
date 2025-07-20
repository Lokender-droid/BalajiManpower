import React from "react";
import {
  FaHardHat,
  FaHospitalAlt,
  FaShieldAlt,
  FaBroom,
  FaIndustry,
  FaTruckMoving,
  FaConciergeBell,
  FaGlobe,
} from "react-icons/fa";
import { motion } from "framer-motion";
import "./IndustriesWeServe.css";

const industries = [
  { icon: <FaHardHat />, title: "Construction & Infrastructure" },
  { icon: <FaHospitalAlt />, title: "Healthcare & Hospitals (GDA, Nurses)" },
  { icon: <FaShieldAlt />, title: "Security & Facility Management" },
  { icon: <FaBroom />, title: "Housekeeping & Commercial Cleaning" },
  { icon: <FaIndustry />, title: "Manufacturing & Factory Units" },
  { icon: <FaTruckMoving />, title: "Logistics & Warehouse Operations" },
  { icon: <FaConciergeBell />, title: "Hospitality & Retail" },
  { icon: <FaGlobe />, title: "Gulf Placement & Overseas Staffing" },
];

const IndustriesWeServe = () => {
  return (
    <section className="industries-we-section">
      <h2 className="industries-we-title">Industries We Serve</h2>
      <div className="industries-we-grid">
        {industries.map((item, index) => (
          <motion.div
            key={index}
            className="industry-we-card"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="industry-we-icon"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {item.icon}
            </motion.div>
            <h3 className="industry-we-name">{item.title}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default IndustriesWeServe;
