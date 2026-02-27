import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

// In dev, you can allow the Vite origin if you want.
// If you use Vite proxy (recommended), you can even remove cors entirely.
app.use(
  cors({
    origin: ["http://localhost:5173"],
  }),
);

const PORT = process.env.PORT || 5000;

// Health check
app.get("/api/health", (req, res) => {
  res.json({ ok: true });
});

// Example proxy endpoint (generic)
// Your frontend calls: /api/tmdb/search?query=batman
app.get("/api/tmdb/search", async (req, res) => {
  try {
    const query = req.query.query || "";
    const page = req.query.page || "1";

    const apiKey = process.env.TMDB_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ error: "Missing TMDB_API_KEY on server" });
    }

    // NOTE: Replace this URL with whatever API you are actually calling.
    // This is TMDB example.
    const url = new URL("https://api.themoviedb.org/3/search/movie");
    url.searchParams.set("query", query);
    url.searchParams.set("page", page);

    // Many APIs use either query param keys OR Authorization headers.
    // TMDB v3 supports api_key; TMDB v4 uses Bearer token.
    url.searchParams.set("api_key", apiKey);

    const r = await fetch(url.toString());
    const data = await r.json();

    res.status(r.status).json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

app.listen(PORT, () => {
  console.log(`API server running on http://localhost:${PORT}`);
});
