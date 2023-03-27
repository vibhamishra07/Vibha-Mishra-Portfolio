import React, { useState } from "react";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import { Box } from "@mui/material";

const ScrollArrow = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 300) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 300) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.addEventListener("scroll", checkScrollTop);

  return (
    <div
      style={{
        position: "fixed",
        zIndex: "1000",
        bottom: "5%",
        padding:"10px",
        backgroundColor: "yellow",
        right: "5%",
        borderRadius: "30px",
        boxShadow: "#eff697 1px 2px 12px",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        opacity: "1",
        display: showScroll ? "flex" : "none",
       
      }}
      data-aos="fade-up"
    >
      <KeyboardDoubleArrowUpIcon className="scrollTop" fontSize="large" onClick={scrollTop} style={{color:"black"}}/>
    </div>
  );
};

export default ScrollArrow;
