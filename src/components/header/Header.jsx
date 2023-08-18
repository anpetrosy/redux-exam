import React from "react";
import "./Header.scss";
import { CONFIG } from "../../config";

const Header = () => {
  return (
    <div className="header">
      <div className="header-nav">
        <div className="header-nav-location"></div>
        <div className="header-nav-menu">
          {CONFIG.navs.map(({ id, title }) => (
            <h4 key={id}>{title}</h4>
          ))}
        </div>
      </div>
      <div className="header-title">A P O L L O N I A N</div>
      <div className="header-menu">
        <div className="header-menu-search">
          <input type="text" placeholder="Search" />
          <div className="header-menu-search-icon"></div>
        </div>
        <div className="header-menu-icons">
          <div className="header-menu-icons-heart"></div>
          <div className="header-menu-icons-bag"></div>
          <div className="header-menu-icons-person"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
