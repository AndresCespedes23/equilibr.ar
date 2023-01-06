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
          <li>
            <a className={styles.links} href="#quienes_somos">
              Quienes somos
            </a>
          </li>
          <li>
            <a className={styles.links} href="#servicios">
              Servicios
            </a>
          </li>
          <li>
            <a className={styles.links} href="#clientes">
              Clientes
            </a>
          </li>
          <li>
            <a className={styles.links} href="#contacto">
              Contacto
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
