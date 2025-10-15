import '../styles/components.css'

function JobDescription({ jobDescription, setJobDescription }) {
  return (
    <div className="job-description-container">
      <textarea
        className="job-description-textarea"
        placeholder="Paste job description here..."
        value={jobDescription}
        onChange={(e) => setJobDescription(e.target.value)}
      />
    </div>
  )
}

export default JobDescription
