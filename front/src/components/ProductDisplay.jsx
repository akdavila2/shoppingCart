import React from "react";
import iconCart from "../assets/icons8-shopping-cart-48-white.png";

function ProductDisplay() {
  
  return (
    <aside class="product-detail">
        <section className="detail-image">
        <img className="img-detail" src="http://localhost:5000/images/phone.jpg" alt="product" />
     
        </section>
      <div class="product-info">
        <p>$35,00</p>
        <p>Bike</p>
        <p>
          "Bluetooth technology lets you connect it with compatible devices
          wirelessly High-quality AAC audio offers immersive listening
          experience Built-in microphone allows you to take calls while working"
        </p>
        <button class="primary-button add-to-cart-button">
          <img src={iconCart} alt="add to cart" /> Add to cart
        </button>
      </div>
    </aside>
  );
}

export default ProductDisplay;
