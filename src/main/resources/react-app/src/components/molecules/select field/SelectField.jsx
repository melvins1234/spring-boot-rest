import Label from "../../atoms/label/Label";
import Select from '../../atoms/select/Select'

import './style.scss';

const SelectField = ({
    field,
    value,
    required,
    className,
    width
  }) => {
  return (
    <div key={field._uid} className="product__input-group">
      <Label field={field} className={className} />
      <Select width={width} data={value} required={required}/>
    </div>
  );
};

export default SelectField;
