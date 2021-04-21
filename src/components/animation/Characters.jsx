import React from "react";
import "./character.css";

import sinchan from "../images/sin-animation.gif";
import boo from "../images/boo-animation.gif";

const Characters = (props) => {
  return (
    <>
      <marquee style={{ position: `${props.pos}` }} className="animation-box">
        <img
          style={{ width: `${props.charWidth}` }}
          src={sinchan}
          alt="sinchan"
        />
        <img style={{ width: `${props.charWidth}` }} src={boo} alt="sinchan" />
      </marquee>
    </>
  );
};

export default Characters;
