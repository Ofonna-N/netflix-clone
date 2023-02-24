import Tick from "../icons/tick";
import "./_list-item-icon.scss";
function ListItemIcon({ text }) {
  return (
    <div className="list-item-icon">
      <Tick className="list-item-icon__icon" />
      <span className="list-item-icon__txt">{text}</span>
    </div>
  );
}

export default ListItemIcon;
