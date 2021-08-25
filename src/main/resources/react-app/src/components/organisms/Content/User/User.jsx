import { useState } from "react";
import Divider from "@material-ui/core/Divider";
import AddButton from "../../../atoms/buttons/Add Product/AddButton";
import UserListTable from "../../../molecules/tables/UserListTable";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
const User = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="product__main category__main">
      <header className="product__main--header category__main--header">
        <h3>Members </h3>
        {show ? (
          <span onClick={() => setShow(false)} className={`content__btn`}>
            <ArrowBackIcon /> Back
          </span>
        ) : (
          <span onClick={() => setShow(true)} className={`content__btn`}>
            <AddCircleOutlineIcon /> Add New
          </span>
        )}
      </header>
      <Divider />
      <UserListTable showAdd={show} setShow={setShow} />
    </div>
  );
};

export default User;
