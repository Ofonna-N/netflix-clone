import ListItemIcon from "../list-item-icon/list-item-icon";
import "./_tick-list.scss";

function TickList({ listItems }) {
  return (
    <ul className="tick-list">
      {listItems.map((item, index) => (
        <li key={index} className="tick-list__list-item">
          <ListItemIcon text={item} />
        </li>
      ))}
    </ul>
  );
}

export default TickList;
