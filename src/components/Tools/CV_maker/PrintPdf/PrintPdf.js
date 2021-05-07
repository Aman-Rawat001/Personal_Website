import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import ReactToPrint from "react-to-print";
import "./PrintPdf.css";
// import PropTypes from "prop-types";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
// import img from "../../../images/croped-image.jpg";

class ComponentToPrint extends React.Component {
  render() {
    return (
      <div className="PrintPdf_container printPdf">
        {/* prank/temporary pdf code */}
        <div
          style={{
            marginTop: "5rem",
            marginLeft: "3rem",
            marginRight: "3rem",
            fontFamily: "system-ui",
          }}
        >
          <h3>
            Sorry <span style={{ color: "#0072ff" }}>{this.props.fname}</span>{" "}
            this tool is not fully functional yet. Work in progress.
          </h3>
        </div>

        {/* main print pdf code  */}
        {/* <div className="personalDetails">
          <div
            style={{
              display: "flex",
              
              alignItems: "center",
            }}
          >
            <img src={img} alt="profile" />
            <div>
              <h4 className="fname">{this.props.fname}</h4>
              <h4 className="lname">{this.props.lname}</h4>
              <h4 className="description">{this.props.desig}</h4>
            </div>
          </div>
        </div>
        <div className="flexContainer">
          <div className="Box box1">
            <div className="email">
              <FontAwesomeIcon icon={faEnvelope} />
              <h4 className="">{this.props.email}</h4>
            </div>

            
            <div className="skillSet">
              <div className="skills_heading">
                <h3>Skills</h3>
              </div>
              <div className="skillContent">
                <div className="skill1_box">
                  <p>{this.props.skill1}</p>
                  <progress
                    value={this.props.skill1Progress}
                    max="100"
                  ></progress>
                </div>
                <div className="skill2_box">
                  <p>{this.props.skill2}</p>
                  <progress
                    value={this.props.skill2Progress}
                    max="100"
                  ></progress>
                </div>
                <div className="skill3_box">
                  <p>{this.props.skill3}</p>
                  <progress
                    value={this.props.skill3Progress}
                    max="100"
                  ></progress>
                </div>
                <div className="skill4_box">
                  <p>{this.props.skill4}</p>
                  <progress
                    value={this.props.skill4Progress}
                    max="100"
                  ></progress>
                </div>
                <div className="skill5_box">
                  <p>{this.props.skill5}</p>
                  <progress
                    value={this.props.skill5Progress}
                    max="100"
                  ></progress>
                </div>
              </div>
            </div>
           
          </div>
          <div className="Box box2">
            <div className="profileDesc">
              <h3>Profile</h3>
              <p>{this.props.profileDesc}</p>
            </div>
            
            <div className="educationInfo">
              <h3>Education</h3>
              <div>
                <p className="eduContent1">
                  {this.props.clgCourse}, {this.props.clgName}
                </p>
                <p>
                  {this.props.clgLoc} | {this.props.clgJdate} -{" "}
                  {this.props.clgEdate}
                </p>
              </div>
            </div>
            
            <div className="empHistory">
              <h3>Employment History</h3>
              <div>
                <p className="empContent1">
                  {this.props.compDesig}, {this.props.compName}
                </p>
                <p>
                  {this.props.compLoc} | {this.props.compJdate} -{" "}
                  {this.props.compEdate}
                </p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    );
  }
}

class PrintPdf extends React.Component {
  render() {
    return (
      <div>
        <ReactToPrint
          // trigger={() => <a href="#">Print this out!</a>}
          content={() => this.componentRef}
        />
        <ComponentToPrint
          fname={this.props.fname}
          // lname={this.props.lname}
          // desig={this.props.desig}
          // email={this.props.email}
          // skill1={this.props.skill1}
          // skill2={this.props.skill2}
          // skill3={this.props.skill3}
          // skill4={this.props.skill4}
          // skill5={this.props.skill5}
          // skill1Progress={this.props.skill1Progress}
          // skill2Progress={this.props.skill2Progress}
          // skill3Progress={this.props.skill3Progress}
          // skill4Progress={this.props.skill4Progress}
          // skill5Progress={this.props.skill5Progress}
          // profileDesc={this.props.profileDesc}
          // clgName={this.props.clgName}
          // clgLoc={this.props.clgLoc}
          // clgJdate={this.props.clgJdate}
          // clgEdate={this.props.clgEdate}
          // clgCourse={this.props.clgCourse}
          // compDesig={this.props.compDesig}
          // compName={this.props.compName}
          // compJdate={this.props.compJdate}
          // compEdate={this.props.compEdate}
          // compLoc={this.props.compLoc}
          ref={(el) => (this.componentRef = el)}
        />
      </div>
    );
  }
}

export default PrintPdf;
// export { ComponentToPrint };
