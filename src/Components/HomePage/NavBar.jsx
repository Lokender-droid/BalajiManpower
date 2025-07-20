import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/Main-Logo/BalajiMainLogo.png";

// Menu Links Array with Dropdowns
const menuLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  {
    name: "Services",
    path: "#",
    dropdown: [
      { name: "Manpower Services", path: "/services/ManpowerServices" },
      { name: "Housekeeping / GDA / Security", path: "/services/HouseKeepingGDASecurity" },
      { name: "International Nursing", path: "/services/InternationalNursing" },
    ],
  },
  { name: "Contact", path: "/contact-us" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeAll = () => {
    setMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <Link to="/" className="nav-logo" onClick={closeAll}>
            <img src={logo} alt="Balaji Manpower" />
          </Link>

          {/* Desktop Menu */}
          <ul className="nav-links">
            {menuLinks.map((link, index) => (
              <li
                key={index}
                className={`nav-item ${link.dropdown ? "has-dropdown" : ""}`}
                onMouseEnter={() => setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={link.path}
                  className="nav-link"
                  onClick={closeAll}
                >
                  {link.name} {link.dropdown && "▾"}
                </Link>

                {link.dropdown && (
                  <ul
                    className={`dropdown ${
                      activeDropdown === link.name ? "show" : ""
                    }`}
                  >
                    {link.dropdown.map((sublink, subIndex) => (
                      <li key={subIndex}>
                        <Link to={sublink.path} onClick={closeAll}>
                          {sublink.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          {/* Hamburger */}
          <div className="hamburger" onClick={toggleMenu}>
            <div className={`bar ${menuOpen ? "open" : ""}`}></div>
            <div className={`bar ${menuOpen ? "open" : ""}`}></div>
            <div className={`bar ${menuOpen ? "open" : ""}`}></div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
          {menuLinks.map((link, index) => (
            <div key={index} className="mobile-item">
              <Link
                to={link.path}
                onClick={closeAll}
                className="mobile-link"
              >
                {link.name}
              </Link>
              {link.dropdown && (
                <div className="mobile-dropdown">
                  {link.dropdown.map((sublink, subIndex) => (
                    <Link
                      key={subIndex}
                      to={sublink.path}
                      onClick={closeAll}
                      className="mobile-sublink"
                    >
                      {sublink.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </nav>
      {menuOpen && <div className="overlay" onClick={closeAll}></div>}
    </>
  );
};

export default Navbar;
