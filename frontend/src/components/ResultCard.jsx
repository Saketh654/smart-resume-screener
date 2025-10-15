import '../styles/components.css'

function ResultCard({ score, feedback }) {
  return (
    <div className="result-card">
      <h2 className="result-title">Match Score: {score}/10</h2>
      <div className="result-feedback">
        <h3 className="feedback-title">Feedback:</h3>
        <p className="feedback-text">{feedback}</p>
      </div>
    </div>
  )
}

export default ResultCard
