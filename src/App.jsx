import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Food from "./pages/Food";
import Movie from "./pages/Movie";
import Travel from "./pages/Travel";
import History from "./pages/History";

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/food" element={<Food />} />
            <Route path="/movie" element={<Movie />} />
            <Route path="/travel" element={<Travel />} />
            <Route path="/history" element={<History />} />
            <Route path="*" element={<h1 className="text-center text-2xl p-10">404 Not Found</h1>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
