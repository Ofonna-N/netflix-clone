import "./_steps-text.scss";
function StepsText({ current, max }) {
  return (
    <div className="steps-txt">
      step <strong>{current}</strong> of <strong>{max}</strong>
    </div>
  );
}

export default StepsText;
