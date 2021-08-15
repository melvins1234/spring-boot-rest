import { useState } from "react";
import InputField from "../../molecules/input field/InputField";
import SelectField from "../../molecules/select field/SelectField";
import TextAreaField from "../../molecules/textarea field/TextAreaField";
import UploadBox from "../../molecules/upload box/UploadBox";
import SaveProductButton from "../../atoms/buttons/Submit/SaveProductButton";
import Box from "@material-ui/core/Box";

import "./style.scss";

const AddProducts = () => {
  let selectVal = ["Sample1", "Sample2", "Sample2", "Sample2"];
  let [productImages, setProductImages] = useState([]);

  let addProduct = (event) => {
    event.preventDefault();
    let data = Object.fromEntries(new FormData(event.target).entries());
    delete data.fileToUpload;
    data = { ...data, productImages };
    console.log(data);
  };

  return (
    <form id="add-product" onSubmit={addProduct}>
      <Box display="flex" flexDirection="column" p={1}>
        <Box display="flex" flexWrap="wrap" flexGrow={10} mr={2} justifyContent="space-between">
          <InputField
            field={{ _uid: "productName", label: "Product Name" }}
            type="text"
            width="250"
            className="product__input"
            required="required"
          />
          <SelectField
            field={{ _uid: "category", label: "Category" }}
            value={selectVal}
            width="200"
            className="product__input"
            required="required"
          />
          <InputField
            field={{ _uid: "weight", label: "Weight" }}
            type="text"
            width="100"
            className="product__input"
            required="required"
          />
          <InputField
            field={{ _uid: "quantity", label: "Quantity" }}
            type="text"
            width="100"
            className="product__input"
            required="required"
          />
        </Box>
        <Box display="flex" flexWrap="wrap" flexGrow={10} mr={2} justifyContent="space-between">
          <InputField
            field={{ _uid: "price", label: "Price" }}
            type="number"
            className="product__input"
            required="required"
          />
          <Box display="flex" flexGrow={10} flexDirection="column">
            <label className="product__input">Upload Images</label>
            <Box display="flex" flexGrow={1}>
              {productImages.map((val, index) => {
                return (
                  <img
                    style={{ width: "80px", height: "80px", margin: "5px" }}
                    data-file={val.name}
                    key={index}
                    src={`${URL.createObjectURL(val)}`}
                  />
                );
              })}
              <UploadBox setProductImages={setProductImages} />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box display="flex" flexGrow={10} p={1}>
        <TextAreaField
          field={{ _uid: "description", label: "Description" }}
          className="product__input"
          width="100%"
          height="150"
        />
      </Box>
      <Box display="flex" flexGrow={10} p={1} justifyContent="center">
        <SaveProductButton type="submit" value="Save Product" />
      </Box>
    </form>
  );
};

export default AddProducts;
