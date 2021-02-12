import React from "react";
import { Link } from "react-router-dom";
import { Twitter, ShoppingCart } from "react-feather";
import logo from "~/assets/logos/ball@1x.svg";

/**
 * Header layout:
 * | NAV | BRAND | XTRA |
 */

const Header = () => {
  return (
    <header>
      <div className="header-in">
        {/* Branding */}
        <div className="brand">
          <Link to="/">
            <img src={logo} loading="lazy" alt="Gamers4War" />
          </Link>
        </div>
        {/* Main Navigation */}
        <nav className="navbar">
          <ul className="nav-links" aria-roledescription="main navigation">
            <li className="nav-item">
              <Link to="/">Item</Link>
            </li>
            <li className="nav-item">
              <Link to="/">Item</Link>
            </li>
            <li className="nav-item">
              <Link to="/">Item</Link>
            </li>
          </ul>
        </nav>
        {/* Extra Navigation */}
        <div className="x-navbar">
          <ul
            className="nav-links --justify-right"
            aria-roledescription="extra navigation"
          >
            <li className="nav-item">
              <a
                href="https://twitter.com/Gamers4War"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="twitter"
              >
                <Twitter />
              </a>
            </li>
            <li className="nav-item">
              <a href="/" aria-label="store">
                <ShoppingCart />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
