import { Route } from "react-router-dom";

import {
  ProductCategory,
  ProductPrice,
  ProductColorPicker,
} from "./ProductListAside";
import { ProductListBanner } from "./ProductListBanner";
import { ProductListContetNav } from "./ProductListContentNav";
import Store from "./Store/Store";
import Accessories from "./Accessories/Accessories";
import "./ProductList.scss";

export const ProductList = () => {


  let categoryNav = [
      { category: "Apple Car", stock: 2, path: "#", active: "" },
      {
        category: "Air port & wireless",
        stock: 48,
        path: "#",
        active: "active",
      },
      { category: "Cables & Docks", stock: 14, path: "#", active: "" },
      { category: "Cases & Films", stock: 15, path: "#", active: "" },
      { category: "Charging Devices", stock: 23, path: "#", active: "" },
      { category: "Connected Home", stock: 1, path: "#", active: "" },
      { category: "Headphones", stock: 95, path: "#", active: "" },
    ],
    barndNav = [
      { category: "Apple", stock: 99, path: "#", active: "" },
      { category: "LG", stock: 99, path: "#", active: "active" },
      { category: "Samsung", stock: 99, path: "#", active: "" },
      { category: "Siemens", stock: 99, path: "#", active: "" },
    ];

  return (
    <section className="product-listing wrapper">
      <aside className="product-listing__filter">
        <ProductCategory key="1" nav={categoryNav} />
        <ProductPrice key="2" />
        <ProductColorPicker key="3" />
        <ProductCategory key="5" nav={barndNav} />
      </aside>
      <section className="product-listing__products">
        <ProductListBanner />
        <ProductListContetNav />

        <Route path="/store">
          <Store />
        </Route>

        <Route path="/accessories">
          <Accessories />
        </Route>

      </section>
    </section>
  );
};
