/* eslint-disable no-undef */
import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <p className={styles.copyright}>
        Copyright © 2023 Equilibr.ar. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
