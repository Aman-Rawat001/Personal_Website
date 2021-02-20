import React from 'react'
import "./Hprojects.css"

import ProjectBox from"./ProjectBox"
import img2 from "../images/img2.jpg"

const WebProjects = () => {
    return(
        <>
        <div className="blocks">
        <ProjectBox hidden_link="true" img={img2} title="Instagram Post Creator" quote="That's Why Hackers Always Win" link="https://github.com/Aman-Rawat001/InstaPostCreator-v2.0"/>
        <ProjectBox hidden_link="true" img={img2} title="Website Pricing Template" quote="Design Your Own World" link="https://github.com/Aman-Rawat001/Pricing-Template-For-Websites"/>
        <ProjectBox hidden_link="true" img={img2} title="Blood Donation App" quote="Interesting In Predictive Analytics" link="https://github.com/Aman-Rawat001/Blood-donation-website"/>
        </div>
        <div className="test_block">
        <ProjectBox hidden_link="true" img={img2} title="Responsive Dance Wesbite" quote="Interesting In Predictive Analytics" link="https://github.com/Aman-Rawat001/Fully-fledged-dance-website"/>
        <ProjectBox hidden_link="true" img={img2} title="Machine Learning" quote="Interesting In Predictive Analytics" link="dssxz"/>
        <ProjectBox hidden_link="true" img={img2} title="Machine Learning" quote="Interesting In Predictive Analytics" link="dssxz"/>
        </div>
        
        </>
    )
}

export default WebProjects;