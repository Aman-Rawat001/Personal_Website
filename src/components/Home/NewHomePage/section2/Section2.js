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
        <div className="col-lg-3">
          <a href="/web-development-projects">
            <div className="contentBox box1 p-3">
              <h5 className="montserrat600">Web Development</h5>
              <p className="mulish400">
                I enjoy every step of the design process.
              </p>
              <div className="gotoBox">
                <FontAwesomeIcon icon={faArrowCircleRight} />
              </div>
            </div>
          </a>
        </div>
        <div className="col-lg-3">
          <a href="/machine-learning-projects">
            <div className="contentBox box2 p-3">
              <h5 className="montserrat600">Machine Learning</h5>
              <p className="mulish400">
                I enjoy every step of the design process.
              </p>
              <div className="gotoBox">
                <FontAwesomeIcon icon={faArrowCircleRight} />
              </div>
            </div>
          </a>
        </div>
        <div className="col-lg-3">
          <div className="contentBox box3 p-3">
            <h5 className="montserrat600">Cyber Security</h5>
            <p className="mulish400">
              I enjoy every step of the design process.
            </p>
            <div className="gotoBox">
              <FontAwesomeIcon icon={faArrowCircleRight} />
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="contentBox box4 p-3">
            <h5 className="montserrat600">Blogging</h5>
            <p className="mulish400">
              I enjoy every step of the design process.
            </p>
            <div className="gotoBox">
              <FontAwesomeIcon icon={faArrowCircleRight} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
