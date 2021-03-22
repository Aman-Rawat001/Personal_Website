import React from 'react'
import {Switch, Route} from "react-router-dom"
import Portfolio from "./components/portfolio/Portfolio"
import About from "./components/about/About"
import Hprojects from "./components/subComp/HProjects"
import MLprojects from "./components/subComp/MLprojects"
import WebProjects from "./components/subComp/WebProjects"

import "./styles.css"

import HomePage from "./components/Home/HomePage"

const App = () => {
  return(
    <>
    {/* <Navbar /> */}
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/portfolio" component={Portfolio}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/hacking-projects" component={Hprojects}/> 
        <Route exact path="/machine-learning-projects" component={MLprojects}/>
        <Route exact path="/web-development-projects" component={WebProjects}/>
      </Switch>
    </>
  )
}

export default App;