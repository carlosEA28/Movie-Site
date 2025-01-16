interface MovieCardProps {
  title: string;
  url: string;
  release_date: string;
}

function MovieCard({ title, url, release_date }: MovieCardProps) {
  function onFavoriteClick() {
    alert("Clicekd");
  }

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={url} alt={title} />
        <div className="movie-overlay">
          <button className="favorite-btn" onClick={onFavoriteClick}>
            🤍
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{title}</h3>
        <p>{release_date}</p>
      </div>
    </div>
  );
}

export default MovieCard;
