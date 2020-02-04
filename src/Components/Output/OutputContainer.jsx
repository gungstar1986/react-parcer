import React from "react";
import Output from "./Output";
import {withRebuild} from "../Filters/withRebuild";
import {connect} from "react-redux";


const OutputContainer = props => <Output {...props}/>;
const mapStateToProps = state => ({
    outputData: state.replacer.outputData
});
export default connect(mapStateToProps)(withRebuild(OutputContainer)) ;
