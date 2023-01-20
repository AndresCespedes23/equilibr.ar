/* eslint-disable no-undef */
import React from "react";
import styles from "./news.module.css";
import "react-awesome-slider/dist/styles.css";
import { Link } from "react-router-dom";

const News = () => {
  return (
    <section id="novedades" className={styles.blogBackground}>
      <h3 className={styles.title}>Novedades</h3>
      <div className={styles.newsBackground}>
        <p className={styles.newsDescription}>
          Enterate de nuestros nuevos proyectos y ultimos trabajos
        </p>
        <button className={styles.newsBtn}>
          <Link className={styles.linkBtn} to="/blog">
            Ver Novedades
          </Link>
        </button>
      </div>
    </section>
  );
};

export default News;
