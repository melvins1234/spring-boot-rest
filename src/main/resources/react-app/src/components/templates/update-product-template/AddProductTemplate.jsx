import Navbar from "../../organisms/Navbar/Navbar";
import UpdateProductOrganism from '../../organisms/Content/Product/AddProductOrganism' 

import "./style.scss";

const UpdateProductTemplate = () => {
  return (
    <div className="main__content">
      <Navbar />
      <UpdateProductOrganism />
    </div>
  );
};

export default UpdateProductTemplate;
