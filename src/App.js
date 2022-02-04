import React from "react";
import { Switch, Route } from "react-router-dom";
// import Projects from "./components/projects/projects";
import About from "./components/about/About";
import Hprojects from "./components/subComp/HProjects";
import MLprojects from "./components/subComp/MLprojects";
import WebProjects from "./components/subComp/WebProjects";
// import Contact from "./components/contact/Contact";
// import Live_tools from "./components/Tools/Tools";
import ImageFinder from "./components/Tools/ImageFinder/ImageFinder";
import NewHomePage from "./components/Home/NewHomePage/NewHomePage";
import "./styles.css";
import Footer from "./components/Home/NewHomePage/footer/Footer";
import Services from "./components/Services/Services";

// import HomePage from "./components/Home/HomePage";
// import ImgFinderNavbar from "./components/Tools/ImageFinder/ImgFinderNavbar/ImgFinderNavbar";

const App = () => {
  return (
    <>
      {/* <Navbar /> */}
      <div>
        <div className="showOnSmallScreen">
          <Switch>
            <Route exact path="/" component={NewHomePage} />
            <Route exact path="/about" component={About} />
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
            <Route exact path="/hacking-projects" component={Hprojects} />
            <Route exact path="/image_finder" component={ImageFinder} />
            <Route exact path="/services" component={Services} />
            {/* <Route exact path="/projects" component={Projects} />
            <Route exact path="/contact" component={Contact} />
  <Route exact path="/live_tools" component={Live_tools} />*/}
          </Switch>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default App;
