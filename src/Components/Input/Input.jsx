import React from "react";
import "./Input.css"


const Input = ({tempText, writeTempData, parseData, clearInputArea}) => {

    return (
        <div className={"input-main-container"}>
            <textarea onChange={(e) => writeTempData(e.currentTarget.value)}
                      placeholder={"Enter <channels Data Here"}
                      value={tempText}
                      name=""
                      id=""
                      cols="30"
                      rows="10"/>
            {!tempText
                ? <button disabled={true} onClick={() => parseData(tempText)}>Write Data</button>
                : <button onClick={() => parseData(tempText)}>Write Data</button>}
            <button onClick={() => clearInputArea()}>Clear</button>
        </div>
    )
};

export default Input;
