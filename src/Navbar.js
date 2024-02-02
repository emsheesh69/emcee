import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div>
        <img src="pic/logo.jpg" alt="logo" className="logo" />
      </div>
      <div>
        <a href="/" className="link">
          Creativity & Design
          <span className="arrow"></span>
        </a>
        <a href="/products" className="link">
          PDF & E-signatures
          <span className="arrow"></span>
        </a>
        <a href="/downloads" className="link">
          Marketing & Commerce
          <span className="arrow"></span>
        </a>
        <a href="/support" className="link">
          Help & Support
          <span className="arrow"></span>
        </a>
        <a href="/sign-in" className="sign-in-link">
          Sign In
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
