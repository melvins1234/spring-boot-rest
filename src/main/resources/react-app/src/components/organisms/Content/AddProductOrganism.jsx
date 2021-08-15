import AddProductsForm from '../Form/AddProductsForm'
import Divider from "@material-ui/core/Divider";

import "./style.scss";

const AddProductOrganism = () => {
  return (
    <div className="product__main">
      <header className="product__main--header">
        <h3>Add Product</h3>
      </header>
      <Divider />
      <AddProductsForm />
    </div>
  );
};

export default AddProductOrganism;
