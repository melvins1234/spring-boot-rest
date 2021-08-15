import Navbar from "../../organisms/Navbar/Navbar";
import AddProductTable from "../../organisms/Content/AddProductTable";

import './style.scss'

const Content = () => {
  return (
    <div className="main__content">
      <Navbar />
      <AddProductTable />
    </div>
  );
};

export default Content;
