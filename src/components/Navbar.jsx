import React from 'react'
import { NavLink } from "react-router-dom"
import "./Navbar.css"

const Navbar = () => {
    return (
        <>
            <div className="navbar">
                <h3 className="logo">My<span>  Resume </span></h3>

                <div className="nav-links">
                    <NavLink className="links" to="/">About</NavLink>
                    <NavLink className="links" to="/projects">Projects</NavLink>
                    <NavLink className="links" to="/contact">Contact</NavLink>
                </div>
            </div>
        </>
    )
}

export default Navbar;