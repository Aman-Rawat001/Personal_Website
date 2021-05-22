import React from "react";
import "./My_cv.css";
import jsPDF from "jspdf";
import cv_pdf from "../images/Aman_resume.jpg";
// import Navbar from "../navbar/Navbar";

const My_cv = () => {
  const pdfGenerate = () => {
    var doc = new jsPDF("p", "mm", "a4");
    var width = doc.internal.pageSize.getWidth();
    var height = doc.internal.pageSize.getHeight();
    doc.addImage(cv_pdf, "PNG", 0, 0, width, height);
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
