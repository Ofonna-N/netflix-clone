import "./_button.scss";
import ChevRight from "../icons/chev-right";
import { Link } from "react-router-dom";

function Button({ content, modifiers, hasIcon, navPage, clickEvent }) {
  const getButton = function () {
    return !navPage ? (
      <button className={`btn ${modifiers}`} onClick={clickEvent}>
        {content}
        {/* <img className={`${styles["button__img"]}`} src={chev}></img> */}
        {hasIcon && <ChevRight fill="white" className="btn__icon" />}
      </button>
    ) : (
      <Link to={navPage} className={`btn ${modifiers}`}>
        {content}
        {/* <img className={`${styles["button__img"]}`} src={chev}></img> */}
        {hasIcon && <ChevRight fill="white" className="btn__icon" />}
      </Link>
    );
  };

  return getButton();
}

export default Button;
