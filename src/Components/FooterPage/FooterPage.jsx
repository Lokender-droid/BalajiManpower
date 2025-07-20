import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import "./FooterPage.css";
import logo from "../../assets/Main-Logo/BalajiMainLogo.png";

const footerSections = [
  {
    title: "Company",
    links: [
      { name: "About Us", path: "/about" },
      { name: "Clients", path: "/clients" },
      { name: "Contact Us", path: "/contact-us" },
    ],
  },
  {
    title: "Services",
    links: [
      { name: "Manpower Services", path: "/services/manpower" },
      { name: "Housekeeping / GDA / Security", path: "/services/housekeeping" },
      { name: "International Nursing", path: "/services/nursing" },
    ],
  },
  {
    title: "Quick Links",
    links: [
      { name: "Consultancy in Delhi", path: "/manpower/delhi" },
      { name: "Consultancy in Gurgaon", path: "/manpower/gurgaon" },
      { name: "Consultancy in Noida", path: "/manpower/noida" },
      { name: "Consultancy in Pune", path: "/manpower/pune" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="glass-footer">
      <div className="footer-container">
        <div className="footer-logo-section animate-slide-in">
          <Link to="/" className="footer-logo-link">
            <img src={logo} alt="Balaji Manpower" className="footer-logo-img" />
          </Link>
          <p><FaMapMarkerAlt /> Office No. 17-18, UG Floor, SRS Tower, Sec-31, Faridabad</p>
          <p><FaPhoneAlt /> +91-9212362488</p>
          <p><FaEnvelope /> <a href="mailto:info@balajimanpower.com">info@balajimanpower.com</a></p>
          <div className="footer-socials">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaYoutube /></a>
          </div>
        </div>

        {footerSections.map((section, index) => (
          <div key={index} className="footer-links animate-fade-in">
            <h3>{section.title}</h3>
            <ul>
              {section.links.map((link, i) => (
                <li key={i}><Link to={link.path}>{link.name}</Link></li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="footer-bottom">
        <p>© 2025 Balaji Manpower Recruitment Pvt. Ltd. — All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
