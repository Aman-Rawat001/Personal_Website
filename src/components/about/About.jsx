import React from "react"
import "./about.css"
import profileImg from "../images/about_section_profile.jpg"
import Footer from "../Footer/Footer"
import Navbar from "../navbar/Navbar"


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'

const About = () => {
    // library.add(faFacebookF)
    return (
        <>
            <div className="about_title">
                <h1>About Page</h1>
            </div>
            <Navbar/>

            <div className="about_container">
                <img className="profileImg" src={profileImg} alt="profile image" />
                <div className="about_content_div">
                    <p className="about_content1">Hey</p>
                    <p className="about_content2">This is <span id="name">Aman Rawat</span> from Dehradun Uttarakhand. Currently pursuing B.tech C.S.E from Graphic Era Hill University(GEHU).</p>
                    <div className="experience">
                        <h3>Working Experience In Companies</h3>
                        <h5>@Sunfox Pvt Ltd: <span>Currently i am working with Sunfox pvt-Ltd as a Full Stack Developer since 3 months. </span></h5>
                        <h5>@Zostel.com: <span>I have worked with Zostel.com as a react developer for just 2 months.</span></h5>
                        <h5>@GurujiFinder.com: <span>It is basically an startUp which is founded in 2017 and i was working with them as a website ranker(SEO).</span></h5>
                    </div>

                    <div className="skills">
                        <div className="skills_title">
                            <h3>Skills</h3>
                        </div>
                        <div className="skills_progressBar">
                            <label for="file">HTML:</label>
                            <progress id="file" value="95" max="100"> 32% </progress>
                        </div>
                        <div className="skills_progressBar">
                            <label for="file">css:</label>
                            <progress id="file" value="90" max="100"> 32% </progress>
                        </div>
                        <div className="skills_progressBar">
                            <label for="file">JavaScript:</label>
                            <progress id="file" value="70" max="100"> 32% </progress>
                        </div>
                        <div className="skills_progressBar">
                            <label for="file">ReactJs:</label>
                            <progress id="file" value="65" max="100"> 32% </progress>
                        </div>
                        <div className="skills_progressBar">
                            <label for="file">NodeJs:</label>
                            <progress id="file" value="50" max="100"> 42% </progress>
                        </div>
                        <div className="skills_progressBar">
                            <label for="file">ExpressJs:</label>
                            <progress id="file" value="50" max="100"> 40% </progress>
                        </div>
                        <div className="skills_progressBar">
                            <label for="file">OpenCV:</label>
                            <progress id="file" value="30" max="100"> 32% </progress>
                        </div>
                        <div className="skills_progressBar">
                            <label for="file">Other:</label>
                            <progress id="file" value="45" max="100"> 32% </progress>
                        </div>
                    </div>

                    <div className="social">
                        <h3>Social Media Handles</h3>
                    <div className="socialMedia">
                        <a target="_blank"  href="https://www.facebook.com/profile.php?id=100014344083429"><FontAwesomeIcon className="socialIcons" icon={faFacebook} /></a>
                        <a target="_blank" href="https://www.instagram.com/aman_rawat0123/"><FontAwesomeIcon className="socialIcons" icon={faInstagram} /></a>
                        <a target="_blank"  href="https://github.com/Aman-Rawat001"><FontAwesomeIcon className="socialIcons" icon={faGithub} /></a>
                        <a target="_blank"  href="https://www.linkedin.com/in/aman-rawat-578b21193"><FontAwesomeIcon className="socialIcons" icon={faLinkedin} /></a>
                        {/* <a href=""><FontAwesomeIcon className="socialIcons" icon={faLinkedin} /></a> */}
                    </div>
                    </div>

                </div>
            </div>
            {/* <a style={{ border: "2px solid red", position: "absolute", left: "45%", color: "black", padding: "0.5rem" }} href="/">Go Back</a> */}
            <Footer/>
        </>
    )
}

export default About;