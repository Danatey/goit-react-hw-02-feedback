import { Component } from "react";

import Statistics from "../Statistics";
import FeedbackOptions from "../FeedbackOptions";

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
        const total = this.state.good + this.state.neutral + this.state.bad;
        return total;
    };

    countFeedbackPercentage = () => {
        const percentage = Math.ceil((this.state.good * 100) / this.countTotalFeedback());
        return percentage;
    };

    render() {
        const { good, neutral, bad } = this.state;
        return (
            <>
                <FeedbackOptions
                    onLeaveFeedback={this.onLeaveFeedback}
                />
                    {this.state.good > 0 ||
                    this.state.neutral > 0 ||
                    this.state.bad > 0 ? (
                        <Statistics
                            good={good}
                            neutral={neutral}
                            bad={bad}
                            total={this.countTotalFeedback()}
                            positivePercentage={this.countFeedbackPercentage()}
                        ></Statistics>
                    ) : (
                        <p>No feedback given</p>
                    )}
            </>
        )
    }
}

export default StatisticCounter