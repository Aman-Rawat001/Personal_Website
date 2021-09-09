import React, { useState } from "react";
import "./about.css";
import profileImg from "../images/about_section_profile.jpg";
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
      <div className="container-fluid">
        <div className="container my-5">
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
            <h3 className="aboutMainTitle mb-3">
              Working Experience With Companies
            </h3>
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
              <span className="montserrat600">@GurujiFinder.com: </span>
              <span className="mulish400">
                It was basically early age startUp which was founded in 2018 and
                i was working with them as a website ranker(SEO).
              </span>
            </p>
          </div>{" "}
          <div>
            <div>
              <h3 className="aboutMainTitle mb-4">Skills</h3>
            </div>
            <div className="row">
              <div className="col-lg-6 my-2">
                <div className="col-lg-3" style={{ display: "flex" }}>
                  <label for="file">HTML:</label>
                </div>

                <progress
                  id="file"
                  value="95"
                  max="100"
                  style={{ width: "50%" }}
                >
                  {" "}
                  32%{" "}
                </progress>
              </div>
              <div className="col-lg-6 my-2">
                <div className="row">
                  <div></div>
                  <label for="file">css:</label>
                  <progress id="file" value="90" max="100">
                    {" "}
                    32%{" "}
                  </progress>
                </div>
              </div>
              <div className="col-lg-6 my-2">
                <div className="row">
                  <div></div>
                  <label for="file">JavaScript:</label>
                  <progress id="file" value="70" max="100">
                    {" "}
                    42%{" "}
                  </progress>
                </div>
              </div>
              <div className="col-lg-6 my-2">
                <div className="row">
                  <div></div>
                  <label for="file">TypeScript:</label>
                  <progress id="file" value="70" max="100">
                    {" "}
                    40%{" "}
                  </progress>
                </div>
              </div>
              <div className="col-lg-6 my-2">
                <div className="row">
                  <div></div>
                  <label for="file">ReactJs:</label>
                  <progress id="file" value="85" max="100">
                    {" "}
                    32%{" "}
                  </progress>
                </div>
              </div>
              <div className="col-lg-6 my-2">
                <div className="row">
                  <div></div>
                  <label for="file">React Native:</label>
                  <progress id="file" value="40" max="100">
                    {" "}
                    32%{" "}
                  </progress>
                </div>
              </div>
              <div className="col-lg-6 my-2">
                <div className="row">
                  <div></div>
                  <label for="file">NodeJs:</label>
                  <progress id="file" value="50" max="100">
                    {" "}
                    42%{" "}
                  </progress>
                </div>
              </div>
              <div className="col-lg-6 my-2">
                <div className="row">
                  <div></div>
                  <label for="file">ExpressJs:</label>
                  <progress id="file" value="50" max="100">
                    {" "}
                    40%{" "}
                  </progress>
                </div>
              </div>
              <div className="col-lg-6 my-2">
                <div className="row">
                  <div></div>
                  <label for="file">OpenCV:</label>
                  <progress id="file" value="30" max="100">
                    {" "}
                    32%{" "}
                  </progress>
                </div>
              </div>
              <div className="col-lg-6 my-2">
                <div className="row">
                  <div></div>
                  <label for="file">Firebase</label>
                  <progress id="file" value="70" max="100">
                    {" "}
                    32%{" "}
                  </progress>
                </div>
              </div>
              <div className="col-lg-6 my-2">
                <div className="row">
                  <div></div>
                  <label for="file">MongoDB</label>
                  <progress id="file" value="50" max="100">
                    {" "}
                    32%{" "}
                  </progress>
                </div>
              </div>
              <div className="col-lg-6 my-2">
                <div className="row">
                  <div></div>
                  <label for="file">Other:</label>
                  <progress id="file" value="55" max="100">
                    {" "}
                    32%{" "}
                  </progress>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

// {/* <div id="navbar"></div>
// <div className="about_title">
//   <h1>PORTFOLIO</h1>
// </div>

// <div className="about_container">
//   <img className="profileImg" src={profileImg} alt="profile image" />
//   <div className="about_content_div">
//     {/* <p className="mulish400" className="about_content1">Hey</p> */}
//     <p className="about_content2">
//       This is <span id="name">Aman Rawat</span> from Dehradun Uttarakhand.
//       Currently pursuing B.tech C.S.E from Graphic Era Hill
//       University(GEHU).
//     </p>
//     <div className="experience">
//       <h3>Working Experience With Companies</h3>
//       <h5>
//         @Sunfox Technologies:{" "}
//         <span>
//           I have done 6 month internship from (2/2021 to 7/2021) with
//           sunfox technologies.
//         </span>
//       </h5>
//       <h5>
//         @Zostel.com:{" "}
//         <span>
//           I have worked with Zostel & Zoo-World as a react developer in
//           2020.
//         </span>
//       </h5>
//       <h5>
//         @GurujiFinder.com:{" "}
//         <span>
//           It was basically early age startUp which was founded in 2018 and
//           i was working with them as a website ranker(SEO).
//         </span>
//       </h5>
//     </div>

