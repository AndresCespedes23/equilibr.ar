/* eslint-disable no-undef */
import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Shared/Footer";
import styles from "./blog.module.css";

const Blog = () => {
  return (
    <section className={styles.blogBackground}>
      <header className={styles.header}>
        <nav>
          <ul>
            <Link to="/">
              <img
                className={styles.logo}
                src={`${process.env.PUBLIC_URL}/images/eq-logo.png`}
                alt="eq-logo"
              />
            </Link>
          </ul>
        </nav>
      </header>
      <h2 className={styles.title}>Novedades</h2>
      <div className={styles.feed}>
        <div className={styles.publication}>
          <h2>Titulo</h2>
          <p>22/01/23</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lorem
            quam, semper ac arcu non, sodales pellentesque libero. Sed mattis,
            velit ac sagittis cursus, tortor ante porttitor purus, ac rhoncus
            eros magna sed nulla. Orci varius natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus. Nam tincidunt nunc non
            enim ruaccumsan magna.
          </p>
          <img
            className={styles.logo}
            src={`${process.env.PUBLIC_URL}/images/eq-logo.png`}
            alt="eq-logo"
          />
        </div>
        <div className={styles.publication}>
          <h2>Titulo</h2>
          <p>22/01/23</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lorem
            quam, semper ac arcu non, sodales pellentesque libero. Sed mattis,
            velit ac sagittis cursus, tortor ante porttitor purus, ac rhoncus
            eros magna sed nulla. Orci varius natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus. Nam tincidunt nunc non
            enim ruaccumsan magna.
          </p>
          <img
            className={styles.logo}
            src={`${process.env.PUBLIC_URL}/images/eq-logo.png`}
            alt="eq-logo"
          />
        </div>
        <div className={styles.publication}>
          <h2>Titulo</h2>
          <p>22/01/23</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lorem
            quam, semper ac arcu non, sodales pellentesque libero. Sed mattis,
            velit ac sagittis cursus, tortor ante porttitor purus, ac rhoncus
            eros magna sed nulla. Orci varius natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus. Nam tincidunt nunc non
            enim ruaccumsan magna.
          </p>
          <img
            className={styles.logo}
            src={`${process.env.PUBLIC_URL}/images/eq-logo.png`}
            alt="eq-logo"
          />
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Blog;
