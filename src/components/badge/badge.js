// import styles from "./badge.module.scss";
import "./_badge.scss";
function Badge({ content }) {
  //   return <span className={styles["badge badge--primary"]}>{content}</span>;
  return (
    <span className="badge--primary badge">
      {content}
      {/* <img src="../../static/icons/chev-right.svg" /> */}
    </span>
  );
}

export default Badge;
