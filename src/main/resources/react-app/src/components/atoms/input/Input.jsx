import "./style.scss";

const Input = ({
  field,
  fieldChanged,
  type,
  value,
  required,
  placeholder,
  className,
  width,
}) => {
  return (
    <input
      style={{ width: `${width}px` }}
      type={type || field.component}
      id={field._uid}
      name={field._uid}
      value={value}
      required={required}
      placeholder={placeholder}
      className="product__input--text"
    />
  );
};

export default Input;
