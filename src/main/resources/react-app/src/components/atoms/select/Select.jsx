import "./style.scss";

const Select = ({ data, required, width }) => {
  let key = 0;
  return (
    <select
      className="product__select"
      style={{ width: `${width}px` }}
      required={required}
    >
      {data.map((value) => {
        key++;
        return (
          <option key={key} value={value}>
            {value}
          </option>
        );
      })}
    </select>
  );
};

export default Select;
