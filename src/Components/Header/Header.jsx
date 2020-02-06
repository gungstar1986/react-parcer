import React from "react";
import './Header.css'
import logo from "../Img/Enigma2_logo.png"
import name from "../Img/name.png"

const Header = ({data}) => {

    console.log();
    return (
        <div className={"main-header-container"}>
            <div className={"header-item-logo"}><img src={logo} alt=""/></div>
            <div className={"header-item-description"}>
                <span className={"header-info-span"}>Bouquets:</span>
                <span>{Array.isArray(data) ? data.length : "0"}</span>
            </div>
            <div className={"header-item-name"}><img src={name} alt=""/></div>

        </div>
    )
};
export default Header;
