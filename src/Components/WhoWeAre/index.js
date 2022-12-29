import React from "react";
import styles from "./who.module.css";

const WhoWeAre = () => {
  return (
    <section className={styles.background}>
      <h2 className={styles.title}>Quienes Somos</h2>
      <div className={styles.presentation}>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lorem
          quam, semper ac arcu non, sodales pellentesque libero. Sed mattis,
          velit ac sagittis cursus, tortor ante porttitor purus, ac rhoncus eros
          magna sed nulla. Orci varius natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus. Nam tincidunt nunc non enim
          ruaccumsan magna.
        </p>
      </div>
    </section>
  );
};

export default WhoWeAre;
