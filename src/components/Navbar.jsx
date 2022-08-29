import React from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { CartContext } from "../context/CartContext";
// import { Navigate } from "react-router-dom";
// use react-router Link or NavLink


const Navbar = () => {
  const {auth,handleAuth} = React.useContext(AuthContext);

  const {cart} = React.useContext(CartContext)
  return (
    <div data-cy="navbar">
   { !auth ?  <Link data-cy="navbar-home-link" to="/">Home</Link> : <p>Home</p> }
     { <span data-cy="navbar-cart-items-count">{ auth ? <h3>Count: {cart}</h3> : null}</span>}
      {/* <button data-cy="navbar-login-logout-button" >{ !auth ? "Login" : "Logout" }</button> */}
      {/* {
      auth ? <button  onClick={handleAuth}>{ !auth ? "Login" : "Logout" }</button> : <Link to="/">Login</Link>
    } */}
    {
      auth ? <button data-cy="navbar-login-logout-button" onClick={handleAuth}>Logout</button> : <Link to="/">Login</Link>
    }
     {/* {
      auth ? <h3>Count: {cart}</h3> : null
    } */}
    
    {/* <button>{ !auth ? "Login" : "Logout" }</button> */}
    </div>
  );
};

export {Navbar};
