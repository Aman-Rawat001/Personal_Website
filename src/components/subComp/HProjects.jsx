import React from 'react'
import "./Hprojects.css"
import Navbar from "../navbar/Navbar"


import ProjectBox from"./ProjectBox"
import img1 from "../images/img1.jpg"
import Footer from "../Footer/Footer"


const Hprojects = () => {
    return(
        <>
        <div className="hProjects_title">
            <h1>Hack Projects</h1>
        </div>
        <Navbar/>
        <div className="blocks">
        <ProjectBox hidden_link="true" img={img1} title="IP Address Hack" quote="That's Why Hackers Always Win" link="https://github.com/Aman-Rawat001/IP-hacking-in-browser."/>
        <ProjectBox hidden_link="true" img={img1} title="Vedio Call Hack" quote="Design Your Own World" link="https://github.com/Aman-Rawat001/Video-call-hack"/>
        </div>
        <div className="test_block">
        </div>
        {/* <a style={{border: "2px solid red", position: "absolute", left: "45%", color: "black", padding: "0.5rem"}} href="/">Go Back</a> */}
        <Footer/>
        </>
        
    )
}

export default Hprojects;