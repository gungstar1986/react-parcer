import React from "react";
import {Redirect} from "react-router-dom";

let sortedData;

export const withFilter = (Component) => ({data, sort, ...props}) => {
    if (!data) return <Redirect to={"/input"}/>;
    sortedData = (data.map(el => el)).sort((a, b) => a.name.charCodeAt(0) - b.name.charCodeAt(0));
    return sort ? <Component data={sortedData} {...props}/> : <Component data={data} {...props}/>
};

export const withTransfer = Component => (props) => <Component data={sortedData} {...props}/>;



