import React from "react";
import Redactor from "./Redactor";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {
    categoryOverrideEdit,
    checkboxEdit,
    nameOverrideEdit,
    tvGidEdit
} from "../../Redux/replace-reducer";
import {withFilter} from "../Filters/withFilter";

const RedactorContainer = props => props.data ? <Redactor {...props}/> : <Redirect to={"/input"}/>;

const mapStateToProps = state => ({
    data: state.replacer.data,
    sort: state.replacer.sort,
    search: state.replacer.search,
    override: state.replacer.sortOverride
});
const mapDispatchToProps = {
    checkboxEdit,
    nameOverrideEdit,
    categoryOverrideEdit,
    tvGidEdit,
};
export default connect(mapStateToProps, mapDispatchToProps)(withFilter(RedactorContainer)) ;
