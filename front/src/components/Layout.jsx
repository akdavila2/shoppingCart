import React, { useContext, createContext, useState } from "react";
import NavBar from "../components/NavBar/NavBar";

import ProductList from "./Products/ProductList.jsx";
import "./Products/ProductList.css";
import ProductDisplay from "./ProductDisplay/ProductDisplay";
import Cart from "./Cart/Cart";
import useData from "./useData";
import Footer from "./Footer/Footer";

const PageContext = createContext();
export const usePageContext = () => useContext(PageContext);
const Layout = () => {
  const [selected, setSelected] = useState();
  const [view, setView] = useState("list");
  const [products, fetching] = useData();
  const [cartItems, setCartItems] = useState([]);
  const views = {
    list: ProductList,
    cart: Cart,
    detail: ProductDisplay,
  };
  const addArt = (product) => {
    const exist = cartItems.find((x) => x._id === product._id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product._id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const removeArt = (product) => {
    const exist = cartItems.find((x) => x._id === product._id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x._id !== product._id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x._id === product._id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  //const Control = selected ? Products : ProductDisplay;
  const Control = views[view];
  const state = {
    selected,
    setSelected,
    view,
    setView,
    products,
    fetching,
    cartItems,
    setCartItems,
    addArt,
    removeArt,
  };

  return (
    <>
      <PageContext.Provider value={state}>
        <NavBar />
        <Control />
        <Footer />
      </PageContext.Provider>
    </>
  );
};

export default Layout;
