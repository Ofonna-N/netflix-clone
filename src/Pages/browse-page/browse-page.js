import LoginHeader from "../../components/header/loginHeader/login-header";
import MovieRow from "../../components/movie-rows/movie-rows";
import TrailerHero from "../../components/trailer-hero/trailer-hero";
import "./_browse-page.scss";

function BrowsePage() {
  return (
    <div className="browse-page">
      <LoginHeader />
      <TrailerHero />
      <div className="browse-page__movies">
        <MovieRow />
        <MovieRow />
        <MovieRow />
        <MovieRow />
        <MovieRow />
        <MovieRow />
      </div>
    </div>
  );
}

export default BrowsePage;
