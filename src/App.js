import React from "react";
import { Switch, Route } from "react-router-dom";
import Projects from "./components/projects/projects";
import About from "./components/about/About";
import Hprojects from "./components/subComp/HProjects";
import MLprojects from "./components/subComp/MLprojects";
import WebProjects from "./components/subComp/WebProjects";
import Contact from "./components/contact/Contact";
import My_cv from "./components/My_cv/My_cv";

import "./styles.css";

import HomePage from "./components/Home/HomePage";

const App = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/portfolio" component={About} />
        <Route exact path="/hacking-projects" component={Hprojects} />
        <Route exact path="/machine-learning-projects" component={MLprojects} />
        <Route exact path="/web-development-projects" component={WebProjects} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/Download_CV" component={My_cv} />
      </Switch>
    </>
  );
};

export default App;
