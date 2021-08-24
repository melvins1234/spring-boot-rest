import { useSelector, useDispatch } from "react-redux";
import { addCategory } from "../../../store/action/category";
import { ErrorFetchHandler } from "../../ErrorFetchHandler/ErrorFetchHandler";
import InputField from "../../molecules/input field/InputField";
import SaveProductButton from "../../atoms/buttons/Submit/SaveProductButton";
import TextAreaField from "../../molecules/textarea field/TextAreaField";
import Box from "@material-ui/core/Box";
import "./style.scss";

const AddNewCategoryForm = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.isLoggedIn.userLoggedIn.token);

  let addCategoryAction = (e) => {
    e.preventDefault();

    let data = Object.fromEntries(new FormData(e.target).entries());

    fetch("/api/categories", {
      method: "POST",
      headers: {
        Authorization: token,
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(data),
    })
      .then(ErrorFetchHandler)
      .then((json) => {
        dispatch(addCategory(json));
        e.target.reset();
      })
      .catch(error => console.log(error));
  };

  return (
    <div className="modal--form modal--form--category">
      <h3 className="form-title">Add New Category</h3>
      <span className="form-title-small">Add category for the products</span>
      <form
        onSubmit={addCategoryAction}
        className="category--form"
        id="add-product"
      >
        <Box display="flex" flexDirection="column" p={1}>
          <InputField
            field={{ _uid: "name", label: "Name" }}
            type="text"
            className="product__input"
            required="required"
          />
          <TextAreaField
            field={{ _uid: "description", label: "Description" }}
            className="product__input"
            width="100%"
            height="150"
          />
          <Box display="flex" flexWrap="wrap" justifyContent="space-around">
            <span
              onClick={() => {
                document
                  .querySelector(".modal--form")
                  .classList.remove("modal--form--show");
                document.querySelector(".category--form").reset();
              }}
              className="product__submit cancel-btn"
            >
              Cancel
            </span>
            <SaveProductButton
              className="submit-btn"
              type="submit"
              value="Add"
            />
          </Box>
        </Box>
      </form>
    </div>
  );
};

export default AddNewCategoryForm;
