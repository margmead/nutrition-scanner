export default function ResultCard({ result }) {
  if (!result) {
    return (
      <div className="card">
        <p>No scan yet. Upload a label to see results.</p>
      </div>
    );
  }

  const isGood = ["A", "B"].includes(result.rating);

  return (
    <div className="card">
      <div className="resultTitle">{result.name}</div>
      <div
        className={`ratingBadge ${isGood ? "good" : ""}`}
        aria-label={`Health rating ${result.rating}`}
      >
        <span>Rating</span>
        <span>{result.rating}</span>
      </div>
      <p style={{ marginBottom: 8 }}>Serving size: {result.servingSize}</p>

      <ul style={{ listStyle: "none", paddingLeft: 0, marginBottom: 12 }}>
        <li>Energy: {result.energyKj} kJ ({result.energyKcal} kcal)</li>
        <li>Total fat: {result.fat} g</li>
        <li>Saturated fat: {result.satFat} g</li>
        <li>Sugar: {result.sugar} g</li>
        <li>Sodium: {result.sodium} mg</li>
      </ul>

      <div>
        {result.comments?.map((c, i) => (
          <p key={i} style={{ fontSize: 14, color: "#444", marginBottom: 4 }}>
            • {c}
          </p>
        ))}
      </div>
    </div>
  );
}
