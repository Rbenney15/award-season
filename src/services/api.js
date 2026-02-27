export async function searchMovies(query, page = 1) {
  const url = new URL("/api/tmdb/search", window.location.origin);
  url.searchParams.set("query", query);
  url.searchParams.set("page", String(page));

  const res = await fetch(url.toString());
  if (!res.ok) throw new Error("Failed to search movies");
  return res.json();
}
