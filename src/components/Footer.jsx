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
          <img className={styles.logo} src={Logo} alt="Hospital Logo" />
          <h1>"WE CARE.."</h1>
        </div>

        <div className={styles.quicklinks}>
          <ul>
            <h1>Quick Links</h1>
            <li>Home</li>
            <li>About Us</li>
            <li>Staff</li>
            <li>Services</li>
          </ul>
        </div>

        <div className={styles.section2}>
          <h2>Contact Info</h2>
          <p>
            Have questions or need assistance? <br />
            <strong>Contact us:</strong>
          </p>
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

        <div className={styles.socialmedia}>
          <h2>Follow Us..</h2>
          <ul className={styles.socialLinks}>
            <li>
              <a href="https://www.facebook.com/">
                <BiLogoFacebookCircle className={styles.icon} /> Facebook
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/">
                <RiInstagramFill className={styles.icon} /> Instagram
              </a>
            </li>
            <li>
              <a href="mailto:harshit.sri732@gmail.com">
                <BiLogoGmail className={styles.icon} /> Gmail
              </a>
            </li>
          </ul>

          
          <div className={styles.subscribe}>
            <h2>Subscribe to our Newsletter</h2>
            <form style={{borderRadius:"8px"}}>
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
        <ul className={styles.footerlinks}>
          <li>
            <a href="https://www.facebook.com/">
              <AiFillCopyrightCircle className={styles.icon} /> Copyright
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/">
              <PiTrademarkFill className={styles.icon} /> Trademark
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
