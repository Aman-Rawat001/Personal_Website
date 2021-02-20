import React from 'react'
import {Switch, Route} from "react-router-dom"

import Navbar from "./components/Navbar"
import About from "./components/About"
import Projects from "./components/Projects"
import Hprojects from "./components/subComp/HProjects"
import MLprojects from "./components/subComp/MLprojects"
import WebProjects from "./components/subComp/WebProjects"

const App = () => {
  return(
    <>
    <Navbar />
      <Switch>
        <Route exact path="/" component={About}/>
        <Route exact path="/projects" component={Projects}/>
        <Route exact path="/hacking-projects" component={Hprojects}/>
        <Route exact path="/machine-learning-projects" component={MLprojects}/>
        <Route exact path="/web-development-projects" component={WebProjects}/>
      </Switch>
    </>
  )
}

export default App;