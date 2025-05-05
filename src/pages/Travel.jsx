import { useState } from "react";

export default function Travel() {
  const travelOptions = [
    "🇯🇵 Tokyo",
    "🇫🇷 Paris",
    "🇺🇸 New York",
    "🇰🇷 Seoul",
    "🇪🇸 Barcelona",
    "🇹🇭 Bangkok",
    "🇦🇺 Sydney",
    "🇨🇦 Vancouver",
    "🇮🇹 Rome",
    "🇬🇧 London",
  ];

  const [destination, setDestination] = useState("");

  const generateDestination = async () => {
    const randomIndex = Math.floor(Math.random() * travelOptions.length);
    const selected = travelOptions[randomIndex];
    setDestination(selected);

    try {
      await fetch("https://randomizer-hub.onrender.com/api/record", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "travel", value: selected }),
      });
    } catch (error) {
      console.error("Failed to save record:", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div
        className="h-[50vh] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')",
        }}
      ></div>

      <div className="flex-grow bg-white flex flex-col items-center justify-center text-center p-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">🌍 Where should I go?</h2>
        <button
          onClick={generateDestination}
          className="bg-blue-500 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-600 transition"
        >
          Generate Random Destination
        </button>
        {destination && (
          <p className="mt-6 text-2xl font-semibold text-blue-600">
            You should travel to: {destination}
          </p>
        )}
      </div>
    </div>
  );
}

