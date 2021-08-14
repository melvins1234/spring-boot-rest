import Navbar from "../../organisms/Navbar/Navbar";
import AddProductOrganism from '../../organisms/Content/AddProductOrganism' 

import "./style.scss";

const AddProductTemplate = () => {
  return (
    <div className="main__content">
      <Navbar />
      <AddProductOrganism />
    </div>
  );
};

export default AddProductTemplate;
