import React from "react";
import styles from "./FeedbackOptions.module.css";

const FeedbackOptions = ({ options }) => (
  <ul className={styles.buttonList}>
    <li className={styles.buttonItem}>
      <button
        className={styles.button}
        type="button"
        onClick={() => {
          options.handleIncrementGood();
          options.show();
        }}
      >
        Good
      </button>
    </li>
    <li className={styles.buttonItem}>
      <button
        className={styles.button}
        type="button"
        onClick={() => {
          options.handleIncrementNeutral();
          options.show();
        }}
      >
        Neutral
      </button>
    </li>
    <li className={styles.buttonItem}>
      <button
        className={styles.button}
        type="button"
        onClick={() => {
          options.handleIncrementBad();
          options.show();
        }}
      >
        Bad
      </button>
    </li>
  </ul>
);

export default FeedbackOptions;
