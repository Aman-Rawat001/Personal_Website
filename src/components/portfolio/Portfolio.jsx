import React from "react"

import "./portfolio.css"
import ProjectBox from "../subComp/ProjectBox"
import Footer from "../Footer/Footer"
import Navbar from "../navbar/Navbar"


import img1 from "../../components/images/img1.jpg"
import img2 from "../../components/images/img2.jpg"
import img3 from "../../components/images/img3.jpg"

const Portfolio = () => {

    return(
        <>
            
            <div className="portfolio_title">
                <h1>PORTFOLIO</h1>
            </div>
            <Navbar/>
            <div className="portfolio_boxes">
            <ProjectBox img={img2} title="Web Projects" quote="Design Your Own World" hidden_link="none" link="/web-development-projects"/>
            <ProjectBox img={img3} title="ML Projects" quote="End Of The Human Race" hidden_link="none" link="/machine-learning-projects"/>
            <ProjectBox img={img1} title="Hacking Projects" quote="Break The System For Profit" hidden_link="none" link="/hacking-projects"/>
            </div>
            <Footer/>
        </>
    )
}

export default Portfolio;