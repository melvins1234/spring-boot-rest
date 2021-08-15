import Label from "../../atoms/label/Label";
import TextArea from "../../atoms/textarea/TextArea";

const TextAreaField = ({ field, required, className, width, height }) => {
  return (
    <div key={field._uid} style={{width: `${width}`}} className="product__input-group">
      <Label field={field} className={className} />
      <TextArea
        field={field}
        width={width}
        height={height}
        required={required}
      />
    </div>
  );
};

export default TextAreaField;
