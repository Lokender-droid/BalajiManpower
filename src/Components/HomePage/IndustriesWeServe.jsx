import React from "react";
import "./IndustriesWeServe.css";
import {
  FaWarehouse,
  FaHospitalAlt,
  FaBuilding,
  FaShieldAlt,
  FaIndustry,
  FaGlobe,
  FaHotel,
} from "react-icons/fa";
import { MdConstruction } from "react-icons/md";

const industries = [
  {
    icon: <FaWarehouse />,
    title: "Logistics & Warehouse Operations",
    description:
      "Manpower for packers, loaders, inventory staff & forklift operators in e-commerce, retail, and industrial units.",
  },
  {
    icon: <MdConstruction />,
    title: "Construction & Infrastructure",
    description:
      "Labour contractors, masons, welders, electricians, and helpers for large and small-scale construction.",
  },
  {
    icon: <FaHospitalAlt />,
    title: "Healthcare & Hospitals",
    description:
      "GDA staff, paramedics, nurses, and home care workers across India and overseas.",
  },
  {
    icon: <FaBuilding />,
    title: "Facility Management & Housekeeping",
    description:
      "Professional cleaning staff, pantry boys, and maintenance manpower for offices, malls, and societies.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Security Services",
    description:
      "Verified guards for malls, hospitals, industrial units, and residential complexes.",
  },
  {
    icon: <FaIndustry />,
    title: "Manufacturing & Industrial Units",
    description:
      "Machine operators, helpers, and technicians for factories and industrial plants.",
  },
  {
    icon: <FaGlobe />,
    title: "Overseas Placements (Gulf Focused)",
    description:
      "Nurses, technicians, and skilled trade workers for UAE, Oman, Saudi Arabia and more.",
  },
  {
    icon: <FaHotel />,
    title: "Hospitality & Retail",
    description:
      "Staff for hotels, restaurants, kitchens, and retail stores — including stewards and cleaners.",
  },
];

const IndustriesWeServe = () => {
  return (
    <section className="industry-section">
      <div className="industry-container">
        <h2 className="industry-heading"> Industries We Serve</h2>
        <div className="industry-grid">
          {industries.map((item, index) => (
            <div key={index} className="industry-card">
              <div className="industry-icon-wrapper">{item.icon}</div>
              <h3 className="industry-title">{item.title}</h3>
              <p className="industry-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesWeServe;
