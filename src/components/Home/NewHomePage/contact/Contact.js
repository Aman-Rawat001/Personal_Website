import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div
      className="container contactUs"
      data-aos="fade-up"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
    >
      <div className="">
        <div className="my-5">
          <h3
            className="montserrat600 mt-5"
            style={{ color: "#3d3d3d", marginBottom: "0" }}
          >
            GET IN TOUCH
          </h3>
          <small className="mulish400">(I would love to hear you)</small>
        </div>
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label montserrat600">
          Email
        </label>
        <input
          type="email"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </div>
      <div class="mb-3">
        <label
          for="exampleFormControlTextarea1"
          class="form-label montserrat600"
        >
          Message
        </label>
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
      <button type="submit" class="btn btn-primary submitBtn">
        Submit
      </button>
    </div>
  );
};

export default Contact;
