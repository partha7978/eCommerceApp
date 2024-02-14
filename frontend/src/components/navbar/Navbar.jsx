import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="country">
            <img src="../../../public/assets/india.png" alt="country image" />
            <KeyboardArrowDownIcon />
          </div>
          <div className="nav-item">
            <Link className="link" to="/products/1">
              Men{" "}
            </Link>
          </div>
          <div className="nav-item">
            <Link className="link" to="/products/1">
              Woman{" "}
            </Link>
          </div>
          <div className="nav-item">
            <Link className="link" to="/products/1">
              Kids{" "}
            </Link>
          </div>
        </div>
        <div className="center">
          <Link className="link" to="/">
            ECOMMERCE
          </Link>
        </div>
        <div className="right">
          <div className="nav-item">
            <Link className="link" to="/">
              Home
            </Link>
          </div>
          <div className="nav-item">
            <Link className="link" to="/about">
              About
            </Link>
          </div>
          <div className="nav-item">
            <Link className="link" to="/contact">
              Contact
            </Link>
          </div>
          <div className="nav-item">
            <Link className="link" to="/stores">
              Stores
            </Link>
          </div>
          <div className="nav-item icon">
            <SearchIcon />
          </div>
          <div className="nav-item icon">
            <PersonOutlineIcon />
          </div>-------start fropm 19:07.00
          <div className="nav-item icon">
            <FavoriteBorderIcon />
          </div>
          <div className="nav-item icon">
            <Link className="link" to="/cart">
              <ShoppingCartIcon />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
