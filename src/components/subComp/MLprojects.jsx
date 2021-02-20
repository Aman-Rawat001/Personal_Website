import React from 'react'
import "./Hprojects.css"

import ProjectBox from"./ProjectBox"
import img3 from "../images/img3.jpg"

const MLprojects = () => {
    return(
        <>
        <div className="blocks">
        <ProjectBox hidden_link="true" img={img3} title="Live Moment Tracking" quote="That's Why Hackers Always Win" link="https://github.com/Aman-Rawat001/Live-moment-tracking-in-ML"/>
        <ProjectBox hidden_link="true" img={img3} title="Object Detection Using Color" quote="Design Your Own World" link="https://github.com/Aman-Rawat001/Object-detection-using-color-control"/>
        <ProjectBox hidden_link="true" img={img3} title="Face Detectiona & Recognition" quote="Interesting In Predictive Analytics" link="https://github.com/Aman-Rawat001/Face-Recognition"/>
        </div>
        <div className="test_block">
        <ProjectBox hidden_link="true" img={img3} title="Smart Security Camera(OpenCV)" quote="Interesting In Predictive Analytics" link="https://github.com/Aman-Rawat001/Security-camera-OpenCV"/>
        </div>
        
        </>
    )
}

export default MLprojects;