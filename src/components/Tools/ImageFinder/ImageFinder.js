import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import ImgFinderNavbar from "./ImgFinderNavbar/ImgFinderNavbar";
import Search from "./search/Search";

const ImageFinder = () => {
  return (
    <>
      <MuiThemeProvider>
        <ImgFinderNavbar />
        <Search />
      </MuiThemeProvider>
    </>
  );
};

export default ImageFinder;
