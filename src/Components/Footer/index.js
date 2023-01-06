/* eslint-disable no-undef */
import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div>
        <img
          className={styles.socialMedia}
          src={`${process.env.PUBLIC_URL}/images/footer/instagram.png`}
          alt="instagram"
        />
        <img
          className={styles.socialMedia}
          src={`${process.env.PUBLIC_URL}/images/footer/linkedin.png`}
          alt="linkedin"
        />
      </div>
      <p className={styles.copyright}>
        Copyright © 2022 Equilibr.ar. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
