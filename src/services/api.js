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
