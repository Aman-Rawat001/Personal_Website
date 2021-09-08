import React from "react";
import "./NewHomePage.css";
import Navbar from "./navbarNew/Navbar";
import HeroScreen from "./HeroScreen/HeroScreen";

const NewHomePage = () => {
  return (
    <div>
      <div className="newNavbar">
        <Navbar />
      </div>
      <HeroScreen />
    </div>
  );
};

export default NewHomePage;
