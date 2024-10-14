import React from "react";
import styles from "../styles/Footer.module.css";
import Logo from "../assets/hospitallogo.png";
import { BiLogoFacebookCircle, BiLogoGmail } from "react-icons/bi";
import { RiInstagramFill } from "react-icons/ri";
import { AiFillCopyrightCircle } from "react-icons/ai";
import { PiTrademarkFill } from "react-icons/pi";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.section1}>
          <div className={styles.logo}>
          <img src={Logo} alt="Hospital Logo" />
          </div>
          <div>
          <h2>Contact Info</h2>
         

          <div className={styles.contactDetails}>
            <p>
              <strong>Phone:</strong> +91 9000000000
            </p>
            <p>
              <strong>Email:</strong> xyz@hospital.com
            </p>
            <p>
              <strong>Address:</strong> 123 abc, xyz
            </p>
          </div>
            
          </div>
        </div>

        <div className={styles.section2}>
        <h2>Locations</h2>
          <ul>
            <li>Lucknow</li>
            <li>Delhi</li>
            <li>Mumbai</li>
            <li>Gorakhpur</li>
          </ul>
        </div>

        <div className={styles.quicklinks}>
          <h2>Quick Links</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Staff</li>
            <li>Services</li>
          </ul>
        </div>

        <div className={styles.socialmedia}>
          <h2>Follow Us..</h2>
          <ul className={styles.socialLinks}>
            <li>
              <a href="https://www.facebook.com/">
                <BiLogoFacebookCircle className={styles.icon} />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/">
                <RiInstagramFill className={styles.icon} />
              </a>
            </li>
            <li>
              <a href="mailto:harshit.sri732@gmail.com">
                <BiLogoGmail className={styles.icon} />
              </a>
            </li>
          </ul>

          <div className={styles.subscribe}>
            <h2>Subscribe to our Newsletter</h2>
            <form style={{ borderRadius: "8px" }}>
              <input
                type="email"
                placeholder="Enter your email"
                className={styles.emailInput}
              />
              <button type="submit" className={styles.subscribeButton}>
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      <hr />

      <div className={styles.section3}>
        
        <div>
          <ul className={styles.footerlinks}>
            <li>
              <a href="https://www.facebook.com/">
                <AiFillCopyrightCircle className={styles.icon2} /> Copyright
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/">
                <PiTrademarkFill className={styles.icon2} /> Trademark
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
