import React from "react";
import "./Footer.css"
import Footer from "./Footer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {saveCurrentChanges, sortByNames} from "../../Redux/replace-reducer";
import {withTransfer} from "../Filters/withFilter";
import {compose} from "redux";


const FooterContainer = (props) => {

    return (
        <Footer {...props}/>
    )
}

const mapStateToProps = state => ({
    sort: state.replacer.sort
});
const mapDispatchToProps = {saveCurrentChanges, sortByNames};
export default compose(connect(mapStateToProps, mapDispatchToProps), withRouter, withTransfer)(FooterContainer);