import React from "react";
import "./Hprojects.css";
import Footer from "../Footer/Footer";
import Navbar from "../navbar/Navbar";

import ProjectBox from "./ProjectBox";
import img2 from "../images/img2.jpg";

const WebProjects = () => {
  return (
    <>
      <div className="webProjects_title">
        <h1>Web Projects</h1>
      </div>
      <Navbar />
      <div className="blocks">
        <ProjectBox
          hidden_link="true"
          img={img2}
          title="Image Finder (Live)"
          quote="Find your thoughts"
          link="/image_finder"
        />
        <ProjectBox
          hidden_link="true"
          img={img2}
          title="Notes_Universe"
          quote="Share & Learn"
          link="https://notes-universe.web.app"
        />
        <ProjectBox
          hidden_link="true"
          img={img2}
          title="Free Resume Maker (Live)"
          quote="Design Your Thoughts"
          link="/live_tools"
        />
        <ProjectBox
          hidden_link="true"
          img={img2}
          title="Responsive Bootstrap Wesbite"
          quote="Design Your Thoughts"
          link="https://github.com/Aman-Rawat001/Fully-Responsive-Bootstrap-Wesbite-"
        />
        <ProjectBox
          hidden_link="true"
          img={img2}
          title="Android Chat Application"
          quote="Chat without security issues"
          link="https://github.com/Aman-Rawat001/react-native-chat-application"
        />
        <ProjectBox
          hidden_link="true"
          img={img2}
          title="Instagram Post Creator"
          quote="That's Why Hackers Always Win"
          link="https://github.com/Aman-Rawat001/InstaPostCreator-v2.0"
        />
        <ProjectBox
          hidden_link="true"
          img={img2}
          title="Website Pricing Template"
          quote="Design Your Own World"
          link="https://github.com/Aman-Rawat001/Pricing-Template-For-Websites"
        />
        <ProjectBox
          hidden_link="true"
          img={img2}
          title="Blood Donation App"
          quote="Interesting In Predictive Analytics"
          link="https://github.com/Aman-Rawat001/Blood-donation-website"
        />
        <ProjectBox
          hidden_link="true"
          img={img2}
          title="Responsive Dance Wesbite"
          quote="Interesting In Predictive Analytics"
          link="https://github.com/Aman-Rawat001/Fully-fledged-dance-website"
        />
        <ProjectBox
          hidden_link="true"
          img={img2}
          title="Blogging Website"
          quote="A Directory Of Wonderfull Things"
          link="http://futuretech.epizy.com"
        />
        {/* <ProjectBox hidden_link="true" img={img2} title="Machine Learning" quote="Interesting In Predictive Analytics" link="dssxz"/> */}
      </div>
      <Footer />
      {/* <a style={{border: "2px solid red", position: "absolute", left: "45%", color: "black", padding: "0.5rem"}} href="/">Go Back</a> */}
    </>
  );
};

export default WebProjects;
