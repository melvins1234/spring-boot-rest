import Upload from "../../atoms/icons/Upload Icon/Upload";
import "./style.scss";
let images = [];
const UploadBox = ({ setProductImages }) => {
  let imageList = (event) => {
    if(images.length != 5) images = [...images, ...Array.from(event.target.files)];
    setProductImages(images);
  };
  return (
    <div className="product__upload--box">
      <Upload /> Drag and drop or browse to choose a file.
      <input
        onChange={imageList}
        type="file"
        name="fileToUpload"
        accept="image/gif, image/jpeg, image/png"
        className="product__upload--fileToUpload"
        multiple
      />
    </div>
  );
};

export default UploadBox;
