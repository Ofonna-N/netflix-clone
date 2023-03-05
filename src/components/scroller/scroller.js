import "./_scroller.scss";
import ScrollItem from "./scroll-item";
import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import GetShows from "../../scripts/api-fetch";

function Scroller({ title, url }) {
  const panelRef = useRef();
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchShows = async () => {
      setShows(await GetShows(url));
    };

    fetchShows();
  }, []);

  const btnScroll = (dir) => {
    const scrollDir = dir === "L" ? -100 : 100;
    const panel = panelRef.current;
    // console.log(panel);
    panel.scrollBy({
      left: scrollDir,
      behavior: "smooth",
    });
  };

  const showsDisplay = shows.map((s, i) => {
    return <ScrollItem key={i} imgSrc={s.backdrop_path || s.poster_path} />;
  });

  return (
    <div className="scroller">
      <h2 className="scroller__title">{title || "Trending"}</h2>
      <div className="scroller__group">
        <div className="scroller__btns">
          <button onClick={() => btnScroll("L")}>
            <FontAwesomeIcon icon={faAngleLeft} />
          </button>
          <button onClick={() => btnScroll("R")}>
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
        </div>
        <div ref={panelRef} className="scroller__panel">
          {showsDisplay || "shows"}
        </div>
      </div>
    </div>
  );
}

export default Scroller;
