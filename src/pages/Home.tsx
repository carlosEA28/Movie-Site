import MovieCard from "../components/MovieCard";
import { useState } from "react";
import "../css/Home.css";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const movies = [
    {
      id: 1,
      title: "jonh wick",
      release_date: "2023",
      URL: "https://google.com",
    },
    {
      id: 2,
      title: "terminator",
      release_date: "1994",
      URL: "https://google.com",
    },
    {
      id: 3,
      title: "power rangers",
      release_date: "1984",
      URL: "https://google.com",
    },
  ];

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(searchQuery);
    setSearchQuery("");
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <button type="submit" className="search-btn">
          Search
        </button>
      </form>

      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard
            title={movie.title}
            release_date={movie.release_date}
            url={movie.URL}
            key={movie.id}
          />
        ))}
      </div>
    </div>
  );
}
export default Home;
