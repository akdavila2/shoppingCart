import React, { useEffect, useState } from "react";
import axios from "axios";
import iconCart from "../assets/icon-add-cart.png";

function ProductList() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const apiUrl = `http://localhost:5000/api/products`;
      await axios
        .get(apiUrl)
        .then((response) => {
          const allResponse = response.data;
          console.log("allResponse", allResponse);
          setProduct(allResponse);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getData();
  }, []);

  return (
    <section class="cards-container">
      {product.map((item) => (
        <div class="cards-content">
          <div class="product-card">
            <img src={`http://localhost:5000${item.image}`} alt={item.name} />
            <div class="product-info">
              <div>
                <p>{item.name}</p>
                <p>{item.description}</p>
              </div>
              <div className="pie-card">
                <p>${item.price}</p>
                <img src={iconCart} alt="icono de carrito" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default ProductList;
