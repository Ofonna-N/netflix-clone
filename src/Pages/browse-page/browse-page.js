import Footer from "../../components/footer/footer";
import LoginHeader from "../../components/header/loginHeader/login-header";
import MovieRow from "../../components/movie-rows/movie-rows";
import Scroller from "../../components/scroller/scroller";
import TrailerHero from "../../components/trailer-hero/trailer-hero";
import "./_browse-page.scss";

let categories = [
  {
    title: "trending",
    url: `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_TMBD}`,
  },
  {
    title: "top rated",
    url: `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_TMBD}&language=en-US&page=1`,
  },
  {
    title: "top shows",
    url: `https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.REACT_APP_TMBD}&language=en-US&page=1`,
  },
  {
    title: "comedy",
    url: `https://api.themoviedb.org/3/tv/airing_today?api_key=${process.env.REACT_APP_TMBD}&language=en-US`,
  },
  {
    title: "popular",
    url: `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_TMBD}`,
  },
  {
    title: "romance",
    url: `
    https://api.themoviedb.org/3/trending/tv/day?api_key=${process.env.REACT_APP_TMBD}`,
  },
  {
    title: "documentaries",
    url: `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMBD}&language=en-US&page=1`,
  },
];

function BrowsePage() {
  const movieRows = categories.map((cat, index) => {
    return <Scroller key={index} title={cat.title} url={cat.url} />;
  });

  // console.log(movieRows);
  return (
    <>
      <LoginHeader />
      <TrailerHero />
      <div className="browse-page">
        <div className="movies">
          {/* <Scroller title={categories[0].title} url={categories[0].url} /> */}
          {movieRows}
        </div>
        <Footer modifiers={"footer--white"} />
      </div>
    </>
  );
}

export default BrowsePage;
