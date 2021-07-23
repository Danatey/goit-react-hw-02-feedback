import { Component } from "react";

import Statistics from "../Statistics";
import FeedbackOptions from "../FeedbackOptions";
import Section from "../Section/Section";

import btnOptions from "../../options.json"

class StatisticCounter extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = event => {
  const currValue = event.target.outerText;
  
  if (currValue==="Good") {
      this.setState(prevState => ({
        good: prevState.good + 1,
      }));
      return;
    }
    if (currValue==="Neutral") {
      this.setState(prevState => ({
        neutral: prevState.neutral + 1,
      }));
      return;
    }
    if (currValue==="Bad") {
      this.setState(prevState => ({
        bad: prevState.bad + 1,
      }));
      return;
    }
  };
  
  countTotalFeedback = () => {
      return this.state.good + this.state.neutral + this.state.bad;
  };

  countFeedbackPercentage = () => {
      return Math.ceil((this.state.good * 100) / this.countTotalFeedback());
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            onLeaveFeedback={this.onLeaveFeedback}
            options = {btnOptions}
        />
        </Section>
        <Section title="Statistics overview">
          {this.state.good > 0 ||
          this.state.neutral > 0 ||
          this.state.bad > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countFeedbackPercentage()}
            />
          ) : (
            <p>No feedback given</p>
          )}
          </Section>
      </>
    )
  }
}

export default StatisticCounter