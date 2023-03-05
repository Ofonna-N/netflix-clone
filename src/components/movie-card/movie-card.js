import "./_movie-card.scss";

const imgBaseURl = "https://image.tmdb.org/t/p/w500";

function MovieCard({ img_src }) {
  return (
    <div className="movie-card">
      <img
        src={
          imgBaseURl + img_src ||
          "https://occ-0-1339-1340.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABVsggJPcKsDqmsqq1wSxqiqjQVbnq3bcdc2lFkhTNfgCncTczaGLT3FTbexpfmRrrs6LL9IMaiKSWQZBCKWUG5qKT22kDKP9cas9jlg-tLHBlNFjBU7q0aIxBxcqlWEkSMTG.jpg?r=5cc"
        }
        alt=""
      />
      {/* <h2>Hello!</h2> */}
    </div>
  );
}

export default MovieCard;
