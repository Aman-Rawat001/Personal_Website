import React from "react";
import "./character.css";

import sinchan from "../images/sin-animation.gif";
import boo from "../images/boo-animation.gif";

const Characters = () => {
  return (
    <>
      <marquee className="animation-box">
        <img src={sinchan} alt="sinchan" />
        <img src={boo} alt="sinchan" />
      </marquee>
    </>
  );
};

export default Characters;