//     <div className="skills">
//       <div className="skills_title">
//         <h3>Skills</h3>
//       </div>
//       <div className="col-lg-6 my-2">

//       </div>
//       <div className="col-l<div></div>g-6 my-2">
//         <label for="file">css:</label>
//         <progress id="file" value="90" max="100">
//           {" "}
//           32%{" "}
//         </progress>
//       </div>
//       <div className="skills_progressBar">
//         <label for="file">JavaScript:</label>
//         <progress id="file" value="70" max="100">
//           {" "}
//           42%{" "}
//         </progress>
//       </div>
//       <div className="skills_progressBar">
//         <label for="file">TypeScript:</label>
//         <progress id="file" value="70" max="100">
//           {" "}
//           40%{" "}
//         </progress>
//       </div>
//       <div className="skills_progressBar">
//         <label for="file">ReactJs:</label>
//         <progress id="file" value="85" max="100">
//           {" "}
//           32%{" "}
//         </progress>
//       </div>
//       <div className="skills_progressBar">
//         <label for="file">React Native:</label>
//         <progress id="file" value="40" max="100">
//           {" "}
//           32%{" "}
//         </progress>
//       </div>
//       <div className="skills_progressBar">
//         <label for="file">NodeJs:</label>
//         <progress id="file" value="50" max="100">
//           {" "}
//           42%{" "}
//         </progress>
//       </div>
//       <div className="skills_progressBar">
//         <label for="file">ExpressJs:</label>
//         <progress id="file" value="50" max="100">
//           {" "}
//           40%{" "}
//         </progress>
//       </div>
//       <div className="skills_progressBar">
//         <label for="file">OpenCV:</label>
//         <progress id="file" value="30" max="100">
//           {" "}
//           32%{" "}
//         </progress>
//       </div>
//       <div className="skills_progressBar">
//         <label for="file">Firebase</label>
//         <progress id="file" value="70" max="100">
//           {" "}
//           32%{" "}
//         </progress>
//       </div>
//       <div className="skills_progressBar">
//         <label for="file">MongoDB</label>
//         <progress id="file" value="50" max="100">
//           {" "}
//           32%{" "}
//         </progress>
//       </div>
//       <div className="skills_progressBar">
//         <label for="file">Other:</label>
//         <progress id="file" value="55" max="100">
//           {" "}
//           32%{" "}
//         </progress>
//       </div>
//     </div>

//     {/* external softwares */}
//     <div className="eSoftwares">
//       <h3>Software Understandings</h3>
//       <p>TailwindCss</p>
//       <p>CircleCI</p>
//       <p>Jira</p>
//       <p>OpenCV</p>
//       <div id="showMore" style={{ display: "none" }}>
//         <p>Bootstrap</p>
//         <p>Git</p>
//         <p>Firebase</p>
//         <p>Docker</p>
//         <p>Canvas</p>
//         <p>Wordpress</p>
//         <p>GitHub</p>
//         <p>BitBucket</p>
//       </div>
//       <a id="showBtn" onClick={showMoreHandler}>
//         Show More...
//       </a>
//     </div>
//     {/* other skills */}
//     <div
//       className="otherSkills_container"
//       style={{ textAlign: "center" }}
//     >
//       <h3 className="otherSkillsH3">Interests</h3>
//       <div className="otherSkills">
//         <p className="bulletTags">Wesbite_SEO</p>
//         <p className="bulletTags">Blog_SEO</p>
//         <p className="bulletTags">DIY_Drone</p>
//         <p className="bulletTags">Arduino</p>
//         <p className="bulletTags">Trading</p>
//         <p className="bulletTags">Respberri_Pi</p>
//         <p className="bulletTags">Machine Learning</p>
//       </div>
//     </div>

//     {/* socail mdeia links */}
//     <div className="social">
//       <h3>Social Media Handles</h3>
//       <div className="socialMedia">
//         <a
//           target="_blank"
//           href="https://www.facebook.com/profile.php?id=100014344083429"
//         >
//           <FontAwesomeIcon className="socialIcons" icon={faFacebook} />
//         </a>
//         <a
//           target="_blank"
//           href="https://www.instagram.com/aman_rawat0123/"
//         >
//           <FontAwesomeIcon className="socialIcons" icon={faInstagram} />
//         </a>
//         <a target="_blank" href="https://github.com/Aman-Rawat001">
//           <FontAwesomeIcon className="socialIcons" icon={faGithub} />
//         </a>
//         <a
//           target="_blank"
//           href="https://www.linkedin.com/in/aman-rawat-578b21193"
//         >
//           <FontAwesomeIcon className="socialIcons" icon={faLinkedin} />
//         </a>
//         {/* <a href=""><FontAwesomeIcon className="socialIcons" icon={faLinkedin} /></a> */}
//       </div>
//     </div>
//   </div>
// </div>
// <My_cv /> */}
