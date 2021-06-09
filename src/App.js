import React from "react";
import Section from "./components/Section/Section";
import FeedbackOptions from "./components/Section/FeedbackOptions/FeedbackOptions";
import Statistics from "./components/Section/Statistics/Statistics";
import Notification from "./components/Section/Notification/Notification";

class App extends React.Component {
  static defaultProps = {
    initialValue: 0,
  };

  state = {
    good: this.props.initialValue,
    neutral: this.props.initialValue,
    bad: this.props.initialValue,
    visible: false,
  };

  show = () => {
    this.setState({ visible: true });
  };

  handleIncrementGood = () => {
    this.setState((prevState) => ({ good: prevState.good + 1 }));
  };

  handleIncrementNeutral = () => {
    this.setState((prevState) => ({ neutral: prevState.neutral + 1 }));
  };

  handleIncrementBad = () => {
    this.setState((prevState) => ({ bad: prevState.bad + 1 }));
  };

  countTotalFeedback = () =>
    this.state.good + this.state.neutral + this.state.bad;

  countPositiveFeedbackPercentage = () =>
    Math.round((this.state.good * 100) / this.countTotalFeedback());

  render() {
    return (
      <Section title="Please leave feedback">
        <FeedbackOptions options={this} />
        <h2 className="title">Statistics</h2>
        {this.state.visible ? (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="No feedback given"></Notification>
        )}
      </Section>
    );
  }
}

export default App;
