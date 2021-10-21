import React from 'react';
import './App.css';

import {BrowserRouter, Route} from "react-router-dom";
import HeaderDown from "./components/Direct/HeaderDown/HeaderDown";
import Header from "./components/Direct/Header/Header";


import Direct from "./components/Direct/Direct";
import Profile from "./components/PartProjec/Profile/Profile";

import DiologsContainer from "./components/PartProjec/Diologs/DiologsContainer";


function
App(props) {

  return (


      <div className="package ">
        <Header/>
        <HeaderDown/>
        <Route exact path='/profile' render={() => <Profile/>}/>
        <Route path='/diologs' render={() => <DiologsContainer/>}/>
        <Route exact path='/education' render={() => <Direct/>}/>
      </div>


  );
}

export default App;

