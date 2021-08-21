import Divider from "@material-ui/core/Divider";
import AddButton from "../../../atoms/buttons/Add Product/AddButton";
import UserListTable from "../../../molecules/tables/UserListTable";

const User = () => {
  return (
    <div className="product__main category__main">
      <header className="product__main--header category__main--header">
        <h3>Members </h3>
        <AddButton value="Add New" className="category--btn" />
      </header>
      <Divider />
      <UserListTable />
    </div>
  );
};

export default User;
