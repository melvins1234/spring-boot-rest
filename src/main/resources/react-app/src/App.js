import { BrowserRouter as Router, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import Header from "./components/Header/Header";
import { Product } from "./components/Product/Product";
import { SignIn } from "./components/SignIn/SignIn";
import { Banner } from "./components/Banner/Banner";
import { Middle } from "./components/Middle/Middle";
import { Bottom, BottomProduct } from "./components/Bottom/Bottom";
import { Bottom2 } from "./components/Bottom2/Bottom2";
import { Bottom3 } from "./components/Bottom3/Bottom3";
import { Bottom4 } from "./components/Bottom4/Bottom4";
import { Footer } from "./components/Footer/Footer";
import { Breadcrumbs } from "./components/Breadcrumbs/Breadcrumbs";
import { Modal } from "./components/Modal/Modal";
import { ProductList } from "./components/ProductList/ProductList";
import { Cart } from "./components/Cart/Cart";
import { Payment } from "./components/Payment/Payment";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import { loadProducts } from "./store/action/loadProducts";

import Dashboard from "./components/pages/dashboard/Dashboard";
import Products from "./components/pages/products/Products"
import AddProductPage from "./components/pages/products/AddProductPage";
import Categories from "./components/pages/category/Category"

const App = () => {
  const dispatch = useDispatch();

  const isModalClose = () =>
    !sessionStorage.getItem("isModalClose") ? true : false;

  // useEffect(() => {
  //   fetch("/api/products", {
  //     method: "GET",
  //     headers: new Headers({
  //       "Content-Type": "application/x-www-form-urlencoded",
  //     }),
  //   })
  //     .then((res) => res.json())
  //     .then((json) => {
  //       console.log(json);
  //       dispatch(loadProducts(json));
  //     });
  // }, []);

  let [showModal, setShowModal] = useState(isModalClose());
  return (
    <Router>
      <ScrollToTop key="ScrollToTop" />
      <Route
        exact
        path={[
          "/",
          "/product",
          "/store",
          "/iphone",
          "/ipad",
          "/macbook",
          "/cart",
          "/accessories",
          "/payment",
        ]}
        component={() => [
          showModal ? <Modal key="modal" setShowModal={setShowModal} /> : null,
          <Header key="Header" />,
        ]}
      />

      <Route exact path={"/admin"} component= { () => <Dashboard/>}/>
      <Route exact path={"/products"} component= { () => <Products/>}/>
      <Route exact path={"/products/add-product"} component= { () => <AddProductPage/>}/>
      <Route exact path={"/categories"} component= { () => <Categories/>}/>

      <Route
        exact
        path={[
          "/product",
          "/store",
          "/iphone",
          "/ipad",
          "/macbook",
          "/cart",
          "/accessories",
        ]}
        component={() => [<Breadcrumbs key="breadcrumbs" />]}
      />

      <Route exact path="/cart" component={() => [<Cart key="Cart" />]} />
      <Route
        exact
        path="/payment"
        component={() => [<Payment key="Payment" />]}
      />

      <Route
        exact
        path={["/store", "/accessories"]}
        component={() => [<ProductList key="ProductList" />]}
      />
      <Route
        exact
        path="/"
        component={() => [
          <Banner key="Banner" />,
          <Middle key="Middle" />,
          <Bottom key="Bottom" />,
          <Bottom2 key="Bottom2" />,
          <Bottom3 key="Bottom3" />,
          <Bottom4 key="Bottom4" />,
        ]}
      />
      <Route
        exact
        path="/product"
        component={() => [
          <Product key="Product" />,
          <BottomProduct key="BottomProduct" />,
        ]}
      />
      <Route exact path={["/login", "/signup"]} component={SignIn} />
      <Route
        exact
        path={[
          "/",
          "/product",
          "/store",
          "/iphone",
          "/ipad",
          "/macbook",
          "/cart",
          "/accessories",
          "/payment",
        ]}
        component={() => [<Footer key="Footer" />]}
      />
    </Router>
  );
};

export default App;
