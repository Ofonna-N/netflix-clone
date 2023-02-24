import Button from "../button";
import "./_next-btn.scss";

function NextButton() {
  return (
    <div className="next-btn">
      <Button content={"Next"} modifiers="btn--primary" />
    </div>
  );
}

export default NextButton;
