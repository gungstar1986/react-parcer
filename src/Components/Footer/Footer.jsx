import React from "react";
import "./Footer.css"
import facebook from "../Img/iconfinder_facebook_circle_black_107153.png"

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
                        className={"footer-sortOverride-button"}>{override ? `Sort by Override ON` : "Sort by Override OFF"}
                </button>

                <button onClick={() => saveAction(!save)}
                        className={"footer-saveData-button"}>Save Data
                </button>

                <button onClick={() => saveCurrentChanges(data)} className={"footer-save-button"}>Render List</button>

                <input onChange={(e) => liveSearchText(e.currentTarget.value)}
                       onClick={(e) => e.currentTarget.select()}
                       className={"footer-live-search"} type="text"
                       value={search ? search : ""}
                       placeholder={"Поиск"}/>
            </div>}
            {location.pathname === "/" && <div className={"footer-developer"}>
                <span>
                    <a href="https://www.facebook.com/profile.php?id=100006348661700&ref=bookmarks">
                        <img className={"facebook-icon"} src={facebook} alt=""></img>
                    </a>
                    </span>
                <div>Для донатов: ПриватБанк 5168 7554 3495 5064</div>
                <div>Кухтин Денис Сергеевич. Разработано на React.JS в 2020 году</div>
            </div>}
        </div>
    )
};

export default Footer;
