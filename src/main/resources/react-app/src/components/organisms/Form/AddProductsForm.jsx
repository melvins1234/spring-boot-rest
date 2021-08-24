import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { addProductAction, updateProductAction } from "../../../store/action/loadProducts";

import InputField from "../../molecules/input field/InputField";
import SelectField from "../../molecules/select field/SelectField";
import TextAreaField from "../../molecules/textarea field/TextAreaField";
import Upload from "../../atoms/icons/Upload Icon/Upload";
import SaveProductButton from "../../atoms/buttons/Submit/SaveProductButton";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import Box from "@material-ui/core/Box";

import "./style.scss";

const AddProducts = ({ setShowModal, editProduct }) => {
  let [productImages, setProductImages] = useState([]);
  let [editProductImages, setEditProductImages] = useState(
    editProduct ? editProduct.productImages : []
  );
  const categories = useSelector((state) => state.category);
  const token = useSelector((state) => state.isLoggedIn.userLoggedIn.token);
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
        headers: {
          Authorization: token,
        },
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
          Authorization: token,
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
          fetch(`/api/products/${json.id}`, {
            method: "PUT",
            headers: {
              Authorization: token,
              Accept: "application/json",
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify(json),
          })
            .then((res) => res.json())
            .then((json) => {
              dispatch(addProductAction(json));
              event.target.reset();
              setProductImages([]);
            });
        });
    }, 500);
  };

  let imageList = (event) => {
    if (event.target.files.length <= 3 && productImages.length < 3)
      setProductImages([...productImages, ...Array.from(event.target.files)]);
    else event.target.value = null;
  };

  let updateProduct = (event, id) => {
    event.preventDefault();
    let data = Object.fromEntries(new FormData(event.target).entries());
    delete data.fileToUpload;
    data = {
      ...data,
      productImages: editProductImages,
      date: editProduct.date,
      categories: [categories.find(
        (e) => e.name === document.querySelector(".product__select").value
      )],
    };

    fetch(`/api/products/${id}`, {
      method: "PUT",
      headers: {
        Authorization: token,
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((json) => {
        dispatch(updateProductAction(json));
        event.target.reset();
        setEditProductImages([]);
      });
  };

  return (
    <div className="modal--form--product">
      <h3 className="form-title">{editProduct ? 'Update Product' : 'Add New Product'} </h3>
      <span className="form-title-small">
      {editProduct ? 'Edit information for the product you want to update.' : 'Add some information for the product you want to create.'}
        
      </span>
      <form
        id="add-product"
        onSubmit={(event) =>
          editProduct ? updateProduct(event, editProduct.id) : addProduct(event)
        }
      >
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
              value={editProduct ? editProduct.name : ""}
            />
            <SelectField
              field={{ _uid: "categories", label: "Category" }}
              value={categories}
              className="product__input"
              required="required"
              selected={editProduct && editProduct.categories.length > 0 ? editProduct.categories[0].name : ''}
            />
            <Box display="flex" flexGrow={1} justifyContent="space-between">
              <InputField
                field={{ _uid: "weight", label: "Weight" }}
                type="text"
                width="100"
                className="product__input"
                required="required"
                value={editProduct ? editProduct.weight : ""}
              />
              <InputField
                field={{ _uid: "quantity", label: "Quantity" }}
                type="text"
                width="100"
                className="product__input"
                required="required"
                value={editProduct ? editProduct.quantity : ""}
              />
              <InputField
                field={{ _uid: "price", label: "Price" }}
                type="number"
                className="product__input"
                required="required"
                width="100"
                value={editProduct ? editProduct.price : ""}
              />
            </Box>

            <Box display="flex" flexGrow={10} flexDirection="column">
              <label className="product__input">Upload Images</label>
              <Box display="flex" flexGrow={1}>
                {editProduct && editProductImages.length > 0
                  ? editProductImages.map((val, index) => {
                      return (
                        <section
                          key={index}
                          className="imageSection"
                          style={{ position: "relative" }}
                        >
                          <HighlightOffIcon
                            className="closeIcon"
                            onClick={() =>
                              setEditProductImages(
                                editProductImages.filter(
                                  (item, imageIndex) => imageIndex !== index
                                )
                              )
                            }
                          />
                          <img
                            style={{
                              width: "80px",
                              height: "80px",
                              margin: "5px",
                              pointerEvents: "none",
                            }}
                            data-file={val.name}
                            key={index}
                            src={`${val.image}`}
                            alt={val.name}
                          />
                        </section>
                      );
                    })
                  : productImages.map((val, index) => {
                      return (
                        <section
                          key={index}
                          className="imageSection"
                          style={{ position: "relative" }}
                        >
                          <HighlightOffIcon
                            className="closeIcon"
                            onClick={() =>
                              setProductImages(
                                productImages.filter(
                                  (item, imageIndex) => imageIndex !== index
                                )
                              )
                            }
                          />
                          <img
                            style={{
                              width: "80px",
                              height: "80px",
                              margin: "5px",
                              pointerEvents: "none",
                            }}
                            data-file={val.name}
                            key={index}
                            src={`${URL.createObjectURL(val)}`}
                            alt={val.name}
                          />
                        </section>
                      );
                    })}
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
            value={editProduct ? editProduct.description : ""}
          />
        </Box>
        <Box display="flex" flexGrow={10} p={1} justifyContent="space-around">
          <span
            onClick={() => {
              setShowModal(false);
              document.querySelector("#add-product").reset();
            }}
            className="product__submit cancel-btn"
          >
            Cancel
          </span>
          <SaveProductButton type="submit" value={editProduct ? 'Update' : 'Publish'} />
        </Box>
      </form>
    </div>
  );
};

export default AddProducts;
