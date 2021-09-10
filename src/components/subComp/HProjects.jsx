import React from "react";
import "./Hprojects.css";
import ProjectBox from "./ProjectBox";
import img1 from "../images/img1.jpg";

const Hprojects = () => {
  return (
    <>
      <div className="hProjects_title bg-gray py-5">
        <div className="container">
          <h1 className="aboutTitle montserrat600">
            CYBER SECURITY PROJECTS SO FAR
          </h1>
          <hr className="mb-5" />
          <div className="blocks row">
            <div className="col-lg-4 col-12">
              <ProjectBox
                hidden_link="true"
                img={img1}
                title="IP Address Hack"
                quote="That's Why Hackers Always Win"
                link="https://github.com/Aman-Rawat001/IP-hacking-in-browser."
              />
            </div>
            <div className="col-lg-4 col-12">
              <ProjectBox
                hidden_link="true"
                img={img1}
                title="Vedio Call Hack"
                quote="Design Your Own World"
                link="https://github.com/Aman-Rawat001/Video-call-hack"
              />
            </div>
          </div>
          <div className="test_block"></div>
        </div>
      </div>
    </>
  );
};

export default Hprojects;
