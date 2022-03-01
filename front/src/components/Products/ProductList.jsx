import React from "react";
import PreLoad from "../Preload/Preload";


import Products from "./Product";
import "../Products/ProductList.css";
import { usePageContext } from '../Layout';

const ProductList = () => {
  const { fetching, products } = usePageContext();
  if (fetching) return <PreLoad />;

  return (
    <section className="cards-container">
      {products.map((item) => (
        <Products key={item.name} item={item} />
      ))}
    </section>
  );
};

export default ProductList;
