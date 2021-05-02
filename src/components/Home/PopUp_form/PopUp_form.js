import React, { useState, useEffect } from "react";
import "./PopUp_form.css";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import firebase from "../../../firebase";
import Characters from "../../animation/Characters";

// import  from "@fortawesome/react-fontawesome"

const PopUp_form = () => {
  const db = firebase.firestore();

  const [inpValue, setInpValue] = useState(" ");
  const [submit_status, setSubmit_status] = useState("none");
  useEffect(() => {
    setTimeout(() => {
      console.log("calling");
      setSubmit_status("flex");
    }, 2500);
  }, []);

  const handleInpValue = (event) => {
    setInpValue(event.target.value);
  };

  const popUp_handleSubmit = (e) => {
    e.preventDefault();

    if (inpValue === " ") {
      alert("Opps!, Enter your Email");
    } else {
      db.collection("popUp_emails")
        .add({
          email: inpValue,
        })
        .then(() => {
          alert("Your Email has been submitted to Aman Rawat.");
        })
        .catch((error) => {
          alert(error.message);
        });
      setInpValue("");
      setSubmit_status("none");
    }
  };

  return (
    <>
      <div style={{ display: `${submit_status}` }}>
        <Characters />
      </div>
      <div className="popUp_bg" style={{ display: `${submit_status}` }}></div>
      <div className="popUp_container" style={{ display: `${submit_status}` }}>
        <h6 className="faIcon">
          <FontAwesomeIcon icon={faCheckCircle} />
        </h6>
        <h6 className="wellcome">GREAT !</h6>
        <h6 className="content">Enter Your Email</h6>
        <h6 className="content">& Ready To Proceed further...</h6>
        <form onSubmit={popUp_handleSubmit} action="">
          <input
            type="email"
            value={inpValue}
            onChange={handleInpValue}
            placeholder="Enter Your Email"
          />
          <button>Proceed</button>
        </form>
      </div>
    </>
  );
};

export default PopUp_form;
