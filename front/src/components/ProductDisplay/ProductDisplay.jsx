import React from "react";
import iconCart from "../../assets/icons8-shopping-cart-48-white.png";
import { usePageContext } from "../Layout";
import "./ProductDisplay.css";

function ProductDisplay() {
  const { setView, selected, products, addArt } = usePageContext();
  console.log("selected", selected, "product", products);

  const product = products.find((item) => item._id === selected);
  if (!product) return "Error ";
  console.log(product);
  const onClick = () => {
    setView("cart");
  };

  return (
    <>
      <aside className="product-detail" onClick={onClick}>
        <section className="detail-image">
          <img
            className="img-detail"
            src={`http://localhost:5000${product.image}`}
            alt={product.name}
          />
        </section>
        <div className="item-info">
          <p>{product.name}</p>
          <p>{`Category: ${product.category}`}</p>
          <p>{product.description}</p>
          <p>{`Rating: ${product.rating}`}</p>
          <p>{`In Stock: ${product.countInStock}`}</p>
          <p>{`$ ${product.price}`}</p>
          <button className="primary-button add-to-cart-button" onClick={()=>addArt(product)}>
            <img src={iconCart} alt="add to cart" /> Add to cart
          </button>
        </div>
      </aside>
    </>
  );
}

export default ProductDisplay;
