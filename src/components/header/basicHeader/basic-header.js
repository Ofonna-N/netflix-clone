import "./_basic-header.scss";
import Button from "../../button/button";
import NetflixLogo from "../../icons/netflix-logo";

function BasicHeader({ btn_txt, btn_modifiers, modifiers }) {
  return (
    <header className={`basic-header ${modifiers}`}>
      <NetflixLogo className={"basic-header__logo"} fill={"#e50914"} />
      <Button content={btn_txt} modifiers={btn_modifiers} />
    </header>
  );
}

export default BasicHeader;
