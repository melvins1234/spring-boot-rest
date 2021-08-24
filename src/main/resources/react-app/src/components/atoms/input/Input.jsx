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
  readonly
}) => {
  return (
    <input
      style={{ width: `${width}px` }}
      type={type || field.component}
      id={field._uid}
      name={field._uid}
      defaultValue={value}
      required={required}
      placeholder={placeholder}
      className="product__input--text"
      readOnly={readonly}
    />
  );
};

export default Input;
