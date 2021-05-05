import React from "react";
import "./ShowPdf.css";

const ShowPdf = (props) => {
  return (
    <>
      <div className="ShowPdf_container">
        <div className="Box">
          <div className="personalDetails">
            <h4>{props.fname}</h4>
            <h4>{props.lname}</h4>
            <h4>{props.desig}</h4>
            <h4>{props.email}</h4>
          </div>

          {/* skills */}
          <div className="skillSet">
            <div className="skills_heading">
              <h3>Skills</h3>
            </div>
            <div className="skill1_box">
              <p>{props.skill1}</p>
            </div>
            <div className="skill2_box">
              <p>{props.skill2}</p>
            </div>
            <div className="skill3_box">
              <p>{props.skill3}</p>
            </div>
            <div className="skill4_box">
              <p>{props.skill4}</p>
            </div>
            <div className="skill5_box">
              <p>{props.skill5}</p>
            </div>
          </div>
          {/* Profile description */}
        </div>
        <div className="Box">
          <div className="profileDesc">
            <h3>Profile</h3>
            <p>{props.profileDesc}</p>
          </div>
          {/* Education Information */}
          <div className="educationInfo">
            <h3>Education: </h3>
            <p>
              {props.clgName}, {props.clgLoc}
            </p>
          </div>
          {/* Employment History */}
          <div className="empHistory">
            <h3>Employment History: </h3>
            <p>
              {props.compDesig}, {props.compName}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowPdf;
