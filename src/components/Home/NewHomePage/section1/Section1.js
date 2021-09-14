import React from "react";
// import { NavLink } from "react-router-dom";
import section1Img from "../../../images/about_section_profile.jpg";
import "./Section1.css";

const Section1 = () => {
  return (
    <div>
      <div className="section1 py-5" id="section1">
        <div className="container">
          <div className="row section1Box">
            <div className="col-lg-6 imageBox" data-aos="zoom-in-right">
              <img className="section1img" src={section1Img} alt="image" />
            </div>
            <div
              className="col-lg-6"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <div>
                <h1 className="contentName montserrat600 ">AMAN RAWAT</h1>
                <p className="montserrat600">Creative Web & App Developer</p>
              </div>
              <hr className="my-5" />
              <p className="mulish400">
                My name is Aman Rawat. I am a Web Developer, and I'm very
                passionate and dedicated to my work.
              </p>
              <p className="mulish400">
                With 2+ years experience as a professional Web developer, I have
                acquired the skills and knowledge necessary to make your project
                a success. I enjoy every step of the design process, from
                discussion and collaboration.
              </p>
              <a href="/about">
                <button>More About Me</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
