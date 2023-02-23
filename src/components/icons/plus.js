function PlusIcon({ className, fill = "black" }) {
  return (
    <div className={className}>
      <span
        style={{
          width: "100%",
          height: "3px",
          backgroundColor: fill,
          display: "inline-block",
          position: "absolute",
          left: "0",
          top: "50%",
          transform: "translateY(-50%)",
        }}
      ></span>
      <span
        style={{
          width: "3px",
          height: "100%",
          backgroundColor: fill,
          display: "inline-block",
          position: "absolute",
          transform: "translateX(-50%)",
        }}
      ></span>
    </div>
    // <svg
    //   id="thin-x"
    //   viewBox="0 0 26 26"
    //   class="svg-icon svg-icon-thin-x svg-closed"
    //   focusable="true"
    //   fill="red"
    //   className={className}
    //   // fill="transparent"
    // >
    //   <path
    //     fill={fill}
    //     d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"
    //   ></path>
    // </svg>
  );
}

export default PlusIcon;
