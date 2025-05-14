import React, { useState, useEffect} from "react";
import { FaBars, FaReact } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import {ReactComponent as MenuIcon} from "../../logo.svg"
import { Link, useLocation } from "react-router-dom";
import "./style.scss";

const data = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "About",
    to: "/about",
  },
  // {
  //   label: "Skills",
  //   to: "/skills",
  // },
  {
    label: "Awards",
    to: "/awards",
  },

  {
    label: "Projects",
    to: "/projects",
  },
  {
    label: "Contact",
    to: "/contact",
  },
];

const Navbar = () => {
  const [toggleIcon, setToggleIcon] = useState(false);
  const location = useLocation(); // <-- ADD THIS
  const [isMobile, setIsMobile] = useState(false);

  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon);
  };

  useEffect(() => {
    setToggleIcon(false);
  }, [location]);

  useEffect(() => {
    const updateMobileView = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    // Check on mount
    updateMobileView();
    
    // Listen to resize event
    window.addEventListener("resize", updateMobileView);

    // Clean up event listener
    return () => {
      window.removeEventListener("resize", updateMobileView);
    };
  }, []);


  return (
    <div>
      <nav className="navbar">
        <div className="navbar__container">
          <Link to="/" className="navbar__container__logo">
            <MenuIcon size={60} />
          </Link>
          <div className="nav-icon" onClick={handleToggleIcon}>
            {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
          </div>

          {/* Conditional Rendering: if not mobile, <ul> stays inside */}
          {!isMobile && (
            <ul className="navbar__container__menu">
              {data.map((item, key) => (
                <li key={key} className="navbar__container__menu__item">
                  <Link
                    className="navbar__container__menu__item__links"
                    to={item.to}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* For mobile view, <ul> is outside the container and controlled by the toggle */}
        {isMobile && (
          <ul className={`navbar__container__menu ${toggleIcon ? "active" : ""}`}>
            {data.map((item, key) => (
              <li key={key} className="navbar__container__menu__item">
                <Link
                  className="navbar__container__menu__item__links"
                  to={item.to}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
