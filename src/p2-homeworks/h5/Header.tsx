import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div>
      <nav>
        <NavLink to="/hw1">H1</NavLink>
        <NavLink to="/hw2">H2</NavLink>
        <NavLink to="/hw3">H3</NavLink>
        <NavLink to="/hw4">H4</NavLink>
      </nav>
    </div>
  );
}

export default Header;
