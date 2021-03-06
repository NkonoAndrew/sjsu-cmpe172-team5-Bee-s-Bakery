import React from 'react';
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import LogoutButton from './LogoutButton';
import LoginButton from './LoginButton';


const Navbar = () => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };
    return (
        <nav className="navbar">
        { /*logo*/}
        <div className="navbar__logo">
            <h2>Bee's Bakery</h2>     
        </div>


        { /*links*/}
        <ul className="navbar__links">
        <li>
          <Link to="/cart" className="cart__link">
            <i className="fas fa-shopping-cart"></i>
            <span>
              Cart <span className="cartlogo__badge">{getCartCount()}</span>
            </span>
          </Link>
        </li>
        <li>
          <Link to="/">Shop</Link>
        </li>
        <li>
          <LoginButton />
        </li>
        <li>
          <LogoutButton />
        </li>
      </ul>
            
        </nav>
    );
};

export default Navbar;
