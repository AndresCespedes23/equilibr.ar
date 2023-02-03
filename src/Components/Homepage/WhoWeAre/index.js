import React from "react";
import styles from "./who.module.css";

const WhoWeAre = () => {
  return (
    <section id="quienes_somos" className={styles.background}>
      <h2 className={styles.title}>¿Quienes Somos?</h2>
      <div className={styles.presentation}>
        <p className={styles.text}>
          Somos un grupo de ingenieros agronomos preocupados por el deterioro de
          la fertilidad de nuestros suelo que hemos desarrollado un método de
          trabajo que permite recuperar la materia organica y disminuir el uso
          de fertilizantes y agroquímicos.
        </p>
      </div>
    </section>
  );
};

export default WhoWeAre;
