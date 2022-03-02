import React from "react";
import logo from "../assets/logo-shopping.png";
import cart from "../assets/icons8-shopping-cart-66.png";

function NavBar() {
  return (
    <nav>
      <div class="navbar-left">
        <img src={logo} alt="logo" class="logo-navbar" />
        <ul>
          <li>
            <a href="/">Product List</a>
          </li>
        </ul>
      </div>
      <div class="navbar-right">
        <ul>
          <li class="navbar-email">Hello Ecomsur</li>
          <li class="navbar-shopping-cart">
            <img src={cart} alt="icon cart" />
            <div>2</div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
