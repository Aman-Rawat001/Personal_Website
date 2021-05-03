import React from "react";
import "./ShowPdf.css";

const ShowPdf = (props) => {
  return (
    <>
      <div className="showPdf_container">
        <h4>{props.fname}</h4>
        <h4>{props.lname}</h4>
        <h4>{props.desig}</h4>
        <h4>{props.email}</h4>
      </div>
    </>
  );
};

export default ShowPdf;
