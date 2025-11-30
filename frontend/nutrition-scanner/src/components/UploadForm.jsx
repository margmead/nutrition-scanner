import { useState } from "react";
import "../app.css";

export default function UploadForm({ onResult }) {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setErrorMsg("");

    if (!file) {
      setErrorMsg("Please choose a photo of a nutrition label.");
      return;
    }

    const formData = new FormData();
    formData.append("image", file);

    try {
      setLoading(true);
      const res = await fetch("http://localhost:4000/api/scan", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        throw new Error("Scan failed");
      }

      const data = await res.json();
      onResult(data);
    } catch (err) {
      console.error(err);
      setErrorMsg("Something went wrong scanning the label.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="card">
      <form onSubmit={handleSubmit}>
        <div className="inputRow">
          <label>Upload a nutrition label photo</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
          />
        </div>
        {errorMsg && (
          <p style={{ color: "crimson", marginBottom: 8 }}>{errorMsg}</p>
        )}
        <button className="primary" type="submit" disabled={loading}>
          {loading ? "Scanning…" : "Scan label"}
        </button>
      </form>
    </div>
  );
}
