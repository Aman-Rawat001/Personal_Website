import React from "react";
import "./footer.css";
// #e5e5e5
const Footer = () => {
  return (
    <>
      <div className="main_footer">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#e5e5e5"
            fill-opacity="1"
            d="M0,32L48,69.3C96,107,192,181,288,218.7C384,256,480,256,576,224C672,192,768,128,864,112C960,96,1056,128,1152,154.7C1248,181,1344,203,1392,213.3L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
        <div className="footer">
          <p>©All Right Reserved By Aman Rawat</p>
          <a href="#">
            <p>amanrawa2@gmail.com</p>
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
