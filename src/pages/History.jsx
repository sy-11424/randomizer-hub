import { useEffect, useState } from "react";

export default function History() {
  const [records, setRecords] = useState([]);

  const fetchRecords = async () => {
    try {
      const res = await fetch("http://localhost:4001/api/records");
      const data = await res.json();
      setRecords(data);
    } catch (err) {
      console.error("Failed to fetch records:", err);
    }
  };

  const clearHistory = async () => {
    try {
      await fetch("http://localhost:4001/api/records", {
        method: "DELETE",
      });
      setRecords([]); // Clear from UI
    } catch (err) {
      console.error("Failed to delete records:", err);
    }
  };

  useEffect(() => {
    fetchRecords();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">📜 History</h2>

        <button
          onClick={clearHistory}
          className="mb-6 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
        >
          Clear History
        </button>

        {records.length === 0 ? (
          <p className="text-gray-500">No records found.</p>
        ) : (
          <div className="space-y-4">
            {records.map((record) => (
              <div
                key={record.id}
                className="bg-white shadow p-4 rounded border-l-4 border-blue-400 text-left"
              >
                <p className="text-lg">
                  <strong>{record.type.toUpperCase()}</strong>: {record.value}
                </p>
                <p className="text-sm text-gray-500">
                  {new Date(record.created_at).toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
