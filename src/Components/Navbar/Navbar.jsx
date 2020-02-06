import React from "react";
import {NavLink} from "react-router-dom";
import "./Navbar.css"


const Navbar = () => {

    return (
        <div>
            <div className={"main-navbar-container"}>
                <div className={"navbar-item-container"}>
                    <NavLink activeClassName={"active-link"} exact to={"/"}>Home</NavLink>
                </div>
                <div className={"navbar-item-container"}>
                    <NavLink activeClassName={"active-link"} to={"/input"}>Input</NavLink>
                </div>
                <div className={"navbar-item-container"}>
                    <NavLink activeClassName={"active-link"} to={"/refactor"}>Editor</NavLink>
                </div>
                <div className={"navbar-item-container"}>
                    <NavLink activeClassName={"active-link"} to={"/output"}>Output</NavLink>
                </div>
            </div>
            <div className={"navbar-horizontal"}>
                <div className={"navbar-horizontal-line"}>

                </div>
            </div>

        </div>

    )
};
export default Navbar;
