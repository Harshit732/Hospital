import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import styles from "../styles/Staff.module.css";
import doctor1 from "../assets/doctor1.jpg";
import doctor2 from "../assets/doctor2.jpg";
import doctor3 from "../assets/doctor3.jpg";
import doctor4 from "../assets/doctor4.jpeg";
import doctor5 from "../assets/doctor5.jpeg";

const doctors = [
  {
    name: "Dr. Emily",
    specialty: "Cardiology",
    qualification: "MD, PhD",
    image: doctor1,
    description:
      "Dr. Emily is a leading cardiologist with over 10 years of experience in treating heart conditions. She specializes in preventive cardiology and cardiac rehabilitation.",
  },
  {
    name: "Dr. John",
    specialty: "Orthopedics",
    qualification: "MS, FRCS",
    image: doctor2,
    description:
      "Dr. John is an expert in orthopedic surgery with a focus on joint replacement and sports injuries. He has treated athletes and patients with complex orthopedic cases.",
  },
  {
    name: "Dr. Olivia",
    specialty: "Neurology",
    qualification: "MD, DM",
    image: doctor3,
    description:
      "Dr. Olivia specializes in neurological disorders such as epilepsy, Parkinson’s disease, and multiple sclerosis. Her compassionate care has helped many patients manage chronic conditions.",
  },
  {
    name: "Dr. Ravi",
    specialty: "Pediatrics",
    qualification: "MBBS, DCH",
    image: doctor4,
    description:
      "Dr. Ravi is a pediatrician who has dedicated his career to the health and wellness of children. He provides expert care in child development and common pediatric diseases.",
  },
  {
    name: "Dr. Sarah",
    specialty: "Dermatology",
    qualification: "MD, FAAD",
    image: doctor5,
    description:
      "Dr. Sarah is a board-certified dermatologist with a passion for treating skin conditions ranging from acne to psoriasis. She also specializes in cosmetic dermatology.",
  },
];

function Staff() {
  const [flippedCards, setFlippedCards] = useState(new Array(doctors.length).fill(false));

  const handleFlip = (index) => {
    const updatedFlippedCards = [...flippedCards];
    updatedFlippedCards[index] = !updatedFlippedCards[index];
    setFlippedCards(updatedFlippedCards);
  };

  return (
    <div className={styles.staffContainer}>
      <h2 className={styles.staffHeader}>Meet Our Doctors</h2>
      <hr />
      <div className={styles.staffGrid}>
        {doctors.map((doctor, index) => (
          <ReactCardFlip
            isFlipped={flippedCards[index]}
            flipDirection="horizontal"
            key={index}
          >
            <div className={styles.front}>
              <img
                src={doctor.image}
                alt={doctor.name}
                className={styles.staffImage}
              />
              <h3 className={styles.staffName}>{doctor.name}</h3>
              <p className={styles.staffSpecialty}>{doctor.specialty}</p>
              <p className={styles.staffSpecialty}>
                <strong>Qualification:</strong> {doctor.qualification}
              </p>
              <button
                className={styles.readMoreBtn}
                onClick={() => handleFlip(index)}
              >
                Read More
              </button>
            </div>

            <div className={styles.back}>
              <p className={styles.staffDescription}>{doctor.description}</p>
              <button
                className={styles.showLessBtn}
                onClick={() => handleFlip(index)}
              >
                Show Less
              </button>
            </div>
          </ReactCardFlip>
        ))}
      </div>
    </div>
  );
}

export default Staff;
