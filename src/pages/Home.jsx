import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col justify-center items-center text-white"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1950&q=80')",
      }}
    >
      <div className="bg-black bg-opacity-60 p-8 rounded-xl text-center max-w-xl">
        <h1 className="text-4xl font-bold mb-4">🎲 Randomizer Hub</h1>
        <p className="text-lg mb-8">
          Can’t decide what to eat, watch, or where to go? Let us help!
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <Link
            to="/food"
            className="bg-red-500 text-white px-8 py-4 rounded-xl text-xl shadow-md hover:bg-red-600 transition"
          >
            🍔 Random Food
          </Link>
          <Link
            to="/movie"
            className="bg-indigo-500 text-white px-8 py-4 rounded-xl text-xl shadow-md hover:bg-indigo-600 transition"
          >
            🎬 Random Movie
          </Link>
          <Link
            to="/travel"
            className="bg-green-500 text-white px-8 py-4 rounded-xl text-xl shadow-md hover:bg-green-600 transition"
          >
            ✈️ Random Travel
          </Link>
        </div>
      </div>
    </div>
  );
}
