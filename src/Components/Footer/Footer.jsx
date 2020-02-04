import React from "react";
import "./Footer.css"

const Footer = ({location, saveCurrentChanges, sortByNames, sort, data, liveSearchText, search}) => {

    return (
        <div className={"footer-container-main"}>
            {location.pathname === "/refactor" &&
            <div>
                <button onClick={() => sortByNames(!sort)}
                        className={"footer-sort-button"}>{sort ? "Sort is ON" : "Sort is OFF"}</button>
                <button onClick={() => saveCurrentChanges(data)} className={"footer-save-button"}>Save</button>
                <input onChange={(e) => liveSearchText(e.currentTarget.value)}
                       className={"footer-live-search"} type="text"
                       value={search ? search : ""}
                       placeholder={"Поиск"}/>
            </div>}
        </div>
    )
};

export default Footer;
