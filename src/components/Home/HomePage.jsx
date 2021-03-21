import React from "react"
import "./HomePageStyles.css"

import About from "../AboutSection/About"
import Projects from "../projectSection/Projects"
// import Hprojects from "./components/subComp/HProjects"
// import MLprojects from "./components/subComp/MLprojects"
// import WebProjects from "./components/subComp/WebProjects"


const HomePage = () => {
    return(
        <>
        <div className="homepage-main-container">
            <div className="home-inner-container">
            <About/>
            {/* <Projects/> */}
            </div>
        </div>
        </>
    )
}

export default HomePage;