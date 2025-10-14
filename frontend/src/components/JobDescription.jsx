export default function JobDescription({ jobDesc, setJobDesc }) {
  return (
    <textarea
      value={jobDesc}
      onChange={(e) => setJobDesc(e.target.value)}
      placeholder="Paste Job Description here..."
      className="w-96 h-40 border p-3 rounded"
    />
  );
}
