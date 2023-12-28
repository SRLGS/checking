// ScrollToTopButton.js
import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import "./index.css"; 

const UpArrow= () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
   
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
  
    window.addEventListener("scroll", toggleVisibility);
   
    return () => {
       
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };



  return isVisible ? (
    <div className="scroll-to-top-button" onClick={scrollToTop}>
      <FaArrowUp />
    </div>
  ) : null;
};

export default UpArrow;
