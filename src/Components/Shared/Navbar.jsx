import React from "react";
import "../Styles/Navbar.css";
import Logo from "../../Assets/Images/Logo.png"
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className="MainNavbar">
      <div className="Logo">
            <img src={Logo} alt="Logo" />
      </div>
      <div className="PagesList">
        <ul>
          <Link className="Link" to="/" >Home</Link>
          <Link className="Link"  to="/about">About Us</Link>
          <Link className="Link" to="/setup">Business setup in UAE</Link>
          <Link className="Link" to="/services">Our Services</Link>
          <Link className="Link" to="/blogs">Blogs</Link>
          <Link className="Link" to="/contact">Contact Us</Link>
        </ul>
      </div>
      <div className="CalculatorButton">
        <button>Cost Calculator</button>
      </div>
    </div>
  );
};

export default Navbar;
