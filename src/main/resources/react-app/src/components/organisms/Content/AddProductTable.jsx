import AddProduct from "../../atoms/buttons/Add Product/AddProduct";
import Divider from "@material-ui/core/Divider";
import ProductTable from "../../molecules/Tables/ProductTable";

import "./style.scss";

const AddProductTable = () => {
  return (
    <div className="product__main">
      <header className="product__main--header">
        <h3>Products</h3>
        <AddProduct />
      </header>
      <Divider />
      <ProductTable />
    </div>
  );
};

export default AddProductTable;
