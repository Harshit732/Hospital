import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import styles from "../styles/Navbar.module.css";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbody}>
        <div className={styles.logo}></div>

        <div className={styles.menuIcon} onClick={toggleMenu}>
          <GiHamburgerMenu />
        </div>

        <div className={`${styles.hlinks} ${isOpen ? styles.active : ""}`}>
          <ul>
              <li>
              <ScrollLink to="herosection" smooth={true} duration={500}>
                <Link to={"/"}>Home</Link>
                
              </ScrollLink>
              </li>
              <li>
              <ScrollLink to="about-section" smooth={true} duration={500}>
                About Us
              </ScrollLink>
            </li>
            

            <li>
              <ScrollLink to="service-section" smooth={true} duration={500}>
                Services
              </ScrollLink>
            </li>

            
            <li>
              <ScrollLink to="doctors-section" smooth={true} duration={500}>
                Staff
              </ScrollLink>
            </li>
            
              <li>
                <ScrollLink to="herosection" smooth={true} duration={500}>
                <Link to={"/contact/"}>Contact Us</Link>
              </ScrollLink>
              </li>
            
              
            
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
