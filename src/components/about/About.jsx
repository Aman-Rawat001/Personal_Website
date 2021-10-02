import React, { useState } from "react";
import "./about.css";
import profileImg from "../images/about_section_profile.jpg";
// import My_cv from "../My_cv/My_cv";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  const skillsArray = [
    { name: "HTML", value: "95" },
    { name: "CSS", value: "70" },
    { name: "TypeScript", value: "40" },
    { name: "JavaScript", value: "42" },
    { name: "ReactJs", value: "85" },
    { name: "React Native", value: "40" },
    { name: "NodeJs", value: "50" },
    { name: "ExpressJs", value: "50" },
    { name: "OpenCV", value: "30" },
    { name: "Firebase", value: "70" },
    { name: "MongoDB", value: "45" },
    { name: "Other", value: "55" },
  ];

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
      <div className="container-fluid">
        <div className="container aboutMainBox">
          <div>
            <h5 className="montserrat600 aboutTitle">MORE ABOUT ME</h5>
          </div>
          <hr />
          <div>
            <p className="mulish400">
              My name is Aman Rawat. I am a Web Developer, and I'm very
              passionate and dedicated to my work.
            </p>
            <p className="mulish400">
              With 20 years experience as a professional Web developer, I have
              acquired the skills and knowledge necessary to make your project a
              success. I enjoy every step of the design process, from discussion
              and collaboration.{" "}
            </p>{" "}
          </div>{" "}
          <div className="my-5">
            <h3 className="aboutMainTitle">
              Working Experience With Companies
            </h3>
            <hr className="w-50" />
            <p>
              <span className="montserrat600">@Sunfox Technologies: </span>
              <span className="mulish400">
                I have done 6 month internship from (2/2021 to 7/2021) with
                sunfox technologies.
              </span>
            </p>
            <p>
              <span className="montserrat600">@Zostel.com: </span>
              <span className="mulish400">
                I have worked with Zostel & Zoo-World as a react developer in
                2020.
              </span>
            </p>
            <p>
              <span className="montserrat600">@Fiverr.com: </span>
              <span className="mulish400">
                I also work as a part time freelancer on fiverr.com, i have yet
                successfully delieverd more than 20+ clients requirements so
                far.
              </span>
            </p>
            <p>
              <span className="montserrat600">@GurujiFinder.com: </span>
              <span className="mulish400">
                It was basically early age startUp which was founded in 2018 and
                i was working with them as a website ranker(SEO).
              </span>
            </p>
          </div>{" "}
          <div>
            <div>
              <h3 className="aboutMainTitle">Skills</h3>
              <hr className="w-50" />
            </div>
            <div className="row">
              {skillsArray.map((val, index) => {
                return (
                  <div className="col-lg-6 col-12 my-2">
                    <div className="montserrat600" style={{ display: "flex" }}>
                      <label for="file">{val.name}</label>
                    </div>
                    <progress
                      data-aos="fade-left"
                      id="file"
                      value={val.value}
                      max="100"
                      style={{ width: "50%" }}
                    ></progress>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="my-5">
            <h3 className="aboutMainTitle">Software Understandings</h3>
            <hr className="w-50" />
            <div className="normalFlexBox">
              <div className="me-2">
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
              <div>
                <p className="montserrat600">TailwindCss</p>
              </div>
            </div>
            <div className="normalFlexBox">
              <div className="me-2">
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
              <div>
                <p className="montserrat600">CircleCI</p>
              </div>
            </div>
            <div className="normalFlexBox">
              <div className="me-2">
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
              <div>
                <p className="montserrat600">Jira</p>
              </div>
            </div>
            <div className="normalFlexBox">
              <div className="me-2">
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
              <div>
                <p className="montserrat600">OpenCV</p>
              </div>
            </div>
            <div className="normalFlexBox">
              <div className="me-2">
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
              <div>
                <p className="montserrat600">AWS Workspace</p>
              </div>
            </div>
            <div id="showMore" style={{ display: "none" }}>
              <div className="normalFlexBox">
                <div className="me-2">
                  <FontAwesomeIcon icon={faArrowRight} />
                </div>
                <div>
                  <p className="montserrat600">Bootstrap</p>
                </div>
              </div>
              <div className="normalFlexBox">
                <div className="me-2">
                  <FontAwesomeIcon icon={faArrowRight} />
                </div>
                <div>
                  <p className="montserrat600">Git</p>
                </div>
              </div>
              <div className="normalFlexBox">
                <div className="me-2">
                  <FontAwesomeIcon icon={faArrowRight} />
                </div>
                <div>
                  <p className="montserrat600">Firebase</p>
                </div>
              </div>
              <div className="normalFlexBox">
                <div className="me-2">
                  <FontAwesomeIcon icon={faArrowRight} />
                </div>
                <div>
                  <p className="montserrat600">Docker</p>
                </div>
              </div>
              <div className="normalFlexBox">
                <div className="me-2">
                  <FontAwesomeIcon icon={faArrowRight} />
                </div>
                <div>
                  <p className="montserrat600">Canvas</p>
                </div>
              </div>
              <div className="normalFlexBox">
                <div className="me-2">
                  <FontAwesomeIcon icon={faArrowRight} />
                </div>
                <div>
                  <p className="montserrat600">Wordpress</p>
                </div>
              </div>
              <div className="normalFlexBox">
                <div className="me-2">
                  <FontAwesomeIcon icon={faArrowRight} />
                </div>
                <div>
                  <p className="montserrat600">GitHub</p>
                </div>
              </div>
              <div className="normalFlexBox">
                <div className="me-2">
                  <FontAwesomeIcon icon={faArrowRight} />
                </div>
                <div>
                  <p className="montserrat600">BitBucket</p>
                </div>
              </div>
            </div>
            <a id="showBtn" onClick={showMoreHandler}>
              Show More...
            </a>
          </div>
          <div className="otherSkills">
            <h3 className="otherSkillsH3 aboutMainTitle">Interests</h3>
            <hr className="w-50" />
            <div>
              <p className="bulletTags montserrat600" data-aos="fade-down">
                Wesbite_SEO
              </p>
              <p className="bulletTags montserrat600" data-aos="fade-down">
                Freelancing
              </p>
              <p className="bulletTags montserrat600" data-aos="fade-down">
                Blog_SEO
              </p>
              <p className="bulletTags montserrat600" data-aos="fade-down">
                Blogging
              </p>
              <p className="bulletTags montserrat600" data-aos="fade-down">
                Crypto Tech
              </p>
              <p className="bulletTags montserrat600" data-aos="fade-down">
                DIY_Drone
              </p>
              <p className="bulletTags montserrat600" data-aos="fade-down">
                Arduino
              </p>
              <p className="bulletTags montserrat600" data-aos="fade-down">
                Trading
              </p>
              <p className="bulletTags montserrat600" data-aos="fade-down">
                Respberri_Pi
              </p>
              <p className="bulletTags montserrat600" data-aos="fade-down">
                Machine Learning
              </p>
              <p className="bulletTags montserrat600" data-aos="fade-down">
                Digital Marketing
              </p>
            </div>
          </div>
          <div className="social my-5">
            <h3 className="aboutMainTitle">Social Media Handles</h3>
            <hr className="w-50" />
            <div className="socialMedia">
              <a
                target="_blank"
                data-aos="zoom-in"
                data-aos-delay="600"
                href="https://www.linkedin.com/in/aman-rawat-578b21193"
              >
                <FontAwesomeIcon className="socialIcons" icon={faLinkedin} />
              </a>
              <a
                target="_blank"
                data-aos="zoom-in"
                data-aos-delay="500"
                href="https://github.com/Aman-Rawat001"
              >
                <FontAwesomeIcon className="socialIcons" icon={faGithub} />
              </a>
              <a
                target="_blank"
                data-aos="zoom-in"
                data-aos-delay="300"
                href="https://www.facebook.com/profile.php?id=100014344083429"
              >
                <FontAwesomeIcon className="socialIcons" icon={faFacebook} />
              </a>
              <a
                target="_blank"
                data-aos="zoom-in"
                data-aos-delay="400"
                href="https://www.instagram.com/aman_rawat0123/"
              >
                <FontAwesomeIcon className="socialIcons" icon={faInstagram} />
              </a>

              {/* <a href=""><FontAwesomeIcon className="socialIcons" icon={faLinkedin} /></a> */}
            </div>
          </div>{" "}
        </div>
      </div>
    </>
  );
};

export default About;
