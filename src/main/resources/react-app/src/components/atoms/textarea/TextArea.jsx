import "./style.scss";
const TextArea = ({ field, width, height, required, value }) => {
  return (
    <textarea
      id={field._uid}
      name={field._uid}
      style={{ width: `${width}`, height: `${height}px`, resize: "none" }}
      required={required}
      defaultValue={value}
    ></textarea>
  );
};

export default TextArea;
