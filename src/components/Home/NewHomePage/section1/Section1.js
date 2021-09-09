import React from "react";
import section1Img from "../../../images/about_section_profile.jpg";
import "./Section1.css";

const Section1 = () => {
  return (
    <div>
      <div className="section1 my-5" id="section1">
        <div className="container">
          <div className="row section1Box">
            <div className="col-lg-6 imageBox">
              <img className="section1img" src={section1Img} alt="image" />
            </div>
            <div className="col-lg-6">
              <div>
                <h1 className="contentName">AMAN RAWAT</h1>
                <p className="montserrat600">Creative Web & App Developer</p>
              </div>
              <hr className="my-5" />
              <p className="mulish400">
                My name is Aman Rawat. I am a Web Developer, and I'm very
                passionate and dedicated to my work.
              </p>
              <p className="mulish400">
                With 20 years experience as a professional Web developer, I have
                acquired the skills and knowledge necessary to make your project
                a success. I enjoy every step of the design process, from
                discussion and collaboration.
              </p>
              <button>Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
