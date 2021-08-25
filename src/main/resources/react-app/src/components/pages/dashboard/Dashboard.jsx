import Header from "../../organisms/Header/Header";
import Navbar from "../../organisms/Navbar/Navbar";

import "../../preset.scss";
import "./style.scss";

const Dashboard = () => {
  return (
    <section className="page-holder dashboard">
      <Header />
      <div className="main__content">
        <Navbar />
      </div>
    </section>
  );
};

export default Dashboard;
