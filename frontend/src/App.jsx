import { useState } from "react";
import UploadResume from "./components/UploadResume";
import JobDescription from "./components/JobDescription";
import ResultCard from "./components/ResultCard";
import { API } from "./api";

export default function App() {
  const [resume, setResume] = useState(null);
  const [jobDesc, setJobDesc] = useState("");
  const [result, setResult] = useState(null);

  const handleSubmit = async () => {
    if (!resume || !jobDesc) return alert("Upload resume and job description!");
    const formData = new FormData();
    formData.append("resume", resume);
    formData.append("job_description", jobDesc);
    const res = await API.post("/analyze", formData);
    setResult(res.data);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1>Hello</h1>
      <h1 className="text-3xl font-bold mb-6">🧠 Smart Resume Screener</h1>
      <UploadResume setResume={setResume} />
      <JobDescription jobDesc={jobDesc} setJobDesc={setJobDesc} />
      <button onClick={handleSubmit} className="bg-blue-600 text-white px-4 py-2 rounded mt-4">Analyze</button>
      {result && <ResultCard result={result} />}
    </div>
  );
}
