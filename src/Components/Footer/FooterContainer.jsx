import React from "react";
import Footer from "./Footer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {liveSearchText, saveAction, saveCurrentChanges, sortByNames, sortByOverride} from "../../Redux/replace-reducer";
import {withTransfer} from "../Filters/withFilter";
import {compose} from "redux";


const FooterContainer = (props) => <Footer {...props}/>;
const mapStateToProps = state => ({
    sort: state.replacer.sort,
    override: state.replacer.sortOverride,
    search: state.replacer.search,
    save: state.replacer.save
});
const mapDispatchToProps = {saveCurrentChanges, sortByNames, liveSearchText, sortByOverride, saveAction};
export default compose(connect(mapStateToProps, mapDispatchToProps), withRouter, withTransfer)(FooterContainer);
