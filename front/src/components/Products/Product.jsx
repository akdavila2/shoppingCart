import React from "react";

import iconCart from "../../assets/icon-add-cart.png";
import { usePageContext } from "../Layout";
import "../Products/ProductList.css";

const Product = ({ item }) => {
  const { setSelected, setView } = usePageContext();

  const onClick = () => {
    console.log("entrando a imagen ", item);
    console.log("que id soy ", item._id);

    setSelected(item._id);

    setView("detail");
  };

  return (
    <article className="cards-content" onClick={onClick}>
      <div className="product-card">
        <img src={`http://localhost:5000${item.image}`} alt={item.name} />

        <div className="product-info">
          <div>
            <p>${item.price}</p>
            <p>{item.name.slice(0, 20)}...</p>
            <p>{item.description.slice(0, 150)}...</p>
          </div>
          <div className="pie-card">
            <button className="btn">
              <img src={iconCart} alt="add to cart" />
              Add item to cart
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Product;
