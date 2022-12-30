import React from "react";
import styles from "./contact.module.css";

const Contact = () => {
  return (
    <section className={styles.contactBackground}>
      <h3 className={styles.title}>Cómo podemos ayudarte?</h3>
      <form className={styles.form}>
        <input placeholder="Nombre completo" />
        <input placeholder="Email" />
        <textarea
          rows={10}
          cols={40}
          placeholder="Deje su mensaje aquí"
        ></textarea>
      </form>
    </section>
  );
};

export default Contact;
