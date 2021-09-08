import React from "react";
import { Switch, Route } from "react-router-dom";
import Projects from "./components/projects/projects";
import About from "./components/about/About";
import Hprojects from "./components/subComp/HProjects";
import MLprojects from "./components/subComp/MLprojects";
import WebProjects from "./components/subComp/WebProjects";
import Contact from "./components/contact/Contact";
import Live_tools from "./components/Tools/Tools";
import ImageFinder from "./components/Tools/ImageFinder/ImageFinder";
import NewHomePage from "./components/Home/NewHomePage/NewHomePage";
import "./styles.css";

import HomePage from "./components/Home/HomePage";
// import ImgFinderNavbar from "./components/Tools/ImageFinder/ImgFinderNavbar/ImgFinderNavbar";

const App = () => {
  return (
    <>
      {/* <Navbar /> */}
      <div>
        <div className="showOnLargeScreen">
          <h3>This Site is not build for large screens. Open in mobile tab.</h3>
        </div>
        <div className="showOnSmallScreen">
          <Switch>
            <Route exact path="/" component={NewHomePage} />
            {/* <Route exact path="/" component={HomePage} /> */}
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/portfolio" component={About} />
            <Route exact path="/hacking-projects" component={Hprojects} />
            <Route
              exact
              path="/machine-learning-projects"
              component={MLprojects}
            />
            <Route
              exact
              path="/web-development-projects"
              component={WebProjects}
            />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/live_tools" component={Live_tools} />
            <Route exact path="/image_finder" component={ImageFinder} />
          </Switch>
        </div>
      </div>
    </>
  );
};

export default App;
