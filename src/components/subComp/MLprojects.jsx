import React from "react";
import "./Hprojects.css";

import ProjectBox from "./ProjectBox";
import img3 from "../images/img3.jpg";

const MLprojects = () => {
  return (
    <>
      <div className="bg-gray">
        <div className="container py-5 ">
          <h5 className="aboutTitle montserrat600 ">
            MACHINE LEARNING PROJECTS SO FAR
          </h5>
          <hr className="mb-5" />
          <div className="row">
            <div className="col-lg-4 col-12">
              <ProjectBox
                hidden_link="true"
                img={img3}
                title="Live Moment Tracking"
                quote="Motion Detection OpenCV"
                link="https://github.com/Aman-Rawat001/Live-moment-tracking-in-ML"
              />
            </div>
            <div className="col-lg-4 col-12">
              <ProjectBox
                hidden_link="true"
                img={img3}
                title="Hand Gesture Recognition"
                quote="With OpenCV & Mediapipe"
                link="https://github.com/Aman-Rawat001/Hand_Gesture-Recognization"
              />
            </div>
            <div className="col-lg-4 col-12">
              <ProjectBox
                hidden_link="true"
                img={img3}
                title="Object Detection Using Color"
                quote="Design Your Own World"
                link="https://github.com/Aman-Rawat001/Object-detection-using-color-control"
              />
            </div>
            <div className="col-lg-4 col-12">
              <ProjectBox
                hidden_link="true"
                img={img3}
                title="Face Detection & Recognition"
                quote="Interesting In Predictive Analytics"
                link="https://github.com/Aman-Rawat001/Face-Recognition"
              />
            </div>
            <div className="col-lg-4 col-12">
              <ProjectBox
                hidden_link="true"
                img={img3}
                title="Object Recognition In Browser"
                quote="See How Machine Sees"
                link="https://github.com/Aman-Rawat001/Object-recognization-reactJs-web-app"
              />
            </div>
            <div className="col-lg-4 col-12">
              <ProjectBox
                hidden_link="true"
                img={img3}
                title="Crowd Motion Analysis using Computer Vision"
                quote="Control The Crowd"
                link="https://github.com/Aman-Rawat001/Crowd-motion-analysis-using-openCV"
              />
            </div>
            <div className="col-lg-4 col-12">
              <ProjectBox
                hidden_link="true"
                img={img3}
                title="Smart Security Camera(OpenCV)"
                quote="Interesting In Predictive Analytics"
                link="https://github.com/Aman-Rawat001/Security-camera-OpenCV"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MLprojects;
