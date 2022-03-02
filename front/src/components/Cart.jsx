import React from "react";

function Cart() {
  return (
    <div className="container-cart">
      <picture>
        <img
          className="img-detail"
          src="http://localhost:5000/images/phone.jpg"
          alt="product"
        />
      </picture>
      <section className="cart-info">
        <p>Bike</p>
        <p>Description</p>
      </section>
      <section className="cart-costo">
        <p>$100</p>
      </section>
    </div>
  );
}

export default Cart;
