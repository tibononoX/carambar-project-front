import React from "react";
import logo from "@assets/Logo.png";
import carambarjoke from "@assets/carambar-joke.png";

const Header = () => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <img src={carambarjoke} className="App-logo" alt="carambarLogo" />
    </header>
  );
};

export default Header;
