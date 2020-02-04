import React from "react";
import "./Output.css"

const Output = ({out}) => {
    console.log(out)
    return (
        <div className={"output-main-container"}>
            <textarea value={out} name="" id="" cols="300" onClick={(e)=> e.currentTarget.select()}></textarea>
        </div>
    )
};

export default Output;
