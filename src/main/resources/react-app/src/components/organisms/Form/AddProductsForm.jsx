import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { addProductAction } from "../../../store/action/loadProducts";

import InputField from "../../molecules/input field/InputField";
import SelectField from "../../molecules/select field/SelectField";
import TextAreaField from "../../molecules/textarea field/TextAreaField";
import UploadBox from "../../molecules/upload box/UploadBox";
import SaveProductButton from "../../atoms/buttons/Submit/SaveProductButton";
import Box from "@material-ui/core/Box";

import "./style.scss";

const AddProducts = () => {
  let [productImages, setProductImages] = useState([]);
  const categories = useSelector((state) => state.category);
  const dispatch = useDispatch();

  let addProduct = (event) => {
    event.preventDefault();
    let images = [];
    let data = Object.fromEntries(new FormData(event.target).entries());
    delete data.fileToUpload;
    data = {
      ...data,
      productImages,
    };

    productImages.forEach((e) => {
      const formData = new FormData();
      formData.append("file", e);

      fetch("/api/products/upload", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((json) => {
          images.push(json);
        })
        .catch((error) => {
          console.error(error);
        });
    });
    data.productImages = images;
    setTimeout(function () {
      fetch("/api/products", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((json) => {
          json.categories = [
            categories.find(
              (e) => e.name === document.querySelector(".product__select").value
            ),
          ];
          console.log(JSON.stringify(json));
          fetch(`/api/products/${json.id}`, {
            method: "PUT",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify(json),
          })
            .then((res) => res.json())
            .then((json) => dispatch(addProductAction(json)));
        });
    }, 500);
  };

  return (
    <div className="modal--form--product">
      <h3 className="form-title">Add New Product</h3>
      <span className="form-title-small">
        Add some information for the product you want to create.
      </span>
      <form id="add-product" onSubmit={addProduct}>
        <Box display="flex" flexDirection="column" p={1}>
          <Box
            flexDirection="column"
            display="flex"
            flexGrow={10}
            justifyContent="space-between"
          >
            <InputField
              field={{ _uid: "name", label: "Product Name" }}
              type="text"
              className="product__input"
              required="required"
            />
            <SelectField
              field={{ _uid: "categories", label: "Category" }}
              value={categories}
              className="product__input"
              required="required"
            />
            <Box display="flex" flexGrow={1} justifyContent="space-between">
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
              <InputField
                field={{ _uid: "price", label: "Price" }}
                type="number"
                className="product__input"
                required="required"
                width="100"
              />
            </Box>

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
                      alt={val.name}
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
            height="80"
          />
        </Box>
        <Box display="flex" flexGrow={10} p={1} justifyContent="space-around">
          <span
            onClick={() => {
              document
                .querySelector(".modal--form--product")
                .classList.remove("modal--form--product--show");
              document.querySelector("#add-product").reset();
            }}
            className="product__submit cancel-btn"
          >
            Cancel
          </span>
          <SaveProductButton type="submit" value="Publish" />
        </Box>
      </form>
    </div>
  );
};

export default AddProducts;
