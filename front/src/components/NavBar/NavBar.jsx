import React from "react";
import logo from "../../assets/logo-shopping.png";
import cart from "../../assets/icons8-shopping-cart-66.png";
import "./NavBar.css";
import { usePageContext } from '../Layout';

const NavBar= () =>{


  const { setView, cartItems } = usePageContext();
  const onClick = () => {
    setView("cart");
  };
  const home=()=>{
    setView("list")
  }

  return (
    <nav>
      <div className="navbar-left">
        <img src={logo} alt="logo" className="logo-navbar" onClick={home}/>
        <ul>
          <li>
            <a href="/">Product List</a>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <ul>
          <li className="navbar-email">Hello Ecomsur</li>
          <li className="navbar-shopping-cart">
            <img src={cart} alt="icon cart" onClick={onClick} />
            <div>{cartItems.length}</div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
