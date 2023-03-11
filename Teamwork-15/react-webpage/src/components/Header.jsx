import React from "react";
import {Link, NavLink} from "react-router-dom"

const Header = () => {
  return (
    <header>
      <div class="header__title">
        <Link to="/">
          <span class="company">Clarusway</span> Web Design
        </Link>
      </div>
      <nav class="header__nav">
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/about">ABOUT</NavLink>
        <NavLink to="/services">SERVICES</NavLink>
      </nav>
    </header>
  );
};

export default Header;
