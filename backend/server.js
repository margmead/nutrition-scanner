import express from "express";
import cors from "cors";
import path from "node:path";
import { fileURLToPath } from "node:url";
import scanRouter from "./routes/scan.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(cors({ origin: "http://localhost:5173"}));
app.use(express.json());

app.use("/api/scan", scanRouter);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Backend running on http://localhost:${PORT}`)
});