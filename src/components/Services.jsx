import React from 'react';
import styles from '../styles/Services.module.css';
import Emergency from '../assets/Emergency.jpg';
import GenralMedicine from '../assets/GenralMedicine.jpg';
import Surgery from '../assets/Surgery.jpg';
import Pediatrics from '../assets/Pediatrics.jpg';
import Dentist from '../assets/dentist.jpg';
import Cardiology from '../assets/cardiology.jpg';
import Neurology from '../assets/neurology.jpg';
import Orthopedics from '../assets/orthopedist.jpg';
import Radiology from '../assets/radiology.jpg';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const servicesData = [
  {
    id: 1,
    title: 'Emergency Care',
    description: '24/7 emergency care with experienced professionals ready to handle critical situations.',
    icon: Emergency
  },
  {
    id: 2,
    title: 'General Medicine',
    description: 'Comprehensive general medicine services for all ages with a focus on preventative care.',
    icon: GenralMedicine
  },
  {
    id: 3,
    title: 'Surgery',
    description: 'Advanced surgical procedures with state-of-the-art technology and skilled surgeons.',
    icon: Surgery
  },
  {
    id: 4,
    title: 'Pediatrics',
    description: 'Specialized pediatric care for children with a child-friendly environment and expert care.',
    icon: Pediatrics
  },
  {
    id: 5,
    title: 'Dentist',
    description: 'Complete dental care to keep your smile happy.',
    icon: Dentist
  },
  {
    id: 6,
    title: 'Cardiology',
    description: 'Advanced heart care with specialized cardiologists and cutting-edge technology.',
    icon: Cardiology
  },
  {
    id: 7,
    title: 'Neurology',
    description: 'Expert neurological services, from diagnosis to treatment of brain and nerve disorders.',
    icon: Neurology
  },
  {
    id: 8,
    title: 'Orthopedics',
    description: 'Comprehensive orthopedic care, including sports injuries, joint replacements, and more.',
    icon: Orthopedics
  },
  {
    id: 9,
    title: 'Radiology',
    description: 'Advanced diagnostic imaging services including MRI, CT scan, and X-rays.',
    icon: Radiology
  }
];

function Services() {
  return (
    <section className={styles.services}>
      <h2>Our Services</h2>
      <hr />
      <p className={styles.subtitle}>We offer complete healthcare solutions for individuals with diverse health concerns.</p>
      <div className={styles.serviceList}>
        <Splide
          options={{
            type: 'loop', 
            perPage: 4, 
            gap: '2rem', 
            arrows: true, 
            pagination: true, 
            autoplay: true, 
            breakpoints: {
              1024: {
                perPage: 3, 
              },
              768: {
                perPage: 2, 
              },
              480: {
                perPage: 1, 
              },
            },
          }}
        >
          {servicesData.map((service) => (
            <SplideSlide key={service.id}>
              <div className={styles.serviceItem}>
                <img src={service.icon} alt={service.title} className={styles.icon} />
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  );
}

export default Services;
