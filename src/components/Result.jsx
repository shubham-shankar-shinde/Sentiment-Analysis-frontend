const Result = ({ review, sentiment, onBack }) => {
  if (!sentiment) return null;

  const color =
    sentiment.label === "Positive"
      ? "text-green-600"
      : sentiment.label === "Negative"
      ? "text-red-600"
      : "text-yellow-600";

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 px-4">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-indigo-700 text-center">
        Sentiment Analysis Result
      </h2>
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-xl w-full">
        <div className={`text-2xl font-bold mb-2 ${color}`}>
          {sentiment.label}
        </div>
        <div className="mb-4 text-gray-700">{sentiment.explanation}</div>
        <div className="bg-gray-100 p-4 rounded-lg italic text-gray-800 mb-6">
          "{review}"
        </div>
        <button
          onClick={onBack}
          className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-semibold text-lg transition"
        >
          Analyze Another Review
        </button>
      </div>
    </div>
  );
};

export default Result;
