import React from "react";
import "./Input.css"
import Input from "./Input";
import {connect} from "react-redux";
import {clearInputArea, parseData, writeTempData} from "../../Redux/replace-reducer";


const InputContainer = props => {
    return (
        <Input {...props}/>
    )
};

const mapStateToProps = state => ({
    tempText: state.replacer.tempData
});
const mapDispatchToProps = {
    clearInputArea,
    writeTempData,
    parseData
};
export default connect(mapStateToProps, mapDispatchToProps)(InputContainer);
