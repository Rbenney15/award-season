export const getPopularMovies = async () => {
  const response = await fetch("/api/movies/popular");
  if (!response.ok) throw new Error("Failed to fetch popular movies");
  return response.json(); // already results array
};

export const searchMovies = async (query) => {
  const response = await fetch(
    `/api/movies/search?query=${encodeURIComponent(query)}`,
  );
  if (!response.ok) throw new Error("Failed to search movies");
  return response.json(); // already results array
};

export const getOscars2026 = async () => {
  const response = await fetch("/api/oscars/2026");
  if (!response.ok) throw new Error("Failed to fetch Oscars 2026 data");
  return response.json();
};
