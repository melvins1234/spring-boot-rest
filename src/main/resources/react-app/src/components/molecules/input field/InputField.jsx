import Label from "../../atoms/label/Label";
import Input from "../../atoms/input/Input";
import './style.scss'

const InputField = ({
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
    <div key={field._uid} className="product__input-group">
      <Label field={field} className={className} />
      <Input
        field={field}
        type={type}
        required={required}
        width={width}
        value={value}
        readonly={readonly}
      />
    </div>
  );
};

export default InputField;
