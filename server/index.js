import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

// If you use Vite proxy, you can remove cors.
// Keeping it is fine in dev.
app.use(cors({ origin: ["http://localhost:5173"] }));

const PORT = process.env.PORT || 5000;
const TMDB_BASE_URL = "https://api.themoviedb.org/3";

function requireApiKey(req, res) {
  const apiKey = process.env.TMDB_API_KEY;
  if (!apiKey) {
    res.status(500).json({ error: "Missing TMDB_API_KEY in server env" });
    return null;
  }
  return apiKey;
}

app.get("/api/health", (req, res) => res.json({ ok: true }));

// GET /api/movies/popular
app.get("/api/movies/popular", async (req, res) => {
  try {
    const apiKey = requireApiKey(req, res);
    if (!apiKey) return;

    const url = new URL(`${TMDB_BASE_URL}/movie/popular`);
    url.searchParams.set("api_key", apiKey);

    const r = await fetch(url);
    const data = await r.json();

    // Mirror the tutorial behavior: return only results array
    res.status(r.status).json(data.results ?? []);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Server error" });
  }
});

// GET /api/movies/search?query=batman
app.get("/api/movies/search", async (req, res) => {
  try {
    const apiKey = requireApiKey(req, res);
    if (!apiKey) return;

    const query = (req.query.query || "").toString();
    if (!query.trim()) return res.json([]); // match tutorial: empty results

    const url = new URL(`${TMDB_BASE_URL}/search/movie`);
    url.searchParams.set("api_key", apiKey);
    url.searchParams.set("query", query);

    const r = await fetch(url);
    const data = await r.json();

    res.status(r.status).json(data.results ?? []);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Server error" });
  }
});

app.listen(PORT, () => {
  console.log(`API server running on http://localhost:${PORT}`);
});
