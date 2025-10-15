import { useState } from "react";
import "./App.css";
import JobDescription from "./components/JobDescription";
import UploadResume from "./components/UploadResume";
import ResultCard from "./components/ResultCard";
import { analyzeResume } from "./api";

function App() {
  const [jobDescription, setJobDescription] = useState("");
  const [score, setScore] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    try {
      setIsLoading(true);
      const formData = new FormData();
      formData.append("resume", file);
      formData.append("jobDescription", jobDescription);

      const result = await analyzeResume(formData);
      setScore(result.score);
      setFeedback(result.feedback);
    } catch (error) {
      console.error("Error analyzing resume:", error);
      setFeedback("Error analyzing resume. Please try again.");
      setScore(null);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="app-container">
      <header className="header">
        <h1 className="title">Smart Resume Screener</h1>
        <p className="subtitle">
          Upload your resume and job description to get instant feedback
        </p>
      </header>

      <main>
        <section className="section">
          <JobDescription
            jobDescription={jobDescription}
            setJobDescription={setJobDescription}
          />
        </section>

        <section className="section">
          <UploadResume onFileUpload={handleFileUpload} />
        </section>

        {isLoading && (
          <div className="loading-container">
            <div className="loading-spinner"></div>
            <p>Analyzing resume...</p>
          </div>
        )}

        {score !== null && !isLoading && (
          <section className="section">
            <ResultCard score={score} feedback={feedback} />
          </section>
        )}
      </main>
    </div>
  );
}

export default App;
