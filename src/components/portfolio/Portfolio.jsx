import React from "react"
import {useHistory} from "react-router-dom"
import "./portfolio.css"
import ProjectBox from "../subComp/ProjectBox"

import img1 from "../../components/images/img1.jpg"
import img2 from "../../components/images/img2.jpg"
import img3 from "../../components/images/img3.jpg"

const Portfolio = () => {
    const history = useHistory();
    return(
        <>
            <div className="portfolio_title">
                <h1>PORTFOLIO</h1>
            </div>
            <div className="portfolio_boxes">
            <ProjectBox img={img2} title="Web Projects" quote="sdfghj" hidden_link="none" link="/web-development-projects"/>
            <ProjectBox img={img3} title="ML Projects" quote="sdfghj" hidden_link="none" link="/machine-learning-projects"/>
            <ProjectBox img={img1} title="Hacking Projects" quote="sdfghj" hidden_link="none" link="/hacking-projects"/>
            </div>
            <div>
            <a style={{border: "2px solid red", position: "absolute", left: "45%", color: "black", padding: "0.5rem"}} href="/">Go Back</a>
            </div>
        </>
    )
}

export default Portfolio;