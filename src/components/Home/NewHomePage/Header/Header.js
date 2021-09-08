import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="container-fluid HeaderTop">
        <div className="navbar">
          <div className="">
            <div>
              <h1>Aman_Rawat</h1>
              <p>About</p>
              <p>Work</p>
              <p>Blog</p>
              <p>Tools</p>
              <p>HIRE ME</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            {/* <p>Hi There</p>
            <h2>I'm</h2>
            <h2>Aman</h2>
            <h2>Rawat</h2> */}
          </div>
          <div className="col-lg-6"></div>
        </div>
      </div>
    </>
  );
};

export default Header;
