import React from "react";
import "./Section3.css";
// importing featured images.
import notesUniverse from "./featuredImages/notesUniverse.jpg";
import handTracking from "./featuredImages/handtracking.jpg";
import imageLib from "./featuredImages/imageLib.jpg";
import securityCam from "./featuredImages/securityCam.jpg";
import faceDetection from "./featuredImages/faceDetection.jpg";
import futureTech from "./featuredImages/futureTech.jpg";

const Section3 = () => {
  return (
    <div>
      <div className="container section3 my-5">
        <div className="row ">
          <div className="my-5">
            <h3
              className="montserrat600 mt-5"
              style={{ color: "#3d3d3d", marginBottom: "0" }}
            >
              FEATURED WORKS
            </h3>
            <small className="mulish400">
              (Tap the image to access the code/website)
            </small>
          </div>
          <div
            className="col-lg-4 featuredBox"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <a
              style={{ textDecoration: "none" }}
              href="https://notes-universe.web.app/"
              target="_blank"
            >
              <div className="imageBox">
                <img
                  className="featureImg"
                  src={notesUniverse}
                  alt="featured_Image"
                />
                <h6 className="montserratNormal mt-4">Notes Universe</h6>
                <p className="mulish400">Free Notes Surfing Site</p>
              </div>
            </a>
          </div>
          <div
            className="col-lg-4 featuredBox"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <a
              style={{ textDecoration: "none" }}
              href="http://brightdestiny.co.bw/"
              target="_blank"
            >
              <div className="imageBox">
                <img
                  className="featureImg"
                  src={futureTech}
                  alt="featured_Image"
                />
                <h6 className="montserratNormal mt-4">
                  Bright Destiny PVT LTD
                </h6>
                <p className="mulish400">Botswana Travel Agency</p>
              </div>
            </a>
          </div>
          <div
            className="col-lg-4 featuredBox"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <a
              style={{ textDecoration: "none" }}
              href="https://dun-services.web.app/"
              target="_blank"
            >
              <div className="imageBox">
                <img
                  className="featureImg"
                  src={imageLib}
                  alt="featured_Image"
                />
                <h6 className="montserratNormal mt-4">Dun Services</h6>
                <p className="mulish400">Find Best Services For You</p>
              </div>
            </a>
          </div>
          <div
            className="col-lg-4 featuredBox"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <a
              style={{ textDecoration: "none" }}
              href="https://github.com/Aman-Rawat001/Hand_Gesture-Recognization"
              target="_blank"
            >
              <div className="imageBox">
                <img
                  className="featureImg"
                  src={handTracking}
                  alt="featured_Image"
                />
                <h6 className="montserratNormal mt-4">
                  Hand Gesture Recognization
                </h6>
                <p className="mulish400">Machine Learning</p>
              </div>
            </a>
          </div>
          <div
            className="col-lg-4 featuredBox"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <a
              style={{ textDecoration: "none" }}
              href="https://github.com/Aman-Rawat001/Face-Recognition"
              target="_blank"
            >
              <div className="imageBox">
                <img
                  className="featureImg"
                  src={faceDetection}
                  alt="featured_Image"
                />
                <h6 className="montserratNormal mt-4">Face Detection</h6>
                <p className="mulish400">Machine Learning</p>
              </div>
            </a>
          </div>

          <div
            className="col-lg-4 featuredBox"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <a
              style={{ textDecoration: "none" }}
              href="https://github.com/Aman-Rawat001/Object-recognization-reactJs-web-app"
              target="_blank"
            >
              <div className="imageBox">
                <img
                  className="featureImg"
                  src={securityCam}
                  alt="featured_Image"
                />
                <h6 className="montserratNormal mt-4">Smart Security Cam</h6>
                <p className="mulish400">Machine Learning</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
