import Navbar from "../../organisms/Navbar/Navbar";
import UserOrg from "../../organisms/Content/User/User";

const UserTemplate = () => {
  return (
    <div className="main__content">
      <Navbar />
      <UserOrg />
    </div>
  );
};

export default UserTemplate;
