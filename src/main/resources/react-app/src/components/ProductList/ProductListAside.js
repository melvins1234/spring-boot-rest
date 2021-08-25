import { ProductNavTab } from "./ProductNavTabs";
import { ProductColor } from "./ProductColor";

export const ProductCategory = (props) => {
  let tabs = [];
  props.nav.forEach((e) => {
    tabs.push(
      <ProductNavTab
        key={e.category}
        category={e.category}
        stockVal={e.stock}
        path={e.path}
        active={e.active}
      />
    );
  });

  return (
    <nav className="product-listing__filter__categories">
      <h4>ACCESSORIES</h4>
      <ul className="product-listing__filter__categories--category-list">
        {tabs}
      </ul>
    </nav>
  );
};

export const ProductPrice = () => {
  return (
    <section className="product-listing__filter__prices">
      <h4>PRICES</h4>
      <div className="product-listing__filter__prices__ranger-text">
        <span className="product-listing__filter__prices__ranger-text--ranger-label">
          Ranger:{" "}
        </span>
        <span id="min-price">$13.99</span>&nbsp;-&nbsp;
        <span id="max-price">$25.99</span>
      </div>
      <div className="price-slider">
        <input
          defaultValue="25000"
          min="0"
          max="120000"
          step="500"
          type="range"
        />
        <input
          defaultValue="50000"
          min="0"
          max="120000"
          step="500"
          type="range"
        />
      </div>
    </section>
  );
};

export const ProductColorPicker = () => {
  return (
    <section className="product-listing__filter__color-picker">
      <h4>COLOR</h4>
      <div id="color-set">
        <ProductColor id="blue" />
        <ProductColor id="red" />
        <ProductColor id="black" />
        <ProductColor id="yellow" />
        <ProductColor id="pink" />
        <ProductColor id="gray" />
      </div>
    </section>
  );
};
