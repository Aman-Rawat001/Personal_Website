import React from 'react'
import "./Hprojects.css"

import ProjectBox from"./ProjectBox"
import img3 from "../images/img3.jpg"

const MLprojects = () => {
    return(
        <>
        <div className="blocks">
        <ProjectBox hidden_link="true" img={img3} title="Hacking Projects" quote="That's Why Hackers Always Win" link="ojfd"/>
        <ProjectBox hidden_link="true" img={img3} title="Web Development" quote="Design Your Own World" link="dssxz"/>
        <ProjectBox hidden_link="true" img={img3} title="Machine Learning" quote="Interesting In Predictive Analytics" link="dssxz"/>
        </div>
        <div className="test_block">
        <ProjectBox hidden_link="true" img={img3} title="Machine Learning" quote="Interesting In Predictive Analytics" link="dssxz"/>
        <ProjectBox hidden_link="true" img={img3} title="Machine Learning" quote="Interesting In Predictive Analytics" link="dssxz"/>
        <ProjectBox hidden_link="true" img={img3} title="Machine Learning" quote="Interesting In Predictive Analytics" link="dssxz"/>
        </div>
        
        </>
    )
}

export default MLprojects;