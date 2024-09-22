import React from "react";
import styles from "../styles/About.module.css";
import About1 from "../assets/About1.jpg";
import About2 from "../assets/About2.jpg";
import About3 from "../assets/About3.jpg";

function About() {
  return (
    <div className={styles.aboutContainer}>
      <header className={styles.aboutHeader}>
        <h1>About Us</h1>
        <hr />
      </header>

      <section className={styles.aboutSection}>
        <div className={styles.aboutImage}>
          <img src={About1} alt="Our Hospital" />
        </div>
        <div className={styles.aboutSectionContent}>
          <h2>Welcome to Health Care</h2>
          <p>
            At Health Care, we are committed to providing world-class healthcare
            services with a compassionate approach. Our state-of-the-art
            facilities, cutting-edge medical technology, and highly skilled
            medical professionals ensure that you receive the best possible
            care, every step of the way.
          </p>
        </div>
      </section>

      <section className={styles.aboutSection}>
        <div className={styles.aboutSectionContent}>
          <h2>Our Mission</h2>
          <p>
            Our mission is to deliver world-class healthcare with compassion and
            dignity. We aim to promote well-being and healthier lifestyles
            through patient-centered care, cutting-edge technology, and
            innovative treatments.
          </p>
        </div>
        <div className={styles.aboutImage}>
          <img src={About2} alt="Our Mission" />
        </div>
      </section>

      <section className={styles.aboutSection}>
        <div className={styles.aboutImage}>
          <img src={About3} alt="Our Values" />
        </div>
        <div className={styles.aboutSectionContent}>
          <h2>Our Values</h2>
          <ul className={styles.aboutValuesList}>
            <li>
              <strong>Compassionate Care: </strong> Providing empathetic and
              personalized support to meet the emotional and physical needs of
              every patient.
            </li>
            <li>
              <strong>Patient-Centered Approach: </strong> Focusing on the
              individual needs and preferences of patients to guide all aspects
              of their care.
            </li>
            <li>
              <strong>Cutting-Edge Medical Technologies: </strong>Utilizing the
              latest innovations to offer the most effective diagnosis and
              treatment.
            </li>
            <li>
              <strong>Community Outreach & Education: </strong>Promoting health
              awareness, provide resources, and empower individuals through
              education.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default About;
