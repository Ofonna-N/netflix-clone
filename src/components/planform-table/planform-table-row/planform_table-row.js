function PlanFormTableRow({
  feature,
  basic,
  standard,
  premium,
  plan,
  onSelect,
}) {
  // console.log(plan);
  return (
    <tr className="planform__row">
      <td className="planform__feature-cell">{feature}</td>
      <td
        onClick={onSelect.bind(undefined, "basic")}
        className={`planform__value-cell ${plan === "basic" ? "selected" : ""}`}
      >
        {basic}
      </td>
      <td
        onClick={onSelect.bind(undefined, "standard")}
        className={`planform__value-cell ${
          plan === "standard" ? "selected" : ""
        }`}
      >
        {standard}
      </td>
      <td
        onClick={onSelect.bind(undefined, "premium")}
        className={`planform__value-cell ${
          plan === "premium" ? "selected" : ""
        }`}
      >
        {premium}
      </td>
    </tr>
  );
}

export default PlanFormTableRow;
