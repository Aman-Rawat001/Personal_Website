import React from "react";
import "./My_cv.css";
import jsPDF from "jspdf";
import cv_pdf from "../images/Aman_rawat_cv.jpg";
// import Navbar from "../navbar/Navbar";

const My_cv = () => {
  const pdfGenerate = () => {
    var doc = new jsPDF("landscape", "px", "a4", "false");
    doc.addImage(cv_pdf, "PNG", 65, 20, 500, 400);
    doc.save("Aman_Rawat CV.pdf");
  };
  return (
    <>
      {/* <Navbar /> */}
      <div className="downloadCV_container">
        <br />
        <button onClick={pdfGenerate}>Download CV</button>
      </div>
    </>
  );
};

export default My_cv;
