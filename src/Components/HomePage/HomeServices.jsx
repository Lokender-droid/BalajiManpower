import React from "react";
import "./HomeServices.css";
import { FaUserTie } from "react-icons/fa";
import { MdEngineering } from "react-icons/md";
import { FaUserShield, FaUserNurse, FaGlobe } from "react-icons/fa";
import { GiBrickPile } from "react-icons/gi";
import { FaPeopleCarry } from "react-icons/fa";

// Replace with your image imports
import service1 from "../../assets/Homepage Assets/Services/Services1.jpeg";
import service2 from "../../assets/Homepage Assets/services/services2.jpeg";
import service3 from "../../assets/Homepage Assets/services/services3.jpeg";
import service4 from "../../assets/Homepage Assets/services/services4.jpeg";

const services = [
  {
    icon: <MdEngineering />,
    title: "Skilled & Unskilled Manpower Supply",
    description:
      "Hire certified electricians, welders, fitters, loaders, helpers, and construction labor on short or long-term contracts. We offer industrial and construction manpower PAN India.",
    keywords:
      "construction labour supply, skilled manpower in Faridabad, unskilled worker provider",
    image: service1,
  },
  {
    icon: <FaUserShield />,
    title: "Housekeeping & Security Staff",
    description:
      "We offer contract-based housekeeping and security guard services for malls, hospitals, residential complexes, and offices.",
    keywords:
      "housekeeping staff provider in Delhi NCR, security manpower agency, Faridabad",
    image: service2,
  },
  {
    icon: <FaUserNurse />,
    title: "GDA & Nursing Staff",
    description:
      "Get trained GDA staff, home caregivers, and qualified nurses for hospitals, elder care, and home visits. We also provide nursing recruitment services for Gulf placements.",
    keywords:
      "GDA manpower supplier, nursing recruitment agency, healthcare staffing in India",
    image: service3,
  },
  {
    icon: <FaGlobe />,
    title: "International Manpower Export",
    description:
      "We are a trusted overseas manpower consultancy, providing skilled professionals for the UAE, Saudi Arabia, Oman, and other Gulf countries — especially in nursing and technical trades.",
    keywords:
      "manpower export agency India, nurse hiring for the Gulf, international labour provider",
    image: service4,
  },
];

const HomeServices = () => {
  return (
    <section className="home-services">
      <h2 className="section-title">Our Services</h2>
      <div className="services-container">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="image-wrapper">
              <img src={service.image} alt={service.title} />
              <div className="icon-overlay">{service.icon}</div>
            </div>

            <div className="service-content">
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <p className="service-keywords">{service.keywords}</p>
            </div>

            <button className="service-button">Read More</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeServices;
