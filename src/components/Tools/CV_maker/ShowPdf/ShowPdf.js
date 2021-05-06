import React from "react";
import "./ShowPdf.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import cvPicture from "../../../images/cvPicture.jpg";

const ShowPdf = (props) => {
  return (
    <>
      {/* personal Information */}
      <div className="ShowPdf_container">
        <div className="personalDetails">
          <div
            style={{
              display: "flex",
              // justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={cvPicture} alt="profile" />
            <div>
              <h4 className="fname">{props.fname}</h4>
              <h4 className="lname">{props.lname}</h4>
              <h4 className="description">{props.desig}</h4>
            </div>
          </div>
        </div>
        <div className="flexContainer">
          <div className="Box box1">
            <div className="email">
              <FontAwesomeIcon icon={faEnvelope} />
              <h4 className="">{props.email}</h4>
            </div>

            {/* skills */}
            <div className="skillSet">
              <div className="skills_heading">
                <h3>Skills</h3>
              </div>
              <div className="skill1_box">
                <p>{props.skill1}</p>
                <progress value={props.skill1Progress} max="100" />
              </div>
              <div className="skill2_box">
                <p>{props.skill2}</p>
                <progress value={props.skill2Progress} max="100" />
              </div>
              <div className="skill3_box">
                <p>{props.skill3}</p>
                <progress value={props.skill3Progress} max="100" />
              </div>
              <div className="skill4_box">
                <p>{props.skill4}</p>
                <progress value={props.skill4Progress} max="100" />
              </div>
              <div className="skill5_box">
                <p>{props.skill5}</p>
                <progress value={props.skill5Progress} max="100" />
              </div>
            </div>
            {/* Profile description */}
          </div>
          <div className="Box box2">
            <div className="profileDesc">
              <h3>Profile</h3>
              <p>{props.profileDesc}</p>
            </div>
            {/* Education Information */}
            <div className="educationInfo">
              <h3>Education</h3>
              <div>
                <p className="eduContent1">
                  {props.clgCourse}, {props.clgName}
                </p>
                <p>
                  {props.clgLoc} | {props.clgJdate} - {props.clgEdate}
                </p>
              </div>
            </div>
            {/* Employment History */}
            <div className="empHistory">
              <h3>Employment History</h3>
              <div>
                <p className="empContent1">
                  {props.compDesig}, {props.compName}
                </p>
                <p>
                  {props.compLoc} | {props.compJdate} - {props.compEdate}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowPdf;
