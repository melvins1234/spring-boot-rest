import AddButton from "../../atoms/buttons/Add Product/AddButton";
import Divider from "@material-ui/core/Divider";
import ProductTable from "../../molecules/tables/ProductTable";

import "./style.scss";

const AddProductTable = () => {
  return (
    <div className="product__main">
      <header className="product__main--header">
        <h3>Products</h3>
        <AddButton value="Add Product" />
      </header>
      <Divider />
      <ProductTable />
    </div>
  );
};

export default AddProductTable;
