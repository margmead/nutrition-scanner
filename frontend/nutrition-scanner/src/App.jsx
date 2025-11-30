import { useState } from "react";
import "./styles/app.css";
import UploadForm from "./components/UploadForm";
import ResultCard from "./components/ResultCard";
import HistoryList from "./components/HistoryList";

function App() {
  const [currentResult, setCurrentResult] = useState(null);
  const [history, setHistory] = useState([]);

  function handleResult(result) {
    setCurrentResult(result);
    setHistory((prev) => [result, ...prev].slice(0, 10)); // keep last 10
  }

  return (
    <div className="app">
      <header className="header">
        <h1>Label Lens</h1>
        <p>Scan nutrition labels and see how your food stacks up.</p>
      </header>

      <div className="grid">
        <div>
          <UploadForm onResult={handleResult} />
          <div style={{ marginTop: 16 }}>
            <ResultCard result={currentResult} />
          </div>
        </div>

        <div>
          <HistoryList history={history} />
        </div>
      </div>
    </div>
  );
}

export default App;
