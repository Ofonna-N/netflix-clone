import "./_scroller.scss";

// const img_src =
//   "https://occ-0-1339-1340.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABeqNepoPbog4fYKeeIw14IQXSUTuKK5uIOJserRmkB42vKfVENjoaHd3rFwCG5pv3ahWIhR9hPnsG603bbY3mbtijEnxdimj-1I5.webp?r=4d6";

const imgBaseURL = "https://image.tmdb.org/t/p/w500";

function ScrollItem({ imgSrc }) {
  return (
    <div className="scroller__item">
      <div className="scroller__item-img">
        <img src={imgBaseURL + imgSrc} alt="" />
      </div>
    </div>
  );
}

export default ScrollItem;
