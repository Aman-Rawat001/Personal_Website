import React from "react";
import "./Tools.css";
import Navbar from "../navbar/Navbar";
import CV_maker from "./CV_maker/CV_maker";

const Live_tools = () => {
  return (
    <>
      <div className="live_tools_title">
        <h1>CV Maker</h1>
      </div>
      <Navbar />
      <div className="tools_container">
        <div className="tool-1">
          <CV_maker />
        </div>
      </div>
    </>
  );
};

export default Live_tools;
