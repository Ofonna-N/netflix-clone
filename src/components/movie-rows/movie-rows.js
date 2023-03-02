import MovieCard from "../movie-card/movie-card";
import "./_movie-rows.scss";

function MovieRow() {
  return (
    <div className="movies-row">
      <h2 className="movies-row__title">Trending Now</h2>
      <div className="movies-row__container">
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </div>
  );
}

export default MovieRow;
