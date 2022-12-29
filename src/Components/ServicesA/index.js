/* eslint-disable no-undef */
import React from "react";
import styles from "./services.module.css";

const Services = () => {
  return (
    <section className={styles.servicesBackground}>
      <h2 className={styles.title}>Servicios que brindamos</h2>
      <div className={styles.servicesContainer}>
        <img
          src={`${process.env.PUBLIC_URL}/images/services/satellite.png`}
          alt="satelite"
          className={styles.servicesImages}
        />
        <div className={styles.services}>
          <h3 className={styles.servicesTitle}>Título</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lorem
            quam, semper ac arcu non, sodales pellentesque libero. Sed mattis,
            velit ac sagittis cursus, tortor ante porttitor purus, ac rhoncus
            eros magna sed nulla. Orci varius natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus. Nam tincidunt nunc non
            enim ruaccumsan magna.
          </p>
        </div>
      </div>
      <div className={styles.servicesContainer}>
        <img
          src={`${process.env.PUBLIC_URL}/images/services/solution.png`}
          alt="solution"
          className={styles.servicesImages}
        />
        <div className={styles.services}>
          <h3 className={styles.servicesTitle}>Título</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lorem
            quam, semper ac arcu non, sodales pellentesque libero. Sed mattis,
            velit ac sagittis cursus, tortor ante porttitor purus, ac rhoncus
            eros magna sed nulla. Orci varius natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus. Nam tincidunt nunc non
            enim ruaccumsan magna.
          </p>
        </div>
      </div>
      <div className={styles.servicesContainer}>
        <img
          src={`${process.env.PUBLIC_URL}/images/services/searching.png`}
          alt="searching"
          className={styles.servicesImages}
        />
        <div className={styles.services}>
          <h3 className={styles.servicesTitle}>Título</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lorem
            quam, semper ac arcu non, sodales pellentesque libero. Sed mattis,
            velit ac sagittis cursus, tortor ante porttitor purus, ac rhoncus
            eros magna sed nulla. Orci varius natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus. Nam tincidunt nunc non
            enim ruaccumsan magna.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
