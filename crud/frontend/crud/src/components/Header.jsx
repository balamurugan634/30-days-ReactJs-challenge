import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
const Header = ({ handleTable }) => {
  return (
    <nav
      className="navbar bg-dark border-bottom border-body"
      data-bs-theme="dark"
    >
      <div className="logo ">
        <Link to={"/"} className="navbar-brand">
          Crud
        </Link>
      </div>
      <ul className="navbar-nav nav-ul" style={{ display: "flex" }}>
        <li className="nav-item">
          <Link to={"/add"} className="nav-link">
            Add employee
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"/"} className="nav-link ">
            Employee list
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
