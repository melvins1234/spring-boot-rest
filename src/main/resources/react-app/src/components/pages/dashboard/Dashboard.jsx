import Header from "../../organisms/Header/Header";
import Navbar from "../../organisms/Navbar/Navbar";

import "../../preset.scss";
import "./style.scss";

const Dashboard = () => {
  return (
    <div>
      <Header />
      <div className="main__content">
        <Navbar />
      </div>
    </div>
  );
};

export default Dashboard;
