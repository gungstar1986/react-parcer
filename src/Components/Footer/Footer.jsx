import React from "react";
import "./Footer.css"

const Footer = (props) => {
    const {
        location, saveCurrentChanges, sortByNames, override, save,
        sort, liveSearchText, search, sortByOverride, data, saveAction
    } = props;

    return (
        <div className={"footer-container-main"}>
            {location.pathname === "/refactor" &&
            <div>

                <button onClick={() => sortByNames(!sort)}
                        className={"footer-sort-button"}>{sort ? "Sort by Name ON" : "Sort by Name OFF"}
                </button>

                <button onClick={() => sortByOverride(!override)}
                        className={"footer-sortOverride-button"}>{override ? "Sort by Override ON" : "Sort by Override OFF"}
                </button>

                <button onClick={() => saveAction(!save)}
                        className={"footer-saveData-button"}>Save Data
                </button>

                <button onClick={() => saveCurrentChanges(data)} className={"footer-save-button"}>Render List</button>

                <input onChange={(e) => liveSearchText(e.currentTarget.value)}
                       className={"footer-live-search"} type="text"
                       value={search ? search : ""}
                       placeholder={"Поиск"}/>
            </div>}
        </div>
    )
};

export default Footer;
