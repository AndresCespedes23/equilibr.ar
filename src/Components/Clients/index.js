/* eslint-disable no-undef */
import React from "react";
import styles from "./clients.module.css";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

const Clients = () => {
  return (
    <section id="clientes" className={styles.clientsBackground}>
      <h3 className={styles.title}>Clientes</h3>
      <div className={styles.awsCarousel}>
        <AwesomeSlider>
          <div data-src={`${process.env.PUBLIC_URL}/images/background/1.jpg`} />
          <div data-src={`${process.env.PUBLIC_URL}/images/background/2.jpg`} />
          <div data-src={`${process.env.PUBLIC_URL}/images/background/4.jpg`} />
        </AwesomeSlider>
      </div>
      <video width="320" height="240" autoPlay muted>
        Your browser does not support the video tag.
      </video>
    </section>
  );
};

export default Clients;
