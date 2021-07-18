import './FeedbackOptions.scss'

const FeedbackOptions = ({ onLeaveFeedback }) => {
    return <div>
        <h2>Please leave feedback</h2>
        <button onClick={onLeaveFeedback}>Good</button>
        <button onClick={onLeaveFeedback}>Neutral</button>
        <button onClick={onLeaveFeedback}>Bad</button>
    </div>
}

export default FeedbackOptions