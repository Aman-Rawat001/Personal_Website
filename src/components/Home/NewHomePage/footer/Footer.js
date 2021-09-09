import React from "react";
import "./Footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="container-fluid py-5 footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <p className="montserrat600 textFooter">AMAN RAWAT</p>
            <p className="montserrat600 textFooter">
              © All Right Reserved 2021
            </p>
          </div>
          <div className="col-lg-3">
            <p className="montserrat600 textFooter">Balawala, Dehradun</p>
            <p className="montserrat600 textFooter">Uttrakhand, 248001</p>
          </div>
          <div className="col-lg-3">
            <p className="montserrat600 textFooter">amanrawa2@gmail.com</p>
            <p className="montserrat600 textFooter">+91 9058153667</p>
          </div>
          <div className="col-lg-3">
            <div className="textFooter footerIcons">
              <FontAwesomeIcon icon={faFacebook} />
              <FontAwesomeIcon icon={faLinkedin} />
              <FontAwesomeIcon icon={faGithub} />
              <FontAwesomeIcon icon={faInstagram} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
