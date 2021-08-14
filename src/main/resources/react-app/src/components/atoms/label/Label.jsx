import './style.scss'

const Label = ({ field, className }) => {
  return (
    <label className={className} htmlFor={field._uid}>
      {field.label}
    </label>
  );
};

export default Label;
