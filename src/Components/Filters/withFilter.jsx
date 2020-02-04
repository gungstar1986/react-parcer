import React from "react";
import {Redirect} from "react-router-dom";

let sortedData;

export const withFilter = (Component) => ({data, sort, search, override, ...props}) => {
    if (!data) return <Redirect to={"/input"}/>;

    //Sort by name
    sortedData = sort
        ? data.map(el => el)
            .sort((a, b) => a.name ? a.name.charCodeAt(0) - b.name.charCodeAt(0) : a.id - b.id)
        : data;

    //Sort by nameOverride
    sortedData = override
        ? sortedData.map(el => el)
            .sort((a, b) => a.nameOverride ? a.nameOverride.charCodeAt(0) - b.nameOverride.charCodeAt(0) : a.id - b.id)
        : sortedData;

    // Live search function
    sortedData = search
        ? sortedData.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
        : sortedData;
    return <Component data={sortedData} {...props}/>
};
export const withTransfer = Component => (props) => <Component data={sortedData} {...props}/>;

