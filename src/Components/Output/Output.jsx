import React from "react";
import "./Output.css"

const Output = ({out}) => {
    console.log(out)
    return (
        <div className={"output-main-container"}>
            <div className={"output-type"}>XMLTV Out Area</div>
            <textarea defaultValue={out} name="" id="" cols="300" onClick={(e)=> e.currentTarget.select()}></textarea>
        </div>
    )
};

export default Output;
