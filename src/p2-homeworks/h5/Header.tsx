import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";

function Header() {
  return (
    <div className={s.nav__wrapper}>
      <nav>
        <NavLink activeClassName={s.active} className={s.nav__link} to="/hw1">
          HW1
        </NavLink>
        <NavLink activeClassName={s.active} className={s.nav__link} to="/hw2">
          HW2
        </NavLink>
        <NavLink activeClassName={s.active} className={s.nav__link} to="/hw3">
          HW3
        </NavLink>
        <NavLink activeClassName={s.active} className={s.nav__link} to="/hw4">
          HW4
        </NavLink>
        <NavLink activeClassName={s.active} className={s.nav__link} to="/hw6">
          HW6
        </NavLink>
      </nav>
    </div>
  );
}

export default Header;
