import { faInfoCircle, faPlay } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import GetShows from "../../scripts/api-fetch";
import IconButton from "../button/icon-btn/icon-button";
import "./_trailer-hero.scss";

const img_baseUrl = "https://image.tmdb.org/t/p/w500";

function TrailerHero() {
  const [trailer, setTrailer] = useState({});

  const capText = (text, length) => {
    if (text === undefined) return text;
    if (text.length > length) {
      let result = text.substring(0, length) + "...";
      return result;
    }
  };

  useEffect(() => {
    const fetchTrailer = async () => {
      // const response = await fetch(
      //   `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_TMBD}`
      // );
      const trailers = await GetShows(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_TMBD}`
      );
      const updateTrailer = () => {
        const randomIndex = Math.floor(Math.random() * trailers.length);
        const updatedTrailer = trailers[randomIndex];

        // setTimeout(() => setCanFade(false), 5000);
        setTrailer(updatedTrailer);
      };

      updateTrailer();

      // console.log("init traileer");
      // console.log(trailers);
      const interval = setInterval(() => {
        updateTrailer();
      }, 10000);

      // const data = await response.json();
      // console.log(randomIndex);
      // console.log(trailer);
      return () => {
        clearInterval(interval);
        console.log("dismout");
      };
    };

    fetchTrailer();
  }, []);

  return (
    <section
      key={trailer.id}
      className={`trailer-hero ${trailer ? "apply-fade" : ""}`}
    >
      <div className="trailer-hero__img">
        <img
          src={
            trailer.backdrop_path === undefined
              ? "https://occ-0-1339-1340.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABeqNepoPbog4fYKeeIw14IQXSUTuKK5uIOJserRmkB42vKfVENjoaHd3rFwCG5pv3ahWIhR9hPnsG603bbY3mbtijEnxdimj-1I5.webp?r=4d6"
              : img_baseUrl + trailer.backdrop_path
          }
          alt=""
        />
      </div>
      <div className="trailer-hero__cta">
        <h1 className="trailer-hero__title">
          {trailer?.title || "Watch all epides now"}
        </h1>
        <p className="trailer-hero__description">
          {capText(trailer.overview, 150) ||
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantiumamet quisquam maiores iure impedit eligendi."}
        </p>
        <div className="trailer-hero__btns">
          <IconButton icon={faPlay} text="play" modifiers={"icon-btn--white"} />
          <IconButton
            icon={faInfoCircle}
            text="More Info"
            modifiers={"icon-btn--light-grey"}
          />
        </div>
      </div>
    </section>
  );
}

export default TrailerHero;
