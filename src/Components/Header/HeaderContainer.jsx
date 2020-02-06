import React from "react";
import Header from "./Header";
import {connect} from "react-redux";

const HeaderContainer = props => <Header {...props}/>;

const mapStateToProps = state => ({
    data: state.replacer.data
});
export default connect(mapStateToProps)(HeaderContainer) ;
