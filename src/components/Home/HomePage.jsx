import React from "react"
import "./HomePageStyles.css"
import profileImage from "../images/croped-image.jpg"
import Navbar from "../navbar/Navbar"


const HomePage = () => {
    return(
        <>
            <Navbar/>
            <div className="main_container">
                <img className="profileImage" src={profileImage} alt="profileimage"/>
                <div>
                    <h1 className="homepage_content1">I'AM <span>WEB DEVELOPER</span></h1>
                    <p className="homepage_content2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto quia ex tenetur autem quaerat sint, ratione nam. Dolores rerum recusandae in illum aliquam incidunt, quod eligendi porro laudantium animi neque, quaerat odit? Maxime, sequi.</p>
                </div>
                <div className="homepage_btn_div">
                    <button className="homepage_btn1"><a href="about">More About Me</a></button>
                    <button className="homepage_btn2"><a href="portfolio">Portfolio</a></button>
                </div>
            </div>
        </>
    )
}

export default HomePage;