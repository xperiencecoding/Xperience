import React, { useState, useEffect } from "react";
import "../../scss/core.scss";
import "../../scss/layout.scss";
import { motion } from "framer-motion";
import Brand from "../generic/Brand";
import { useScreen } from "../generic/ScreenContext";
import { useTheme } from "../generic/ThemeContext";
import { useLocation, useNavigate } from "react-router-dom";

const data = [
  ["Education", "/coding"],
  ["Consulting", "/consulting"],
  ["Projects", "/projects"],
  ["Team", "/team"],
  ["Form", "/form"]
];

function Navigation(props: {}) {
  const screen = useScreen();
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const [hovering, setHovering] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <motion.div
      className="apex-navigation"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      animate={
        (scrollY === 0 || hovering) ? { top: "0%" } : { top: "-5rem" }
      }
      initial={{ top: "-5rem" }}
      exit={{ top: "-5rem" }}
    >
      <Brand />
      <button className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={handleMenuToggle}>
        <div />
        <div />
        <div />
      </button>
      <div className={`buttons ${menuOpen ? 'open' : ''} oxanium bold row-cc`}>
        {data.map((v, i) => (
          <motion.div
            tabIndex={0}
            className="h3"
            key={i}
            whileHover={{ boxShadow: "0 0 1rem white" }}
            onClick={() => {
              if (location.pathname !== v[1]) {
                theme.setLoadState(-3);
                setTimeout(() => {
                  theme.setFullscreen(false);
                  navigate(v[1]);
                  setMenuOpen(false); // Close menu on navigation
                }, 500);
              }
            }}
          >
            {v[0]}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Navigation;