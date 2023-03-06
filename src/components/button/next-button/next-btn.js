import Button from "../button";
import "./_next-btn.scss";

function NextButton({ navPage, clickEvent }) {
  return (
    <div className="next-btn">
      <Button
        content={"Next"}
        modifiers="btn--primary"
        navPage={navPage}
        clickEvent={clickEvent}
      />
    </div>
  );
}

export default NextButton;
