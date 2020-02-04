import React from "react";
import {Redirect} from "react-router-dom";


export const withRebuild = Component => ({outputData}) => {
    if (!outputData) return <Redirect to={"/refactor"}/>;

    let list = '';
    outputData.map(elem =>
        list += `<channel name="${elem.name}" nameOverride="${elem.nameOverride}" tvg-id="${elem.tvgId}" enabled="${elem.enabled}" category="${elem.category}" categoryOverride="${elem.categoryOverride}" serviceRef="${elem.serviceRef}" clearStreamUrl="${elem.clearStreamUrl}" /> \n`);

    return (
        <Component out={list}/>
    )
};
