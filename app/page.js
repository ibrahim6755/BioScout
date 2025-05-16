"use client";

import React, { useState } from "react";

function App() {
  const [speciesName, setSpeciesName] = useState("");
  const [location, setLocation] = useState("");
  const [dateObserved, setDateObserved] = useState("");
  const [notes, setNotes] = useState("");
  const [image, setImage] = useState(null);
  const [aiSuggestion, setAiSuggestion] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const suggestions = ["Common Myna", "Indian Leopard", "Purple Sunbird"];
    const random = suggestions[Math.floor(Math.random() * suggestions.length)];
    setAiSuggestion(random);
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-green-100 via-white to-green-200 p-6">
      <div className="max-w-3xl mx-auto rounded-2xl shadow-lg bg-white p-8">
        <h1 className="text-3xl font-bold mb-6 text-center text-green-800">
          🦜 BioScout Islamabad
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Species name (common or scientific)"
            value={speciesName}
            onChange={(e) => setSpeciesName(e.target.value)}
            className="w-full p-2 border rounded text-black"
          />
          <input
            type="text"
            placeholder="Location (e.g., Trail 5, F-7 Park)"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full p-2 border rounded text-black"
          />
          <input
            type="date"
            value={dateObserved}
            onChange={(e) => setDateObserved(e.target.value)}
            className="w-full p-2 border rounded text-black"
          />
          <textarea
            placeholder="Notes (e.g., behavior, habitat, time of day)"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="w-full p-2 border rounded text-black"
          />
          <div className="w-52 p-2 border rounded bg-white text-black">
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
              className="w-52"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-700 hover:bg-green-800 text-white font-semibold py-2 px-4 rounded"
          >
            Submit Observation
          </button>
        </form>

        {aiSuggestion && (
          <div className="mt-6 p-4 bg-green-100 border-l-4 border-green-600 text-green-800">
            <p className="font-semibold">AI Suggests:</p>
            <p>{aiSuggestion}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
