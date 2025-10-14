export default function ResultCard({ result }) {
  return (
    <div className="mt-6 bg-white p-4 rounded shadow w-96">
      <h2 className="font-semibold">Result for: {result.filename}</h2>
      <p className="text-lg mt-2">Score: <b>{result.score}/10</b></p>
      <p className="mt-2 text-gray-700">{result.justification}</p>
    </div>
  );
}
