import React from "react";
import styles from "../styles/Hero.module.css";
import doctors from "../assets/doctors.png";
import { Link } from "react-router-dom";
import Helpline from "../components/Helpline";

function Hero() {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.content}>
          <div className={styles.headerText}>
            <div className={styles.text}>
              WE CARE ABOUT YOUR &nbsp;
            </div>
            <div className={styles.text2}>HEALTH..</div>
          </div>
          <p className={styles.description}>
            As a healthcare leader, we believe in giving back to the community.
            Through health awareness programs, free medical camps, and community
            outreach, we strive to promote healthier lifestyles and improve
            access to medical services.
          </p>
          <div>
            <Link to="/contact">
              <button className={styles.contact}>Contact Us</button>
            </Link>
            <Link to="/appointment">
              <button className={styles.appointment}>Make an Appointment</button>
            </Link>
          </div>
        </div>
        <div className={styles.images}>
          <img src={doctors} alt="Doctors" />
        </div>
        
      </div>
      
    </>
  );
}

export default Hero;
