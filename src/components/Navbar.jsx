import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-red-500">🎲 Randomizer Hub</h1>
      <div className="space-x-4 text-gray-700">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/food" className="hover:underline">Food</Link>
        <Link to="/movie" className="hover:underline">Movie</Link>
        <Link to="/travel" className="hover:underline">Travel</Link>
        <Link to="/history" className="hover:underline">History</Link>
      </div>
    </nav>
  );
}
