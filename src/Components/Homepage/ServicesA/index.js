/* eslint-disable no-undef */
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import styles from "./services.module.css";

const Services = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section id="servicios" className={styles.servicesBackground}>
      <h2 className={styles.title}>Servicios que brindamos</h2>
      <div className={styles.servicesContainer} data-aos="zoom-in">
        <img
          src={`${process.env.PUBLIC_URL}/images/services/satellite.png`}
          alt="satelite"
          className={styles.servicesImages}
        />
        <div className={styles.services}>
          <h3 className={styles.servicesTitle}>Mapeo de campo</h3>
          <p className={styles.servicesText}>
            Mediante análisis de cromatografía plana determinamos el contenido
            de materia orgánica y su relación con los microorganismos del suelo
            y la solubilidad de los minerales presentes.
          </p>
        </div>
      </div>
      <div className={styles.servicesContainer} data-aos="zoom-in">
        <img
          src={`${process.env.PUBLIC_URL}/images/services/solution.png`}
          alt="solution"
          className={styles.servicesImages}
        />
        <div className={styles.services}>
          <h3 className={styles.servicesTitle}>Bioregeneración</h3>
          <p className={styles.servicesText}>
            Mediante el agregado de sustancias naturales mejoramos la fertilidad
            de los suelos y disminuimos el consumo de agroquímicos y
            fertilizantes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
