/* eslint-disable no-undef */
import React from "react";
import styles from "./header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <img
        className={styles.logo}
        src={`${process.env.PUBLIC_URL}/images/eq-logo.png`}
        alt="eq-logo"
      />
      <nav>
        <ul className={styles.navLinks}>
          <li className={styles.links}>Quienes somos</li>
          <li className={styles.links}>Servicios</li>
          <li className={styles.links}>Clientes</li>
          <li className={styles.links}>Contacto</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
