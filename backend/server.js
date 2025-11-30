import express from "express";
import cors from "cors";
import path from "node:path";
import { fileURLToPath } from "node:url";
import scanRouter from "./routes/scan.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

