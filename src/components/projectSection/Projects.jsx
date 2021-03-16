import React from 'react'
import "./Projects.css"

import ProjectBox from "../subComp/ProjectBox"

import img1 from "../images/img1.jpg"
import img2 from "../images/img2.jpg"
import img3 from "../images/img3.jpg"


const Projects = () => {
    return (
        <>
            <div className="project_container">
                <h1 className="project_heading">My Projects</h1>
                <div className="blocks">
                    <ProjectBox hidden_link="none" img={img2} title="Web Development" quote="Design Your Own World" link="/web-development-projects"/>
                    <ProjectBox hidden_link="none" img={img3} title="Machine Learning" quote="Interesting In Predictive Analytics" link="/machine-learning-projects"/>
                    <ProjectBox hidden_link="none" img={img1} title="Hacking Projects" quote="That's Why Hackers Always Win" link="/hacking-projects"/>
                </div>
            </div>
        </>
    )
}

export default Projects;