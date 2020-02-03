import React from "react";
import "./Footer.css"

const Footer = ({location, saveCurrentChanges, sortByNames, sort, data}) => {

    return (
        <div className={"footer-container-main"}>
            {location.pathname === "/refactor" &&
            <div>
                <button onClick={() => saveCurrentChanges(data)} className={"footer-save-button"}>Save</button>
                <button onClick={() => sortByNames(!sort)} className={"footer-sort-button"}>{sort ? "Sort is ON" : "Sort is OFF"}</button>
            </div>}
        </div>
    )
};

export default Footer;
