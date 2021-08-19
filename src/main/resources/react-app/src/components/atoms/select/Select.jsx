import "./style.scss";

const Select = ({ data, required, width }) => {
  return (
    <select
      className="product__select"
      style={{ width: `${width}px` }}
      required={required}
    >
      {data.map((value) => {
        return (
          <option key={value.id} value={value.name}>
            {value.name}
          </option>
        );
      })}
    </select>
  );
};

export default Select;
