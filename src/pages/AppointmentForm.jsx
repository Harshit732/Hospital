import React, { useState } from "react";
import styles from "../styles/Contact.module.css";
import { useNavigate } from "react-router-dom";

function AppointmentForm() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    Address: "",
    date: "",  
  });

  const [errors, setErrors] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    Address: "",
    date: "",  
  });

  const navigate = useNavigate(); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let formErrors = {};
    let isValid = true;

    if (!formData.firstname) {
      formErrors.firstname = "First name is required";
      isValid = false;
    }
    if (!formData.lastname) {
      formErrors.lastname = "Last name is required";
      isValid = false;
    }

    if (!formData.email) {
      formErrors.email = "Email is required";
      isValid = false;
    }
    if (!formData.Address) {
      formErrors.Address = "Address is required";
      isValid = false;
    }

    if (!formData.phone) {
      formErrors.phone = "Phone number is required";
      isValid = false;
    }

    if (!formData.date) {  
      formErrors.date = "Preferred appointment date is required";
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
        date: "",  
      });
      setErrors({});
      navigate("/"); 
    }
  };

  return (
    <div style={{ padding: "2rem 4rem" }}>
      <div className={styles.formContainer}>
        <h2 style={{textAlign:"center", fontSize: "3rem", color:" #003366"}}>Make an Appointment</h2>
        <form onSubmit={handleSubmit} className={styles.contactForm}>
          <div className={styles.name}>
            <div className={styles.formGroup}>
              <label htmlFor="firstname">First Name</label>
              <input
                type="text"
                id="firstname"
                name="firstname"
                value={formData.firstname}
                onChange={handleChange}
              />
              {errors.firstname && (
                <span className={styles.error}>{errors.firstname}</span>
              )}
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="lastname">Last Name</label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
              />
              {errors.lastname && (
                <span className={styles.error}>{errors.lastname}</span>
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
              value={formData.Address}
              onChange={handleChange}
            />
            {errors.Address && (
                <span className={styles.error}>{errors.Address}</span>
              )}
          </div>

          
          <div className={styles.formGroup}>
            <label htmlFor="date">Preferred Appointment Date</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />
            {errors.date && (
              <span className={styles.error}>{errors.date}</span>
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

export default AppointmentForm;
