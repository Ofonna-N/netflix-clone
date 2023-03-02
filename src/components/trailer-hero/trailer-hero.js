import { faInfoCircle, faPlay } from "@fortawesome/free-solid-svg-icons";
import IconButton from "../button/icon-btn/icon-button";
import "./_trailer-hero.scss";

function TrailerHero() {
  return (
    <section className="trailer-hero">
      <div className="trailer-hero__img">
        <img
          src="https://occ-0-1339-1340.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABeqNepoPbog4fYKeeIw14IQXSUTuKK5uIOJserRmkB42vKfVENjoaHd3rFwCG5pv3ahWIhR9hPnsG603bbY3mbtijEnxdimj-1I5.webp?r=4d6"
          alt=""
        />
      </div>
      <div className="trailer-hero__cta">
        <h1 className="trailer-hero__title">Watch all epides now</h1>
        <p className="trailer-hero__description">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium
          amet quisquam maiores iure impedit eligendi.
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
