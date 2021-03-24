import React from 'react'
import "./ProjectBox.css"
import {NavLink, useHistory} from "react-router-dom"

const ProjectBox = (props) => {
    const history = useHistory()
    const temp = props.hidden_link;
    console.log(temp)
    return (
        <>
            <div className="block">
                <img src={props.img} alt="Project Block" className="block_img" />
                <div className="details">
                    <h4 className="block_details">{props.title}</h4>
                    <p className="block_quote">{props.quote}</p>
                </div>
                <button style={temp === "true" ? {display: "none"} : {display: "block"}} onClick={()=>history.push(props.link)} id="block_link">Click Here</button>
                {/* <a target="_blank" style={temp === "none" ? {display: "none"} : {display: "block"}} className="hidden_link" href={props.link}>Access Code</a> */}
            </div>
        </>
    )
}

export default ProjectBox;