import React from "react";
import logo from "../assets/img/clarusway_logo.png"

const Footer = () => {
  return (
    <footer>
      <span class="footer__description">
        Clarusway Web Design, Copyright © 2022
      </span>
      <img
        class="footer__logo"
        src={logo}
        alt="clarusway_logo"
      />
    </footer>
  );
};

export default Footer;
