import React from "react";
import iconAdd from "../../assets/iconagregar.png";
import iconDelete from "../../assets/icondelete.png";
import { usePageContext } from '../Layout';
import "./Cart.css";

function Cart() {
  const { products } = usePageContext();
  return (
    <>
      <div className="container-principal">
        {products.map((item) => (
          <div key={item.id} className="container-cart">
            <picture>
              <img
                className="img-detail"
                src={`http://localhost:5000${item.image}`}
                alt="product"
              />
              <div className="cart-price">
                <p>${item.price}</p>
              </div>
            </picture>
            <section className="cart-info">
              <p>{item.name}</p>
            
            </section>
         
            <section className="cart-actions">
              <img
                src={iconAdd}
                alt="icono agregar"
                onClick={() => console.log("clicking")}
              />
              <img
                src={iconDelete}
                alt="icono eliminar"
                onClick={() => console.log("clicking")}
              />
            </section>
          </div>
        ))}
           <section className="cart-total">
              <p>TOTAL</p>
              <p>5000000</p>
              {/* <p>${totalPrice.toFixed(2)}</p> */}
            </section>
      </div>
    </>
  );
}

export default Cart;
