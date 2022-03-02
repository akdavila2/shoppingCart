import React from "react";
import iconAdd from "../../assets/iconagregar.png";
import iconDelete from "../../assets/icondelete.png";
import { usePageContext } from "../Layout";
import "./Cart.css";

function Cart() {
  const { cartItems, addArt, removeArt } = usePageContext();

  const totalPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);

  return (
    <>
      <div className="container-principal">
        {cartItems.length === 0 && (
          <div className="cart-empty">Cart Is Empty</div>
        )}
        {cartItems.map((item) => (
          <div key={item._id} className="container-cart">
            <picture>
              <img
                className="img-detail"
                src={`http://localhost:5000${item.image}`}
                alt="product"
              />
              <div className="cart-price">
                <p> {`${item.qty} x ${item.price}`}</p>
              </div>
            </picture>
            <section className="cart-info">
              <p>{item.name}</p>
            </section>

            <section className="cart-actions">
              <img
                src={iconAdd}
                alt="icono agregar"
                onClick={() => addArt(item)}
              />
              <img
                src={iconDelete}
                alt="icono eliminar"
                onClick={() => removeArt(item)}
              />
            </section>
          </div>
        ))}
        <section className="cart-total">
          <p>TOTAL</p>
          <p>${totalPrice.toFixed(2)}</p>
        </section>
      </div>
    </>
  );
}

export default Cart;
