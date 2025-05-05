import { useState } from "react";

export default function Movie() {
  const movieOptions = [
    "🎬 Parasite",
    "🎥 The Grand Budapest Hotel",
    "🎞 Inception",
    "🎬 Your Name",
    "📽 Nomadland",
    "🎥 Past Lives",
    "🎞 Interstellar",
    "🎬 Drive My Car",
    "🎥 Minari",
    "🎬 Everything Everywhere All At Once",
  ];

  const [movie, setMovie] = useState("");

  const generateMovie = async () => {
    const randomIndex = Math.floor(Math.random() * movieOptions.length);
    const selected = movieOptions[randomIndex];
    setMovie(selected);

    try {
      await fetch("http://localhost:4001/api/records", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "movie", value: selected }),
      });
    } catch (error) {
      console.error("Failed to save movie record:", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div
        className="h-[50vh] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/799137/pexels-photo-799137.jpeg')",
        }}
      ></div>

      <div className="flex-grow bg-white flex flex-col items-center justify-center text-center p-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">🎬 What movie should I watch?</h2>
        <button
          onClick={generateMovie}
          className="bg-indigo-500 text-white px-6 py-3 rounded-full text-lg hover:bg-indigo-600 transition"
        >
          Generate Random Movie
        </button>
        {movie && (
          <p className="mt-6 text-2xl font-semibold text-indigo-600">
            You should watch: {movie}
          </p>
        )}
      </div>
    </div>
  );
}



