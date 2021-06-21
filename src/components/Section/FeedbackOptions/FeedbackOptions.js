import React from "react";
import styles from "./FeedbackOptions.module.css";

const FeedbackOptions = ({ options, onLeaveFeedback, onShow }) => (
  <ul className={styles.buttonList}>
    {
      options.map((feedback) => {
        return (
          <li className={styles.buttonItem}>
            <button
              className={styles.button}
              type="button"
              onClick={() => {
                onLeaveFeedback(
                  `${feedback[0].toLowerCase()}${feedback.slice(1)}`
                );
                onShow();
              }}
            >
              {feedback}
            </button>
          </li>
        );
      })
      /* <li className={styles.buttonItem}>
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
    </li> */
    }
  </ul>
);

export default FeedbackOptions;
