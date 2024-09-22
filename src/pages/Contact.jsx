import React, { useState } from "react";
import styles from "../styles/Contact.module.css";
import { useNavigate } from "react-router-dom";

function Contact() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    Address: "",
    Service: "",
  });

  const [errors, setErrors] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    Address: "",
    Service: "",
  });

  const navigate = useNavigate(); // Use navigate for redirection

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let formErrors = {};
    let isValid = true;

    if (!formData.firstname) {
      formErrors.name = "First name is required";
      isValid = false;
    }
    if (!formData.lastname) {
      formErrors.name = "Last name is required";
      isValid = false;
    }

    if (!formData.email) {
      formErrors.email = "Email is required";
      isValid = false;
    }

    if (!formData.phone) {
      formErrors.phone = "Phone number is required";
      isValid = false;
    }

    if (!formData.Service) {
      formErrors.Service = "Consultant is required";
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      alert("Form submitted successfully!");
      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        Address: "",
        Service: "",
      });
      setErrors({});
      navigate("/"); 
    }
  };

  return (
    <div style={{ padding: "2rem 4rem" }}>
      <div className={styles.formContainer}>
        <h2 style={{textAlign:"center", fontSize: "3rem"}}>Contact Us</h2>
        <form onSubmit={handleSubmit} className={styles.contactForm}>
          <div className={styles.name}>
            <div className={styles.formGroup}>
              <label htmlFor="firstname">First Name</label>
              <input
                type="text"
                id="firstname"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && (
                <span className={styles.error}>{errors.name}</span>
              )}
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="lastname">Last Name</label>
              <input
                type="text"
                id="lastname"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && (
                <span className={styles.error}>{errors.name}</span>
              )}
            </div>
          </div>

          <div className={styles.name}>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <span className={styles.error}>{errors.email}</span>
            )}
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && (
              <span className={styles.error}>{errors.phone}</span>
            )}
          </div>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="Address">Address</label>
            <input
              id="Address"
              name="Address"
              value={formData.Service}
              onChange={handleChange}
            />
            {errors.Service && (
              <span className={styles.error}>{errors.Service}</span>
            )}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="Service">Consultant Needed</label>
            <input
              id="Service"
              name="Service"
              value={formData.Service}
              onChange={handleChange}
            />
            {errors.Service && (
              <span className={styles.error}>{errors.Service}</span>
            )}
          </div>



          <button type="submit" className={styles.submitButton}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
