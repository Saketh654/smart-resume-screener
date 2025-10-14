export default function UploadResume({ setResume }) {
  return (
    <div className="mb-4">
      <input
        type="file"
        accept=".pdf"
        onChange={(e) => setResume(e.target.files[0])}
        className="border p-2 rounded"
      />
    </div>
  );
}
