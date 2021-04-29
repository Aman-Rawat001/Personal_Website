import React from "react";
import "./PopUp_form.css";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import  from "@fortawesome/react-fontawesome"

const PopUp_form = () => {
  return (
    <>
      <div className="popUp_bg"></div>
      <div className="popUp_container">
        <h6 className="faIcon">
          <FontAwesomeIcon icon={faCheckCircle} />
        </h6>
        <h6 className="wellcome">GREAT !</h6>
        <h6 className="content">Wellcome, Enter Your Email</h6>
        <h6 className="content">& Ready To Proceed.</h6>
        <input type="email" placeholder="Enter Your Email" />

        <button>Start</button>
      </div>
    </>
  );
};

export default PopUp_form;
