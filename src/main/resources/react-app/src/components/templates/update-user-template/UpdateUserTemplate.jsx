import Navbar from "../../organisms/Navbar/Navbar";
import UpdateUserOrganism from '../../organisms/Content/Product/UpdateUserOrganism' 

import "./style.scss";

const UpdateUserTemplate = () => {
  return (
    <div className="main__content">
      <Navbar />
      <UpdateUserOrganism />
    </div>
  );
};

export default UpdateUserTemplate;
