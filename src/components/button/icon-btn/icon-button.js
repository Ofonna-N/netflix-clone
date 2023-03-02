// import { faInfoCircle, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./_icon-button.scss";

function IconButton({ icon, text = "Play", modifiers }) {
  return (
    <span className={`icon-btn ${modifiers}`}>
      <FontAwesomeIcon icon={icon} />
      <span className="icon-btn__text">{text}</span>
    </span>
  );
}

export default IconButton;
