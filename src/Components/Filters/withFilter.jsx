import React from "react";
import {Redirect} from "react-router-dom";

let sortedData;
export const withTransfer = Component => (props) => <Component data={sortedData} {...props}/>;


export const withFilter = (Component) => ({data, sort, search, ...props}) => {

    if (!data) return <Redirect to={"/input"}/>;
    sortedData = sort
        ? (data.map(el => el)).sort((a, b) => a.name.charCodeAt(0) - b.name.charCodeAt(0))
        : data;

    const filtered =  search
        ? sortedData.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
        : sortedData;

    return <Component data={filtered} {...props}/>
};





