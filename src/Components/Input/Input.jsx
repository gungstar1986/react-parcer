import React from "react";
import "./Input.css"


const Input = ({tempText, writeTempData, parseData, clearInputArea}) => {

    return (
        <div className={"input-main-container"}>
            <div className={"input-type"}>XMLTV In Area</div>
            <textarea onChange={(e) => writeTempData(e.currentTarget.value)}
                      placeholder={"Enter <channel .../> Data Here"}
                      value={tempText}
                      name=""
                      id=""
                      cols="30"
                      rows="10"/>
            {!tempText
                ? <button className={"button-disabled"} disabled={true} onClick={() => parseData(tempText)}>Write Data</button>
                : <button className={"button-enabled"} onClick={() => parseData(tempText)}>Write Data</button>}
            <button className={"button-enabled"} onClick={() => clearInputArea()}>Clear</button>
        </div>
    )
};

export default Input;
