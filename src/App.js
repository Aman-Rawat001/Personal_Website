import React from 'react'
import {Switch, Route} from "react-router-dom"
import "./styles.css"

import HomePage from "./components/Home/HomePage"

const App = () => {
  return(
    <>
    {/* <Navbar /> */}
      <Switch>
        <Route exact path="/" component={HomePage}/>
        {/* <Route exact path="/projects" component={Projects}/> */}
        {/* <Route exact path="/hacking-projects" component={Hprojects}/>
        <Route exact path="/machine-learning-projects" component={MLprojects}/>
        <Route exact path="/web-development-projects" component={WebProjects}/> */}
      </Switch>
    </>
  )
}

export default App;