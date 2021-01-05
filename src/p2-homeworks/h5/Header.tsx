import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";

function Header() {
  return (
    <div>
      <nav>
        <NavLink activeClassName={s.active} to="/hw1">
          H1
        </NavLink>
        <NavLink activeClassName={s.active} to="/hw2">
          H2
        </NavLink>
        <NavLink activeClassName={s.active} to="/hw3">
          H3
        </NavLink>
        <NavLink activeClassName={s.active} to="/hw4">
          H4
        </NavLink>
      </nav>
    </div>
  );
}

export default Header;
