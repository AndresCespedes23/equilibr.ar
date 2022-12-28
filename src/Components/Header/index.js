/* eslint-disable no-undef */
import React from "react";

function Header() {
  return (
    <header>
      <img src={`${process.env.PUBLIC_URL}/images/eq-logo.png`} alt="eq-logo" />
      <nav>
        <ul>
          <li>Quienes somos</li>
          <li>Servicios</li>
          <li>Clientes</li>
          <li>Contacto</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
