import {
  faAngleLeft,
  faAngleRight,
  faArrowLeft,
  faGreaterThan,
  faRoadLock,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import MovieCard from "../movie-card/movie-card";
import "./_movie-rows.scss";

function MovieRow({ title = "Title", url }) {
  const [movies, setMovies] = useState("");
  const panelRef = useRef();

  useEffect(() => {
    const getMovies = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setMovies(data.results);
      // console.log(data.results);
      // if (title === "comedy") {
      //   console.log("data");
      // }
    };
    getMovies();
  }, [url]);

  const scrollHandler = (direction) => {
    let panel = panelRef.current;
    let scrollDir = direction === "left" ? -1 : 1;
    // console.log(scrollDir);
    panel.scrollBy({
      left: scrollDir,
      behavior: "smooth",
    });
  };

  // console.log(`movies: ${movies}`);
  // console.log("hello!");
  return (
    <div className="movies-row">
      <h2 className="movies-row__title">{title}</h2>
      <div className="movies-row__btns">
        <button onClick={scrollHandler.bind(undefined, "left")}>
          <FontAwesomeIcon icon={faAngleLeft} />
        </button>
        <button onClick={scrollHandler.bind(undefined, "right")}>
          <FontAwesomeIcon icon={faAngleRight} />
        </button>
      </div>
      <div ref={panelRef} className="movies-row__container">
        {movies &&
          movies.map(
            (movie, index) =>
              movie.backdrop_path && (
                <MovieCard key={index} img_src={movie.backdrop_path} />
              )
          )}
      </div>
    </div>
  );
}

export default MovieRow;
