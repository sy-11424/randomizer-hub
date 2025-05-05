import { useState } from "react";

export default function Movie() {
  const movieOptions = [
    "🎬 Inception",
    "🎥 Spirited Away",
    "📽️ Parasite",
    "🎞️ The Godfather",
    "🍿 La La Land",
    "🦖 Jurassic Park",
    "🕷️ Spider-Man",
    "🚀 Interstellar",
    "🌌 Everything Everywhere All at Once",
    "🧟‍♂️ Train to Busan",
  ];

  const [movie, setMovie] = useState("");

  const generateMovie = async () => {
    const randomIndex = Math.floor(Math.random() * movieOptions.length);
    const selected = movieOptions[randomIndex];
    setMovie(selected);

    try {
      await fetch("https://randomizer-hub.onrender.com/api/record", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "movie", value: selected }),
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
            "url('https://images.unsplash.com/photo-1607082349566-187342175e2e')",
        }}
      ></div>

      <div className="flex-grow bg-white flex flex-col items-center justify-center text-center p-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">🎬 What should I watch?</h2>
        <button
          onClick={generateMovie}
          className="bg-purple-600 text-white px-6 py-3 rounded-full text-lg hover:bg-purple-700 transition"
        >
          Generate Random Movie
        </button>
        {movie && (
          <p className="mt-6 text-2xl font-semibold text-purple-700">
            You should watch: {movie}
          </p>
        )}
      </div>
    </div>
  );
}
