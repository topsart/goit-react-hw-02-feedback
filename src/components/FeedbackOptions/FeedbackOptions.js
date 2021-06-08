import React from "react";
// import styles from "./FeedbackOptions.module.css";

class FeedbackOptions extends React.Component {
  state = {
    value: 5,
  };

  handleIncrement = () => {
    this.setState({
      value: 6,
    });
  };
  handleDecrement = () => {
    this.setState({
      value: 4,
    });
  };

  render() {
    return (
      <>
        <div>
          <button onClick={this.handleIncrement}>Good</button>
          <button onClick={this.handleIncrement}>Neutral</button>
          <button onClick={this.handleIncrement}>Bad</button>
        </div>

        <div>
          <h1>Statistics</h1>
          <p>Good: {this.state.value}</p>
          <p>Neutral: {this.state.value}</p>
          <p>Bad: {this.state.value}</p>
        </div>
      </>
    );
  }
}

export default FeedbackOptions;
