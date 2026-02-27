import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import oscars2026 from "./data/oscars-2026.js";

dotenv.config();

const app = express();
app.use(express.json());

// If you're using Vite proxy, CORS isn't strictly required,
// but keeping it in dev is fine.
app.use(
  cors({
    origin: ["http://localhost:5173"],
  }),
);

const PORT = process.env.PORT || 5001;
const TMDB_BASE = "https://api.themoviedb.org/3";

// v3 API key only
function assertTmdbApiKey(res) {
  if (!process.env.TMDB_API_KEY) {
    res.status(500).json({ error: "Missing TMDB_API_KEY in server/.env" });
    return false;
  }
  return true;
}

function tmdbUrl(path, params = {}) {
  const url = new URL(`${TMDB_BASE}${path}`);

  // Attach v3 API key
  url.searchParams.set("api_key", process.env.TMDB_API_KEY);

  // Additional params
  for (const [k, v] of Object.entries(params)) {
    if (v !== undefined && v !== null && String(v).length > 0) {
      url.searchParams.set(k, String(v));
    }
  }

  return url;
}

// Health check
app.get("/api/health", (req, res) => {
  res.json({ ok: true });
});

// Oscars dataset
app.get("/api/oscars/2026", (req, res) => {
  res.json(oscars2026);
});

// GET /api/movies/popular
app.get("/api/movies/popular", async (req, res) => {
  try {
    if (!assertTmdbApiKey(res)) return;

    const url = tmdbUrl("/movie/popular");
    const r = await fetch(url);
    const data = await r.json();

    return res.status(r.status).json(data?.results ?? []);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Server error" });
  }
});

// GET /api/movies/search?query=batman
app.get("/api/movies/search", async (req, res) => {
  try {
    if (!assertTmdbApiKey(res)) return;

    const query = (req.query.query || "").toString().trim();
    if (!query) return res.json([]);

    const url = tmdbUrl("/search/movie", { query });
    const r = await fetch(url);
    const data = await r.json();

    return res.status(r.status).json(data?.results ?? []);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Server error" });
  }
});

app.listen(PORT, () => {
  console.log(`API server running on http://localhost:${PORT}`);
  console.log(
    `TMDB auth: API key (v3) ${process.env.TMDB_API_KEY ? "SET" : "NOT SET"}`,
  );
});
