import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "./loading.module.css";
import Spinner from "../Spinner";

function Loading() {
  const [isLoading, setLoading] = useState(false);
  const loadingScreen = () => {
    setTimeout(() => {
      setLoading(true);
    }, 5000);
  };
  window.addEventListener("load", loadingScreen);

  return (
    <motion.section
      transition={{ duration: 4 }}
      className={
        isLoading ? styles.modalContainerHidden : styles.modalContainer
      }
    >
      <div className={styles.modal}>
        <div className={styles.modalContent}>
          <Spinner />
        </div>
      </div>
    </motion.section>
  );
}

export default Loading;
