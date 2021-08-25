import "./style.scss";

const Select = ({ data, required, width, selected }) => {
  return (
    <select
      className="product__select"
      style={{ width: `${width}px` }}
      required={required}
      defaultValue={selected}
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
