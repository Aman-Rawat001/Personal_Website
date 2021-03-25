import React, {useEffect, useState} from "react"
import "./HomePageStyles.css"
import profileImage from "../images/croped-image.jpg"
import Navbar from "../navbar/Navbar"
// import { counter } from "@fortawesome/fontawesome-svg-core"


const HomePage = () => {
    const [whoIam, setWhoIam] = useState(" ");
    const leftArrow = "<"
    const rightArrow = "/>"
    useEffect(()=>{
        setWhoIam("AMAN RAWAT");
    }, [])

    return(
        <>
            <Navbar/>
            <div className="main_container">
                <img className="profileImage" src={profileImage} alt="profileimage"/>
                <div>
                    <h1 className="homepage_content1">I'AM <span >{leftArrow}</span><span className="wia">{whoIam}</span><span>{rightArrow}</span></h1>
                    <p className="homepage_content2">“Instead of freaking out about these constraints, embrace them. Let them guide you. Constraints drive innovation and force focus. Instead of trying to remove them, use them to your advantage.”</p>
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