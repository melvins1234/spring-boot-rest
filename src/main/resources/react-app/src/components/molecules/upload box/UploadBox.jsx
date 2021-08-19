import Upload from "../../atoms/icons/Upload Icon/Upload";
import "./style.scss";
let images = [];
const UploadBox = ({ setProductImages }) => {
  let imageList = (event) => {
    if(event.target.files.length <= 3 && images.length < 3) images = [...images, ...Array.from(event.target.files)];
    else event.target.value = null
    setProductImages(images);
  };
  return (
    <div className="product__upload--box">
      <Upload /> Upload
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
