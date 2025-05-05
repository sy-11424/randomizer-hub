import { useState } from "react";

export default function Food() {
  const foodOptions = [
    "🍕 Pizza",
    "🍣 Sushi",
    "🌮 Tacos",
    "🥟 Dumplings",
    "🍔 Burger",
    "🥗 Salad",
    "🍜 Ramen",
    "🥪 Sandwich",
    "🍱 Bento",
    "🍞 Avocado Toast",
  ];

  const [food, setFood] = useState("");

  // 👇 this function runs when user clicks the button
  const generateFood = async () => {
    const randomIndex = Math.floor(Math.random() * foodOptions.length);
    const selected = foodOptions[randomIndex];
    setFood(selected);

    // ✅ Send to backend
    try {
      await fetch("http://localhost:4001/api/records", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "food", value: selected }),
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
            "url('https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg')",
        }}
      ></div>

      <div className="flex-grow bg-white flex flex-col items-center justify-center text-center p-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">🍽️ What should I eat?</h2>
        <button
          onClick={generateFood}
          className="bg-red-500 text-white px-6 py-3 rounded-full text-lg hover:bg-red-600 transition"
        >
          Generate Random Food
        </button>
        {food && (
          <p className="mt-6 text-2xl font-semibold text-red-600">
            You should eat: {food}
          </p>
        )}
      </div>
    </div>
  );
}
