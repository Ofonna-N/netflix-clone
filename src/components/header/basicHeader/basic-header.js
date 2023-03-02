import "./_basic-header.scss";
import Button from "../../button/button";
import NetflixLogo from "../../icons/netflix-logo";
import { Link } from "react-router-dom";

function BasicHeader({ modifiers, btn, logoNav = "/" }) {
  return (
    <header className={`basic-header ${modifiers}`}>
      <Link to={logoNav}>
        <NetflixLogo className={"basic-header__logo"} fill={"#e50914"} />
      </Link>
      {btn}
    </header>
  );
}

export default BasicHeader;
