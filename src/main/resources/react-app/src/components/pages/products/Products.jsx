import Header from "../../organisms/Header/Header";
import Content from "../../templates/product content/Content"

import "../../preset.scss";
import "./style.scss";

const Products = () => {
  return (
    <section className="page-holder product">
      <Header />
      <Content />
    </section>
  );
};

export default Products;
