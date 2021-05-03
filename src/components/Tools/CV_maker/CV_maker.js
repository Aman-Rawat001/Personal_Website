import React, { useState } from "react";
import jsPDF from "jspdf";
import "./CV_maker.css";
import ShowPdf from "./ShowPdf/ShowPdf";

const CV_maker = () => {
  const [info, setInfo] = useState({
    fname: " ",
    lname: " ",
    desig: " ",
    email: " ",
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
          <textarea />
        </div>
      </div>
      <div className="educ_info info_div">
        <h4>Education</h4>
        <p>College Name</p>
        <textarea />
      </div>
      <div className="employHistory info_div">
        <h4>Employment History</h4>
        <div>
          <label>Designation :</label>
          <input />
          <label>Company Name</label>
          <input />
        </div>
      </div>
      <div className="skillSet info_div">
        <div>
          <h4>Skills</h4>
        </div>
        <div>
          <label>Skill-1 :</label>
          <input />
        </div>
        <div>
          <label>%</label>
          <input />
        </div>
        <div>
          <label>Skill-2 :</label>
          <input />
        </div>
        <div>
          <label>%</label>
          <input />
        </div>
        <div>
          <label>Skill-3 :</label>
          <input />
        </div>
        <div>
          <label>%</label>
          <input />
        </div>
        <div>
          <label>Skill-4 :</label>
          <input />
        </div>
        <div>
          <label>%</label>
          <input />
        </div>
        <div>
          <label>Skill-5 :</label>
          <input />
        </div>
        <div>
          <label>%</label>
          <input />
        </div>
      </div>

      {/* content which has to print */}
      <div id="print_content">
        <ShowPdf
          fname={info.fname}
          lname={info.lname}
          desig={info.desig}
          email={info.email}
        />
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
