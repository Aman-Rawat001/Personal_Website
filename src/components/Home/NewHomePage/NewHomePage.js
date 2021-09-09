import React from "react";
import "./NewHomePage.css";
// import Navbar from "./navbarNew/Navbar";
import HeroScreen from "./HeroScreen/HeroScreen";
import Section1 from "./section1/Section1";
import Section2 from "./section2/Section2";
import Section3 from "./section3/Section3";
import Contact from "./contact/Contact";

import logoImg from "../../images/logo.png";
import "./navbarNew/Navbar.css";

const NewHomePage = () => {
  return (
    <div>
      <div className="newNavbar">
        {/* <Navbar /> */}
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
              <a className="navbar-brand" href="/">
                <img src={logoImg} alt="logo" />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item ">
                    <a className="nav-link activeHome" href="/">
                      Home
                    </a>
                  </li>
                  <li className="nav-item ">
                    <a className="nav-link" href="#about">
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#portfolio">
                      Portfolio
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" exact href="#projects">
                      Projects
                    </a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link" exact href="#contact">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <HeroScreen />
      <div id="about">
        <Section1 />
      </div>
      <div id="projects">
        <Section2 />
      </div>
      <div id="portfolio">
        <Section3 />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default NewHomePage;
