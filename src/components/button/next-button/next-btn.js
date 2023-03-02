import Button from "../button";
import "./_next-btn.scss";

function NextButton({ navPage }) {
  return (
    <div className="next-btn">
      <Button content={"Next"} modifiers="btn--primary" navPage={navPage} />
    </div>
  );
}

export default NextButton;
