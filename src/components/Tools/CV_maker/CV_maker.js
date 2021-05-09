import React, { useState } from "react";
import jsPDF from "jspdf";
import "./CV_maker.css";
import PrintPdf from "./PrintPdf/PrintPdf";
// import PrintPdf, { ComponentToPrint } from "./PrintPdf/PrintPdf";
import ShowPdf from "./ShowPdf/ShowPdf";
// save name of the person when they click on download CV button.
import firebase from "../../../firebase";

const CV_maker = () => {
  const db = firebase.firestore();
  const [info, setInfo] = useState({
    fname: " ",
    lname: " ",
    desig: " ",
    email: " ",
    skill1: " ",
    skill2: " ",
    skill3: " ",
    skill4: " ",
    skill5: " ",
    skill1Progress: " ",
    skill2Progress: " ",
    skill3Progress: " ",
    skill4Progress: " ",
    skill5Progress: " ",
    profileDesc: " ",
    clgName: " ",
    clgLoc: " ",
    clgJdate: " ",
    clgEdate: " ",
    clgCourse: " ",
    compDesig: " ",
    compName: " ",
    compLoc: " ",
    compJdate: " ",
    compEdate: " ",
  });
  const [display, setDisplay] = useState("none");
  const [showPdfText, setShowPdfText] = useState("Show CV");

  const handleShowPdf = () => {
    display === "none" ? setDisplay("block") : setDisplay("none");
    showPdfText === "Show CV"
      ? setShowPdfText("Hide CV")
      : setShowPdfText("Show CV");
  };

  const handleChange = (e) => {
    var { name, value } = e.target;
    setInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const generatePDF = (e) => {
    var doc = new jsPDF("p", "pt", "a4");
    doc.html(document.querySelector("#print_content"), {
      callback: function (pdf) {
        pdf.save("myPDF.pdf");
      },
    });
    // save name of the person in firebase.
    e.preventDefault();
    db.collection("downloadCV_contacts").add({
      name: info.fname + info.lname,
      email: info.email,
      designation: info.desig,
    });
  };

  return (
    <>
      {/* steps for using CV_Maker */}
      <div className="stepsForCV">
        <h2>How To Use CV_Maker?</h2>
        <p>
          <span>Step-1: </span>Fill all input fields given below.
        </p>
        <p>
          <span>Step-2: </span>Click on "Show CV" button & see how your resume
          will look like.
        </p>
        <p>
          <span>Step-3: </span>Click on "Download CV" button.
        </p>
      </div>

      {/* input feilds */}
      <div className="parent_container">
        <h3 style={{ textAlign: "center" }}>Personal Information</h3>
        <div className="personalInformation info_div">
          <div>
            <label>First Name :</label>
            <input onChange={handleChange} value={info.fname} name="fname" />
          </div>
          <div>
            <label>Last Name :</label>
            <input onChange={handleChange} value={info.lname} name="lname" />
          </div>
          <div>
            <label>Designation :</label>
            <input onChange={handleChange} value={info.desig} name="desig" />
          </div>
          <div>
            <label>Email :</label>
            <input onChange={handleChange} value={info.email} name="email" />
          </div>
        </div>

        <h3 style={{ textAlign: "center" }}>Profile</h3>
        <div className="aboutYour info_div">
          <div>
            <p>Profile Description </p>
            <textarea
              onChange={handleChange}
              value={info.profileDesc}
              name="profileDesc"
            />
          </div>
        </div>
        {/* Education details */}
        <h3 style={{ textAlign: "center" }}>Education</h3>
        <div className="educ_info info_div">
          <div>
            <label>College :</label>
            <input
              onChange={handleChange}
              value={info.clgName}
              name="clgName"
            />
          </div>
          <div>
            <label>Course :</label>
            <input
              onChange={handleChange}
              value={info.clgCourse}
              name="clgCourse"
            />
          </div>
          <div>
            <label>Location :</label>
            <input onChange={handleChange} value={info.clgLoc} name="clgLoc" />
          </div>
          <div>
            <label>Joining Date :</label>
            <input
              onChange={handleChange}
              type="date"
              value={info.clgJdate}
              name="clgJdate"
            />
          </div>
          <div>
            <label>Ending Date :</label>
            <input
              onChange={handleChange}
              type="date"
              value={info.clgEdate}
              name="clgEdate"
            />
          </div>
        </div>
        <h3 style={{ textAlign: "center" }}>Professional Information</h3>
        {/* Employment history */}
        <div className="employHistory info_div">
          <h4>Employment History</h4>
          <div>
            <div>
              <label>Designation :</label>
              <input
                onChange={handleChange}
                value={info.compDesig}
                name="compDesig"
              />
            </div>
            <div>
              <label>Company :</label>
              <input
                onChange={handleChange}
                value={info.compName}
                name="compName"
              />
            </div>
            <div>
              <label>Location :</label>
              <input
                onChange={handleChange}
                value={info.compLoc}
                name="compLoc"
              />
            </div>
            <div>
              <label>Joining Date :</label>
              <input
                type="date"
                onChange={handleChange}
                value={info.compJdate}
                name="compJdate"
              />
            </div>
            <div>
              <label>Ending Date :</label>
              <input
                type="date"
                onChange={handleChange}
                value={info.compEdate}
                name="compEdate"
              />
            </div>
          </div>
        </div>
        {/* SkillSet Information */}
        <h3 style={{ textAlign: "center" }}>Top 5 Skills</h3>
        <div className="skillSet_main info_div">
          <div></div>
          <div>
            <label>Skill-1 :</label>
            <input
              type="text"
              value={info.skill1}
              onChange={handleChange}
              name="skill1"
            />
            <div>
              <label>How much % :</label>
              <input
                type="number"
                value={info.skill1Progress}
                onChange={handleChange}
                name="skill1Progress"
              />
            </div>
          </div>

          <div>
            <label>Skill-2 :</label>
            <input
              type="text"
              value={info.skill2}
              onChange={handleChange}
              name="skill2"
            />
            <div>
              <label>How much % :</label>
              <input
                type="number"
                value={info.skill2Progress}
                onChange={handleChange}
                name="skill2Progress"
              />
            </div>
          </div>

          <div>
            <label>Skill-3 :</label>
            <input
              type="text"
              value={info.skill3}
              onChange={handleChange}
              name="skill3"
            />
            <div>
              <label>How much % :</label>
              <input
                type="number"
                value={info.skill3Progress}
                onChange={handleChange}
                name="skill3Progress"
              />
            </div>
          </div>

          <div>
            <label>Skill-4 :</label>
            <input
              type="text"
              value={info.skill4}
              onChange={handleChange}
              name="skill4"
            />
            <div>
              <label>How much % :</label>
              <input
                type="number"
                value={info.skill4Progress}
                onChange={handleChange}
                name="skill4Progress"
              />
            </div>
          </div>

          <div>
            <label>Skill-5 :</label>
            <input
              type="text"
              value={info.skill5}
              onChange={handleChange}
              name="skill5"
            />
            <div>
              <label>How much % :</label>
              <input
                type="number"
                value={info.skill5Progress}
                onChange={handleChange}
                name="skill5Progress"
              />
            </div>
          </div>
        </div>

        {/* content which has to print */}
        <div className="printPdf_container">
          <div id="print_content">
            <PrintPdf
              fname={info.fname}
              // lname={info.lname}
              // desig={info.desig}
              // email={info.email}
              // skill1={info.skill1}
              // skill2={info.skill2}
              // skill3={info.skill3}
              // skill4={info.skill4}
              // skill5={info.skill5}
              // skill1Progress={info.skill1Progress}
              // skill2Progress={info.skill2Progress}
              // skill3Progress={info.skill3Progress}
              // skill4Progress={info.skill4Progress}
              // skill5Progress={info.skill5Progress}
              // profileDesc={info.profileDesc}
              // clgName={info.clgName}
              // clgLoc={info.clgLoc}
              // clgJdate={info.clgJdate}
              // clgEdate={info.clgEdate}
              // clgCourse={info.clgCourse}
              // compDesig={info.compDesig}
              // compName={info.compName}
              // compJdate={info.compJdate}
              // compEdate={info.compEdate}
              // compLoc={info.compLoc}
            />
          </div>
        </div>
        {/* content which has to show on screen */}
        <div
          className="showPdf_container_main"
          style={{ display: `${display}` }}
        >
          <div className="">
            <ShowPdf
              fname={info.fname}
              lname={info.lname}
              desig={info.desig}
              email={info.email}
              skill1={info.skill1}
              skill2={info.skill2}
              skill3={info.skill3}
              skill4={info.skill4}
              skill5={info.skill5}
              skill1Progress={info.skill1Progress}
              skill2Progress={info.skill2Progress}
              skill3Progress={info.skill3Progress}
              skill4Progress={info.skill4Progress}
              skill5Progress={info.skill5Progress}
              profileDesc={info.profileDesc}
              clgName={info.clgName}
              clgLoc={info.clgLoc}
              clgJdate={info.clgJdate}
              clgEdate={info.clgEdate}
              clgCourse={info.clgCourse}
              compDesig={info.compDesig}
              compName={info.compName}
              compJdate={info.compJdate}
              compEdate={info.compEdate}
              compLoc={info.compLoc}
            />
          </div>
        </div>

        {/* generate button */}
        <div className="info_btns">
          <div className="show_pdf">
            <button onClick={handleShowPdf}>{showPdfText}</button>
          </div>
          <div className="generate_pdf">
            <button onClick={generatePDF} type="primary">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default CV_maker;
