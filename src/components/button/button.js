import "./_button.scss";
import ChevRight from "../icons/chev-right";

function Button({ content, modifiers, hasIcon }) {
  // let btn_block = styles["button"];

  // let btn_classes = modifiers.reduce(
  //   (acc, cur) => acc + " " + styles[cur],
  //   btn_block
  // );
  // console.log(btn_classes);

  return (
    // <button className={`${styles["button"]} ${styles["button--link"]}`}>
    <button className={`btn ${modifiers}`}>
      {content}
      {/* <img className={`${styles["button__img"]}`} src={chev}></img> */}
      {hasIcon && <ChevRight fill="white" className="btn__icon" />}
    </button>
  );
}

export default Button;
