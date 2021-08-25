import Divider from "@material-ui/core/Divider";
import AddNewCategoryForm from "../../Form/AddNewCategoryForm";
import CategoryListTable from "../../../molecules/tables/CategoryListTable";
import AddButton from "../../../atoms/buttons/Add Product/AddButton";

const Category = () => {
  return (
    <div className="product__main category__main">
      <header className="product__main--header category__main--header">
        <h3>Categories</h3>
        <AddButton value="Add Category" className="category--btn"/>
      </header>
      <Divider />
      
      <AddNewCategoryForm />
      <CategoryListTable />
    </div>
  );
};

export default Category;
