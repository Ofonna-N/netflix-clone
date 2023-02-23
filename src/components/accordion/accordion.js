import { useState } from "react";
import PlusIcon from "../icons/plus";
import "./_accordion.scss";

function Accordion({ title, content }) {
  const [toggled, setToggled] = useState(false);
  const handleToggle = function () {
    setToggled((prev) => !prev);
  };
  return (
    <div className={`accordion ${toggled ? "toggled" : ""}`}>
      <button className="accordion__toggler" onClick={handleToggle}>
        <span className="accordion__title">{title}</span>
        <span className="accordion__icon-container">
          <PlusIcon className={"accordion__icon"} fill="white" />
        </span>
      </button>
      <div className="accordion__content">
        <div>{content}</div>
      </div>
    </div>
  );
}

export default Accordion;
