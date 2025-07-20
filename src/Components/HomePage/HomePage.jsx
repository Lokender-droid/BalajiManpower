import React, { useEffect, useRef, useState } from "react";
import "./HomePage.css";
import slide1 from "../../assets/Homepage Assets/slider1.jpg";
import { gsap } from "gsap";
import HomeAbout from "./HomeAbout";
import WhyChooseUs from "./WhyChooseUs";
import HomeServices from "./HomeServices";
import IndustriesWeServe from "./IndustriesWeServe";

const slides = [
  {
    image: slide1,
    heading: "Elevate Your Business with Dynamic Manpower Services",
    buttonText: "Explore Services",
  },
];

const HomePage = () => {
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const [typedText, setTypedText] = useState("");
  const heading = slides[0].heading;
  const { image, buttonText } = slides[0];

  useEffect(() => {
    // Background zoom animation
    gsap.fromTo(
      heroRef.current,
      { scale: 1.1 },
      { scale: 1, duration: 3, ease: "power2.out" }
    );

    // Fade-in and slide up content
    gsap.fromTo(
      contentRef.current,
      {
        opacity: 1,
        y: 40,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        delay: 0.5,
        ease: "power3.out",
      }
    );
  }, []);

  useEffect(() => {
    let i = 0;
    const typeWriter = () => {
      if (i <= heading.length) {
        setTypedText(heading.substring(0, i));
        i++;
        setTimeout(typeWriter, 50);
      }
    };
    setTypedText("");
    typeWriter();
    return () => setTypedText("");
  }, [heading]);

  return (
    <>
      <div
        className="hero-section enhanced"
        style={{ backgroundImage: `url(${image})` }}
        ref={heroRef}
      >
        <div className="overlay enhanced-overlay">
          <div className="hero-content glass-panel" ref={contentRef}>
            <h1 className="typing-text">{typedText}</h1>
            <button className="hero-button pulse"> {buttonText} </button>
          </div>
        </div>
      </div>

      <div>
        <HomeAbout/>
      </div>

      <div>
        <WhyChooseUs/>
      </div>

    <div>
      <HomeServices/>
    </div>
    <div>
      <IndustriesWeServe/>
    </div>
      
    </>
  );
};

export default HomePage;
