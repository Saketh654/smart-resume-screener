import '../styles/components.css'

function UploadResume({ onFileUpload }) {
  return (
    <div className="upload-container">
      <input
        type="file"
        className="file-input"
        onChange={onFileUpload}
        accept=".pdf,.doc,.docx"
      />
    </div>
  )
}

export default UploadResume
