import { useState } from "react";

const Home = ({ onSubmit }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onSubmit(text);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 px-4">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-indigo-800 text-center">
        Movie Review Sentiment Analyzer
      </h2>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg"
      >
        <label
          htmlFor="review"
          className="block font-medium mb-2 text-indigo-900"
        >
          Enter your movie review:
        </label>
        <textarea
          id="review"
          rows={5}
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full p-3 rounded-lg border border-gray-300 mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-400 resize-vertical text-indigo-900 placeholder:text-indigo-400"
          placeholder="Type your review here..."
        />
        <button
          type="submit"
          className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-semibold text-lg transition"
        >
          Analyze Sentiment
        </button>
      </form>
    </div>
  );
};

export default Home;
