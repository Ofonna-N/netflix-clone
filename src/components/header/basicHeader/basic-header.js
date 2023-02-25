import "./_basic-header.scss";
import Button from "../../button/button";
import NetflixLogo from "../../icons/netflix-logo";

function BasicHeader({ modifiers, btn }) {
  return (
    <header className={`basic-header ${modifiers}`}>
      <NetflixLogo className={"basic-header__logo"} fill={"#e50914"} />
      {btn}
    </header>
  );
}

export default BasicHeader;
