import React from "react";
import "./Section2.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";

const Section2 = () => {
  return (
    <div className="container section2 mb-5">
      <div className="my-5">
        <h3
          className="montserrat600 mt-5"
          style={{ color: "#3d3d3d", marginBottom: "0" }}
        >
          PROJECTS
        </h3>
        <small className="mulish400">
          (Tap the box to access the projects)
        </small>
      </div>
      <div className="row">
        <div className="col-lg-3" data-aos="fade-down" data-aos-duration="1000">
          <a
            style={{ textDecoration: "none" }}
            href="/web-development-projects"
          >
            <div className="contentBox box1 p-3">
              <h5 className="montserrat600">Web Development</h5>
              <p className="mulish400">
                Let us take you into a deeper experience, make a moment a
                lasting conveyable memory.
              </p>
              <div className="gotoBox">
                <FontAwesomeIcon icon={faArrowCircleRight} />
              </div>
            </div>
          </a>
        </div>
        <div className="col-lg-3" data-aos="fade-down" data-aos-duration="1500">
          <a
            style={{ textDecoration: "none" }}
            href="/machine-learning-projects"
          >
            <div className="contentBox box2 p-3">
              <h5 className="montserrat600">Machine Learning</h5>
              <p className="mulish400">
                Predictions have an expiry date. Action is needed before
                predictions expire.
              </p>
              <div className="gotoBox">
                <FontAwesomeIcon icon={faArrowCircleRight} />
              </div>
            </div>
          </a>
        </div>
        <div className="col-lg-3" data-aos="fade-down" data-aos-duration="2000">
          <a style={{ textDecoration: "none" }} href="hacking-projects">
            <div className="contentBox box3 p-3">
              <h5 className="montserrat600">Cyber Security</h5>
              <p className="mulish400">
                If you think you know-it-all about cybersecurity, this
                discipline was probably ill-explained to you.
              </p>
              <div className="gotoBox">
                <FontAwesomeIcon icon={faArrowCircleRight} />
              </div>
            </div>
          </a>
        </div>
        <div className="col-lg-3" data-aos="fade-down" data-aos-duration="2500">
          <a
            style={{ textDecoration: "none" }}
            href="https://thepapareviews.com/"
            target="_blank"
          >
            <div className="contentBox box4 p-3">
              <h5 className="montserrat600">Blogging</h5>
              <p className="mulish400">
                As a blogger, everything you do flows from understanding your
                audience and seeking to help them.
              </p>
              <div className="gotoBox">
                <FontAwesomeIcon icon={faArrowCircleRight} />
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Section2;
