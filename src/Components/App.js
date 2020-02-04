import React from 'react';
import './App.css';
import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";
import {Route} from "react-router-dom";
import Main from "./Main/Main";
import InputContainer from "./Input/InputContainer";
import RedactorContainer from "./Redactor/RedactorContainer";
import FooterContainer from "./Footer/FooterContainer";
import OutputContainer from "./Output/OutputContainer";

const App = () => {
    return (
        <div className="App">
            <Header/>
            <Navbar/>
            <div className={"main-app-content-container"}>
                <Route exact path={"/"} render={() => <Main/>}/>
                <Route path={"/input"} render={() => <InputContainer/>}/>
                <Route path={"/refactor"} render={() => <RedactorContainer/>}/>
                <Route path={"/output"} render={() => <OutputContainer/>}/>
            </div>
            <FooterContainer/>
        </div>
    );
};

export default App;
