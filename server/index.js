// server/index.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

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

const PORT = process.env.PORT || 5000;
const TMDB_BASE = "https://api.themoviedb.org/3";

/**
 * Supports either:
 * - TMDB_API_KEY (v3)   -> used as ?api_key=...
 * - TMDB_BEARER_TOKEN (v4 read access token) -> used as Authorization: Bearer ...
 *
 * Put ONE of these in server/.env
 */
function assertTmdbCreds(res) {
  const hasV3 = Boolean(process.env.TMDB_API_KEY);
  const hasV4 = Boolean(process.env.TMDB_BEARER_TOKEN);

  if (!hasV3 && !hasV4) {
    res
      .status(500)
      .json({
        error: "Missing TMDB_API_KEY or TMDB_BEARER_TOKEN in server/.env",
      });
    return false;
  }
  return true;
}

function tmdbAuthHeaders() {
  const bearer = process.env.TMDB_BEARER_TOKEN;
  if (bearer) {
    return { Authorization: `Bearer ${bearer}` };
  }
  return {};
}

function tmdbUrl(path, params = {}) {
  const url = new URL(`${TMDB_BASE}${path}`);

  // If using v3 API key, attach it as query param
  const v3Key = process.env.TMDB_API_KEY;
  if (v3Key) url.searchParams.set("api_key", v3Key);

  // Add any additional params
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

// GET /api/movies/popular
app.get("/api/movies/popular", async (req, res) => {
  try {
    if (!assertTmdbCreds(res)) return;

    const url = tmdbUrl("/movie/popular");

    // ✅ DEBUG (temporary): confirm what the server is sending
    console.log("TMDB_API_KEY loaded?", Boolean(process.env.TMDB_API_KEY));
    console.log("Requesting TMDB URL:", url.toString());

    const r = await fetch(url, { headers: tmdbAuthHeaders() });

    // ✅ DEBUG (temporary): see the status coming back from TMDB
    console.log("TMDB status:", r.status);

    const data = await r.json();

    // ✅ DEBUG (temporary): if TMDB denies, it will include a message
    if (r.status !== 200) {
      console.log("TMDB error body:", data);
    }

    return res.status(r.status).json(data?.results ?? []);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Server error" });
  }
});

// GET /api/movies/search?query=batman
app.get("/api/movies/search", async (req, res) => {
  try {
    if (!assertTmdbCreds(res)) return;

    const query = (req.query.query || "").toString().trim();
    if (!query) return res.json([]);

    const url = tmdbUrl("/search/movie", { query });
    const r = await fetch(url, { headers: tmdbAuthHeaders() });
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
    `TMDB auth: ${
      process.env.TMDB_BEARER_TOKEN
        ? "Bearer token (v4)"
        : process.env.TMDB_API_KEY
          ? "API key (v3)"
          : "NOT SET"
    }`,
  );
});
