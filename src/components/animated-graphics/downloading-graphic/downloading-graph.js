import "./_downloading-graph.scss";

function DownloadingGraphic({ img_src, title }) {
  return (
    <div className="di-graphic">
      <img
        className="di-graphic__main-img"
        src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
        alt=""
      />
      <div className="di-graphic__download">
        <img
          className="di-graphic__img"
          src={
            "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
          }
          alt=""
        />
        <div className="di-graphic__text-grp">
          <span className="di-graphic__title">{"stranger things"}</span>
          <span className="di-graphic__subtxt">downloading...</span>
        </div>
        <img
          className="di-graphic__gif"
          src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif"
          alt=""
        />
      </div>
    </div>
  );
}

export default DownloadingGraphic;
