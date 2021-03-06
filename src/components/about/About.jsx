import React, { useState } from "react";
import "./about.css";
import profileImg from "../images/about_section_profile.jpg";
import Footer from "../Footer/Footer";
import Navbar from "../navbar/Navbar";
import My_cv from "../My_cv/My_cv";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const About = () => {
  const [showMore, setShowMore] = useState(true);
  const showMoreHandler = (e) => {
    if (showMore === true) {
      setShowMore(false);
      document.getElementById("showMore").style.display = "none";
      document.getElementById("showBtn").innerHTML = "Show More...";
    } else {
      setShowMore(true);
      document.getElementById("showMore").style.display = "block";
      document.getElementById("showBtn").innerHTML = "Show Less";
    }
  };
  return (
    <>
      <div className="about_title">
        <h1>PORTFOLIO</h1>
      </div>
      <Navbar />

      <div className="about_container">
        <img className="profileImg" src={profileImg} alt="profile image" />
        <div className="about_content_div">
          {/* <p className="about_content1">Hey</p> */}
          <p className="about_content2">
            This is <span id="name">Aman Rawat</span> from Dehradun Uttarakhand.
            Currently pursuing B.tech C.S.E from Graphic Era Hill
            University(GEHU).
          </p>
          <div className="experience">
            <h3>Working Experience With Companies</h3>
            <h5>
              @Sunfox Technologies:{" "}
              <span>
                I have done 6 month internship from (2/2021 to 7/2021) with
                sunfox technologies.
              </span>
            </h5>
            <h5>
              @Zostel.com:{" "}
              <span>
                I have worked with Zostel & Zoo-World as a react developer in
                2020.
              </span>
            </h5>
            <h5>
              @GurujiFinder.com:{" "}
              <span>
                It was basically early age startUp which was founded in 2018 and
                i was working with them as a website ranker(SEO).
              </span>
            </h5>
          </div>

          <div className="skills">
            <div className="skills_title">
              <h3>Skills</h3>
            </div>
            <div className="skills_progressBar">
              <label for="file">HTML:</label>
              <progress id="file" value="95" max="100">
                {" "}
                32%{" "}
              </progress>
            </div>
            <div className="skills_progressBar">
              <label for="file">css:</label>
              <progress id="file" value="90" max="100">
                {" "}
                32%{" "}
              </progress>
            </div>
            <div className="skills_progressBar">
              <label for="file">JavaScript:</label>
              <progress id="file" value="70" max="100">
                {" "}
                42%{" "}
              </progress>
            </div>
            <div className="skills_progressBar">
              <label for="file">TypeScript:</label>
              <progress id="file" value="70" max="100">
                {" "}
                40%{" "}
              </progress>
            </div>
            <div className="skills_progressBar">
              <label for="file">ReactJs:</label>
              <progress id="file" value="85" max="100">
                {" "}
                32%{" "}
              </progress>
            </div>
            <div className="skills_progressBar">
              <label for="file">React Native:</label>
              <progress id="file" value="40" max="100">
                {" "}
                32%{" "}
              </progress>
            </div>
            <div className="skills_progressBar">
              <label for="file">NodeJs:</label>
              <progress id="file" value="50" max="100">
                {" "}
                42%{" "}
              </progress>
            </div>
            <div className="skills_progressBar">
              <label for="file">ExpressJs:</label>
              <progress id="file" value="50" max="100">
                {" "}
                40%{" "}
              </progress>
            </div>
            <div className="skills_progressBar">
              <label for="file">OpenCV:</label>
              <progress id="file" value="30" max="100">
                {" "}
                32%{" "}
              </progress>
            </div>
            <div className="skills_progressBar">
              <label for="file">Firebase</label>
              <progress id="file" value="70" max="100">
                {" "}
                32%{" "}
              </progress>
            </div>
            <div className="skills_progressBar">
              <label for="file">MongoDB</label>
              <progress id="file" value="50" max="100">
                {" "}
                32%{" "}
              </progress>
            </div>
            <div className="skills_progressBar">
              <label for="file">Other:</label>
              <progress id="file" value="55" max="100">
                {" "}
                32%{" "}
              </progress>
            </div>
          </div>

          {/* external softwares */}
          <div className="eSoftwares">
            <h3>Software Understandings</h3>
            <p>TailwindCss</p>
            <p>CircleCI</p>
            <p>Jira</p>
            <p>OpenCV</p>
            <div id="showMore" style={{ display: "none" }}>
              <p>Bootstrap</p>
              <p>Git</p>
              <p>Firebase</p>
              <p>Docker</p>
              <p>Canvas</p>
              <p>Wordpress</p>
              <p>GitHub</p>
              <p>BitBucket</p>
            </div>
            <a id="showBtn" onClick={showMoreHandler}>
              Show More...
            </a>
          </div>
          {/* other skills */}
          <div
            className="otherSkills_container"
            style={{ textAlign: "center" }}
          >
            <h3 className="otherSkillsH3">Interests</h3>
            <div className="otherSkills">
              <p className="bulletTags">Wesbite_SEO</p>
              <p className="bulletTags">Blog_SEO</p>
              <p className="bulletTags">DIY_Drone</p>
              <p className="bulletTags">Arduino</p>
              <p className="bulletTags">Trading</p>
              <p className="bulletTags">Respberri_Pi</p>
              <p className="bulletTags">Machine Learning</p>
            </div>
          </div>

          {/* socail mdeia links */}
          <div className="social">
            <h3>Social Media Handles</h3>
            <div className="socialMedia">
              <a
                target="_blank"
                href="https://www.facebook.com/profile.php?id=100014344083429"
              >
                <FontAwesomeIcon className="socialIcons" icon={faFacebook} />
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/aman_rawat0123/"
              >
                <FontAwesomeIcon className="socialIcons" icon={faInstagram} />
              </a>
              <a target="_blank" href="https://github.com/Aman-Rawat001">
                <FontAwesomeIcon className="socialIcons" icon={faGithub} />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/aman-rawat-578b21193"
              >
                <FontAwesomeIcon className="socialIcons" icon={faLinkedin} />
              </a>
              {/* <a href=""><FontAwesomeIcon className="socialIcons" icon={faLinkedin} /></a> */}
            </div>
          </div>
        </div>
      </div>
      <My_cv />
      {/* <a style={{ border: "2px solid red", position: "absolute", left: "45%", color: "black", padding: "0.5rem" }} href="/">Go Back</a> */}
      <Footer />
    </>
  );
};

export default About;
