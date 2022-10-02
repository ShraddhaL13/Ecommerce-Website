import React from "react";
// import Home from './Home'
// import Product from './Product'
// import Login from "./Login"

export default function Navbar() {
  return (
    <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="/">
            E-Digi-SHopee
          </a>
        </div>
        <ul className="nav navbar-nav">
          <li className="active">
            <a href="/">Home</a>
          </li>
          <li>
            <a href="./Product.js">Product</a>
          </li>
          <li className="dropdown">
            <a className="dropdown-toggle" data-toggle="dropdown" href="/">
              About US <span className="caret"></span>
            </a>
            <ul className="dropdown-menu">
              <li>
                <a href="/">Contact Us</a>
              </li>
              <li>
                <a href="/">Careers</a>
              </li>
              <li>
                <a href="/">Gallary</a>
              </li>
            </ul>
          </li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
          <li>
            <a href="/">
              <span className="glyphicon glyphicon-user"></span> Sign Up
            </a>
          </li>
          <li>
            <a href="/">
              <span className="glyphicon glyphicon-log-in"></span> Login
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
