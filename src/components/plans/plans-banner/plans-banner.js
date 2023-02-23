import Badge from "../../badge/badge";
import Button from "../../button/button";
import "./_plans-banner.scss";
// import styles from "./plans-banner.module.scss";

function PlansBanner() {
  return (
    <div className={"plans-banner"}>
      <Badge content={"NEW!"} />
      <span className={"plans-banner__info"}>
        Plans now start at <span className={"plans-banner__price"}>$6.99</span>.
      </span>
      <Button content={"Learn More"} modifiers={"btn--link"} hasIcon={true} />
    </div>
  );
}

export default PlansBanner;
