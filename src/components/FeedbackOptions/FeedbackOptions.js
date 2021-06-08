import React from "react";
import styles from "./FeedbackOptions.module.css";

class FeedbackOptions extends React.Components {
  render() {
    return (
      <>
        <button>Good</button>
        <button>Neutral</button>
        <button>Bad</button>
      </>
    );
  }
}

export default FeedbackOptions;
