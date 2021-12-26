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
          <div className="col-lg-3 footerPairs">
            <p className="montserrat600 textFooter">AMAN RAWAT</p>
            <p className="montserrat600 textFooter">
              © All Right Reserved 2021
            </p>
          </div>
          <div className="col-lg-3 footerPairs">
            <p className="montserrat600 textFooter">Balawala, Dehradun</p>
            <p className="montserrat600 textFooter">Uttrakhand, 248001</p>
          </div>
          <div className="col-lg-3 footerPairs">
            <p className="montserrat600 textFooter">amanrawa2@gmail.com</p>
            <p className="montserrat600 textFooter">+91 9058153667</p>
          </div>
          <div className="col-lg-3 footerPairs">
            <div className="textFooter footerIcons">
              <a
                href="https://www.linkedin.com/in/aman-rawat-578b21193/"
                target="_blank"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                href="https://www.facebook.com/people/Aman-Rawat/100014344083429/"
                target="_blank"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="https://github.com/Aman-Rawat001" target="_blank">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                href="https://www.instagram.com/aman_rawat0123/ "
                target="_blank"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
