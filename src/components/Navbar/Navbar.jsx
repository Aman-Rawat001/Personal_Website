import React from "react"
import "./navbar.css"

const Navbar = () => {

    function myFunction() {
        const x = document.getElementById("myLinks");
        if (x.style.display === "block") {
          x.style.display = "none";
        } else {
          x.style.display = "block";
        }
      }

    return (

        <>
                <div className="topnav">
                <a href="#home" class="active">Logo</a>
                <div id="myLinks">
                    <a href="#news">News</a>
                    <a href="#contact">Contact</a>
                    <a href="#about">About</a>
                </div>

                <a href="#" className="icon" onclick={myFunction()}>
                    <i className="fa fa-bars"></i>
                </a>
            </div>
        </>
    )
}

export default Navbar;