import { useState } from "react";

export default function Travel() {
  const travelOptions = [
    "🇯🇵 Tokyo",
    "🇮🇹 Rome",
    "🇫🇷 Paris",
    "🇺🇸 New York",
    "🇲🇽 Mexico City",
    "🇹🇭 Bangkok",
    "🇨🇳 Beijing",
    "🇰🇷 Seoul",
    "🇪🇸 Barcelona",
    "🇬🇧 London",
  ];

  const [place, setPlace] = useState("");

  const generatePlace = async () => {
    const randomIndex = Math.floor(Math.random() * travelOptions.length);
    const selected = travelOptions[randomIndex];
    setPlace(selected);

    try {
      await fetch("http://localhost:4001/api/records", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "travel", value: selected }),
      });
    } catch (error) {
      console.error("Failed to save travel record:", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div
        className="h-[50vh] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg')",
        }}
      ></div>

      <div className="flex-grow bg-white flex flex-col items-center justify-center text-center p-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">🌍 Where should I go?</h2>
        <button
          onClick={generatePlace}
          className="bg-green-500 text-white px-6 py-3 rounded-full text-lg hover:bg-green-600 transition"
        >
          Generate Random Destination
        </button>
        {place && (
          <p className="mt-6 text-2xl font-semibold text-green-600">
            You should travel to: {place}
          </p>
        )}
      </div>
    </div>
  );
}
