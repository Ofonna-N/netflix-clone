function Tick({ className, fill = "red" }) {
  return (
    <span className={className}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        //   fill={fill}
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          className="tick-icon"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.68239 19.7312L23.6824 5.73115L22.3178 4.26904L8.02404 17.6098L2.70718 12.293L1.29297 13.7072L7.29297 19.7072C7.67401 20.0882 8.28845 20.0988 8.68239 19.7312Z"
          fill={fill}
        ></path>
      </svg>
    </span>
  );
}

export default Tick;
