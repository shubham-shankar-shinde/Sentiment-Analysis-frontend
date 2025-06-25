import { useState } from "react";
import Home from "./components/Home";
import Result from "./components/Result";

function App() {
  const [review, setReview] = useState("");
  const [sentiment, setSentiment] = useState(null);
  const [page, setPage] = useState("home");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (text) => {
    setReview(text);
    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/api/sentiment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ review: text }),
      });
      const data = await res.json();
      setSentiment(data);
      setPage("result");
    } catch (err) {
      setSentiment({
        label: "Error",
        explanation: "Could not analyze sentiment. Please try again.",
      });
      setPage("result");
    }
    setLoading(false);
  };

  const handleBack = () => {
    setPage("home");
    setReview("");
    setSentiment(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {page === "home" && <Home onSubmit={handleSubmit} loading={loading} />}
      {page === "result" && (
        <Result review={review} sentiment={sentiment} onBack={handleBack} />
      )}
    </div>
  );
}

export default App;
