import React, { useState } from "react";
import jsPDF from "jspdf";
import "./CV_maker.css";
import PrintPdf from "./PrintPdf/PrintPdf";
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
    profileDesc: " ",
    clgName: " ",
    clgLoc: " ",
    compDesig: " ",
    compName: " ",
  });

  const handleChange = (e) => {
    var { name, value } = e.target;
    setInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const generatePDF = () => {
    var doc = new jsPDF("p", "pt", "a4");
    doc.html(document.querySelector("#print_content"), {
      callback: function (pdf) {
        pdf.save("myPDF.pdf");
      },
    });
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
      <div className="educ_info info_div">
        <h4>Education</h4>
        <p>College Name</p>
        <input onChange={handleChange} value={info.clgName} name="clgName" />
        <p>Location</p>
        <input onChange={handleChange} value={info.clgLoc} name="clgLoc" />
      </div>
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
        </div>
      </div>
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
        </div>

        <div>
          <label>Skill-2 :</label>
          <input
            type="text"
            value={info.skill2}
            onChange={handleChange}
            name="skill2"
          />
        </div>

        <div>
          <label>Skill-3 :</label>
          <input
            type="text"
            value={info.skill3}
            onChange={handleChange}
            name="skill3"
          />
        </div>

        <div>
          <label>Skill-4 :</label>
          <input
            type="text"
            value={info.skill4}
            onChange={handleChange}
            name="skill4"
          />
        </div>

        <div>
          <label>Skill-5 :</label>
          <input
            type="text"
            value={info.skill5}
            onChange={handleChange}
            name="skill5"
          />
        </div>
      </div>

      {/* content which has to print */}
      <div className="printPdf_container">
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
            profileDesc={info.profileDesc}
            clgName={info.clgName}
            clgLoc={info.clgLoc}
            compDesig={info.compDesig}
            compName={info.compName}
          />
        </div>
      </div>
      {/* content which has to show on screen */}
      <div className="showPdf_container_main">
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
            profileDesc={info.profileDesc}
            clgName={info.clgName}
            clgLoc={info.clgLoc}
            compDesig={info.compDesig}
            compName={info.compName}
          />
        </div>
      </div>

      {/* generate button */}
      <div className="info_btns">
        <div className="show_pdf">
          <button>show_pdf</button>
        </div>
        <div className="generate_pdf">
          <button onClick={generatePDF} type="primary">
            Generate PDF
          </button>
        </div>
      </div>
    </>
  );
};
export default CV_maker;
