import React from "react"
import "./navbar.css"

const Navbar = () => {
    return(
        <>

<nav role="navigation">
  <div id="menuToggle">

    <input type="checkbox" />
    
    <span></span>
    <span></span>
    <span></span>

    <ul id="menu">
      <a href="/"><li>Home</li></a>
      <a href="/about"><li>About</li></a>
      <a href="/portfolio"><li>Portfolio</li></a>
      <a href="/contact"><li>Contact Me</li></a>
      <a target="_blank" href="http://futuretech.epizy.com"><li>Blog</li></a>
    </ul>
  </div>
</nav>
        </>
    )
}

export default Navbar