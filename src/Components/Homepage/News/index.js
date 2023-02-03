/* eslint-disable no-undef */
import React from "react";
import styles from "./news.module.css";
import "react-awesome-slider/dist/styles.css";

const News = () => {
  return (
    <section id="novedades" className={styles.blogBackground}>
      <h3 className={styles.title}>Novedades</h3>
      <div className={styles.newsBackground}>
        <p className={styles.newsDescription}>
          Seguinos en Instagram, y enterate de nuestros nuevos proyectos y
          ultimos trabajos:
        </p>
        <a
          className={styles.linkBtn}
          href="https://www.instagram.com/cocconifernando/"
        >
          <img
            className={styles.socialMedia}
            src={`${process.env.PUBLIC_URL}/images/footer/instagram.png`}
            alt="instagram"
            target="_blank"
            rel="noopener noreferrer"
          />
        </a>
      </div>
    </section>
  );
};

export default News;
