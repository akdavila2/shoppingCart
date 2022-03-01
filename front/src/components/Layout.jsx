import React, { useContext, createContext, useState } from "react";
import NavBar from "../components/NavBar/NavBar";

import ProductList from "./Products/ProductList.jsx";
import "./Products/ProductList.css";
import ProductDisplay from "./ProductDisplay/ProductDisplay";
import Cart from "./Cart/Cart";
import useData from './useData';
import Footer from './Footer/Footer';


const PageContext = createContext();
export const usePageContext = () => useContext(PageContext);
const Layout = () => {
  const [selected, setSelected] = useState();
  const [view, setView] = useState("list");
  const [products, fetching]= useData()
  const views = {
    list: ProductList,
    cart: Cart,
    detail: ProductDisplay,
  };

  //const Control = selected ? Products : ProductDisplay;
  const Control = views[view];
  const state = { selected, setSelected, view, setView, products, fetching };


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
