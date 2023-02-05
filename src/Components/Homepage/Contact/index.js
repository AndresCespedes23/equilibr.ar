import React from "react";
import styles from "./contact.module.css";

const Contact = () => {
  return (
    <section id="contacto" className={styles.contactBackground}>
      <h3 className={styles.title}>¿Cómo podemos ayudarte?</h3>
      <form
        className={styles.form}
        action="https://formsubmit.co/info@equilibr.ar"
        method="POST"
      >
        <input
          className={styles.name}
          type="text"
          name="Nombre Completo"
          placeholder="Escriba su nombre completo"
          required
        />
        <input
          className={styles.email}
          type="email"
          name="Email"
          placeholder="Escriba su mail"
          required
        />
        <input
          className={styles.location}
          type="text"
          name="Residencia"
          placeholder="¿Cuál es su residencia?"
          required
        />
        <textarea
          className={styles.textArea}
          rows={5}
          cols={25}
          type="text"
          name="Mensaje"
          placeholder="Deje su mensaje aquí"
          required
        ></textarea>
        <button className={styles.submitBtn} type="submit">
          ENVIAR
        </button>
      </form>
    </section>
  );
};

export default Contact;
