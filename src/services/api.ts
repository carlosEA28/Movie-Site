const API_KEY = process.env.API_KEY;
const BASE_URL = process.env.BASE_URL;

interface searchMovieProps {
  title: string;
}

export const getPopularMovies = async () => {
  const res = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await res.json();

  return data.results;
};

export const searchMovies = async ({ title }: searchMovieProps) => {
  const res = await fetch(
    `${BASE_URL}/movie/popular?api_key=${API_KEY}&query=${encodeURIComponent(
      title
    )}`
  );
  const data = await res.json();
  return data.results;
};
