import React from "react";
import styles from "./contact.module.css";

const Contact = () => {
  return (
    <section id="contacto" className={styles.contactBackground}>
      <h3 className={styles.title}>Cómo podemos ayudarte?</h3>
      <form className={styles.form}>
        <input className={styles.name} placeholder="Nombre completo" />
        <input className={styles.email} placeholder="Email" />
        <input className={styles.location} placeholder="Ubicación" />
        <textarea
          className={styles.textArea}
          rows={5}
          cols={50}
          placeholder="Deje su mensaje aquí"
        ></textarea>
        <button className={styles.submitBtn} type="submit">
          ENVIAR
        </button>
      </form>
    </section>
  );
};

export default Contact;
