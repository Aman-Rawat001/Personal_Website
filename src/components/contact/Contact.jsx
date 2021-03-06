import React, { useState } from "react";
import "./contact.css";
import Footer from "../Footer/Footer";
import Navbar from "../navbar/Navbar";
import firebase from "../../firebase";

const Contact = () => {
  const db = firebase.firestore();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection("contacts")
      .add({
        name: name,
        email: email,
        message: message,
      })
      .then(() => {
        alert("Your Message has been submitted to Aman Rawat.");
      })
      .catch((error) => {
        alert(error.message);
      });

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      <div className="contact_container">
        <div className="contact_title">
          <h1>Get In Touch</h1>
          <h5>I would Love To hear You</h5>
        </div>
        <Navbar />
        <div className="form_container">
          <form onSubmit={handleSubmit} className="contact_form" action="">
            <div className="inputField">
              <label htmlFor="">Name</label>
            </div>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Your Name"
            ></input>
            <div className="inputField">
              <label htmlFor="">Email</label>
            </div>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Your Email"
            ></input>
            <div className="inputField">
              <label htmlFor="">Message</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Enter Your Message"
              ></textarea>
            </div>
            <button className="form_btn">Send</button>
          </form>
        </div>
        <div className="contactQueries">
          <h2 className="content1">Contact me</h2>
          <h2 className="content2">If you have Any queries, like: </h2>
          <ul className="contactList">
            <li>Want to work with me?</li>
            <li>Want to know more about me?</li>
            <li>Want to Hire me?</li>
            <li>Need any help in project?</li>
            <li>Have any idea of startup?</li>
            <li>Just Chilling?</li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
