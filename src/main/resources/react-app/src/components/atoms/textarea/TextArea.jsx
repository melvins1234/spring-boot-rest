import "./style.scss";
const TextArea = ({ field, width, height, required }) => {
  return (
    <textarea
      id={field._uid}
      name={field._uid}
      style={{ width: `${width}`, height: `${height}px`, resize: "none" }}
      required={required}
    ></textarea>
  );
};

export default TextArea;
