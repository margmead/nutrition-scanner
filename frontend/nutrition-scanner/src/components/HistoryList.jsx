export default function HistoryList({ history }) {
  if (history.length === 0) {
    return (
      <div className="card">
        <p>Scans will appear here so you can compare foods.</p>
      </div>
    );
  }

  return (
    <div className="card">
      <h3 style={{ marginTop: 0, marginBottom: 10 }}>Recent scans</h3>
      {history.map((item, idx) => (
        <div key={idx} className="historyItem">
          <div style={{ fontWeight: 500 }}>{item.name}</div>
          <div style={{ fontSize: 12, color: "#666" }}>
            Rating {item.rating} • Sugar {item.sugar} g
          </div>
        </div>
      ))}
    </div>
  );
}
