import { useState } from "react";

import Divider from "@material-ui/core/Divider";
import ProductTable from "../../molecules/tables/ProductTable";
import AddProductsForm from "../Form/AddProductsForm";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

import "./style.scss";

const AddProductTable = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="product__main">
      <header className="product__main--header">
        <h3>Products</h3>
        <span onClick={() => setShowModal(true)} className={`content__btn`}>
            <AddCircleOutlineIcon /> Add Product
        </span>
      </header>
      <Divider />
      {showModal ?  <AddProductsForm setShowModal={setShowModal} /> : null}
      <ProductTable />
    </div>
  );
};

export default AddProductTable;
