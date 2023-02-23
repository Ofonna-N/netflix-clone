import "./_media.scss";

function MediaSection({ title, subtitle, graphic, modifiers }) {
  return (
    <section className="section">
      <section className={`media ${modifiers}`}>
        <div className="media__text">
          <h1 className="media__title">{title}</h1>
          <h2 className="media__subtitle">{subtitle}</h2>
        </div>
        <div className="media__graphic">{graphic}</div>
      </section>
    </section>
  );
}

export default MediaSection;
