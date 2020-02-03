import React from "react";
import {NavLink} from "react-router-dom";
import "./Navbar.css"


const Navbar = () => {

    return (
        <div className={"main-navbar-container"}>
            <div className={"navbar-item-container"}>
                <NavLink activeClassName={"active-link"} exact to={"/"}>Главная</NavLink>
            </div>
            <div className={"navbar-item-container"}>
                <NavLink activeClassName={"active-link"} to={"/input"}>Input</NavLink>
            </div>
            <div className={"navbar-item-container"}>
                <NavLink activeClassName={"active-link"} to={"/refactor"}>Redactor</NavLink>
            </div>
            <div className={"navbar-item-container"}>
                <NavLink activeClassName={"active-link"} to={"/output"}>Output</NavLink>
            </div>
        </div>
    )
};
export default Navbar;
