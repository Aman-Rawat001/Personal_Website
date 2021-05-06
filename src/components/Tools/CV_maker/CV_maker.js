import React, { useState } from "react";
import jsPDF from "jspdf";
import "./CV_maker.css";
// import PrintPdf from "./PrintPdf/PrintPdf";
// import PrintPdf, { ComponentToPrint } from "./PrintPdf/PrintPdf";
import ShowPdf from "./ShowPdf/ShowPdf";

const CV_maker = () => {
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
  const generatePDF = () => {
    // var doc = new jsPDF("p", "pt", "a4");
    // doc.html(document.querySelector("#print_content"), {
    //   callback: function (pdf) {
    //     pdf.save("myPDF.pdf");
    //   },
    // });
    var doc = new jsPDF("landscape", "px", "a4", "false");
    doc.text(
      "Opps! This tool is not completed yet, work in progress...",
      0.5,
      0.5
    );
    doc.save("error_CV.pdf");
  };

  return (
    <>
      {/* input feilds */}

      <div className="personalInformation info_div">
        <h3>Personal Information</h3>
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

      <div className="aboutYour info_div">
        <div>
          <h4>Profile</h4>
          <p>Profile Description </p>
          <textarea
            onChange={handleChange}
            value={info.profileDesc}
            name="profileDesc"
          />
        </div>
      </div>
      {/* Education details */}
      <div className="educ_info info_div">
        <h4>Education</h4>
        <p>College Name</p>
        <input onChange={handleChange} value={info.clgName} name="clgName" />
        <p>Course</p>
        <input
          onChange={handleChange}
          value={info.clgCourse}
          name="clgCourse"
        />
        <p>Location</p>
        <input onChange={handleChange} value={info.clgLoc} name="clgLoc" />
        <p>Joining Date</p>
        <input
          onChange={handleChange}
          type="date"
          value={info.clgJdate}
          name="clgJdate"
        />
        <p>Ending Date</p>
        <input
          onChange={handleChange}
          type="date"
          value={info.clgEdate}
          name="clgEdate"
        />
      </div>
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
            <label>Company Name :</label>
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
      <div className="skillSet info_div">
        <div>
          <h4>Skills</h4>
        </div>
        <div>
          <label>Skill-1 :</label>
          <input
            type="text"
            value={info.skill1}
            onChange={handleChange}
            name="skill1"
          />
          <div>
            <label>%</label>
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
            <label>%</label>
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
            <label>%</label>
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
            <label>%</label>
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
            <label>%</label>
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
      {/* <div className="printPdf_container">
        <div id="print_content">
          <PrintPdf
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
      </div> */}
      {/* content which has to show on screen */}
      <div className="showPdf_container_main" style={{ display: `${display}` }}>
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
    </>
  );
};
export default CV_maker;
