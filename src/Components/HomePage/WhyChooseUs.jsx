import React from "react";
import { motion } from "framer-motion";
import {
  FaUsers,
  FaShippingFast,
  FaUserNurse,
  FaShieldAlt,
  FaClipboardCheck,
  FaMapMarkedAlt,
  FaGlobe,
  FaBriefcase
} from "react-icons/fa";
import "./WhyChooseUs.css";

const features = [
  { icon: <FaUsers />, text: "Trusted manpower agency in Faridabad with 10+ years of experience" },
  { icon: <FaShippingFast />, text: "Quick supply of skilled and unskilled labour for industrial and service sectors" },
  { icon: <FaUserNurse />, text: "Specialized in GDA staff, nurses, and healthcare staffing solutions" },
  { icon: <FaShieldAlt />, text: "Verified housekeeping staff and security guard services" },
  { icon: <FaClipboardCheck />, text: "100% compliance with ESI, PF, GST, and labour regulations" },
  { icon: <FaMapMarkedAlt />, text: "Vast network serving Delhi NCR, Noida, Gurgaon, and PAN India" },
  { icon: <FaGlobe />, text: "Proven expertise in manpower export to Gulf countries like UAE & Oman" },
  { icon: <FaBriefcase />, text: "We provide manpower as a business asset — our workers deliver performance, productivity, and value from day one" },
];


// Parent: Stagger children when section comes into view
const gridVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 }
  }
};

// Each card: fade + lift
const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  show:   { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: "easeOut" } }
};

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us-section">
      <motion.h2
        className="why-choose-us-heading"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
      >
        Why Choose Us
      </motion.h2>

      <motion.div
        className="features-grid"
        variants={gridVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {features.map((f, i) => (
          <motion.div
            key={i}
            className="feature-box"
            variants={cardVariants}
            whileHover={{
              scale: 1.04,
              boxShadow: "0 12px 28px rgba(0,0,0,0.20)"
            }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="feature-icon-wrapper">
              <span className="feature-icon">{f.icon}</span>
              <span className="feature-icon-ping" />
            </div>
            <p>{f.text}</p>
          </motion.div>
        ))}
      </motion.div>

    </section>
  );
};

export default WhyChooseUs;
