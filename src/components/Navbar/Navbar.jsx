import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <>
      <nav role="navigation">
        <div id="menuToggle">
          <input type="checkbox" />

          <span></span>
          <span></span>
          <span></span>

          <ul id="menu">
            <a href="/">
              <li>Home</li>
            </a>
            <a href="/Portfolio">
              <li>Portfolio</li>
            </a>
            <a href="/projects">
              <li>Projects</li>
            </a>
            <a href="/contact">
              <li>Contact Me</li>
            </a>
            <a target="_blank" href="http://futuretech.epizy.com">
              <li>Blog</li>
            </a>
            <a href="/live_tools">
              <li>Live Tools</li>
            </a>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
