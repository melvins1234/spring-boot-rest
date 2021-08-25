import Header from "../../organisms/Header/Header";
import CategoryTemp from "../../templates/category template/Category";

import "../../preset.scss";

const Category = () => {
  return (
    <section className="page-holder category">
      <Header />
      <CategoryTemp />
    </section>
  );
};

export default Category;
