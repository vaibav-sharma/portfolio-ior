import React, {useState} from "react"
import "./App.css";
import Header2 from "./Header2";
import Feed from "./Feed";
import Sidebar from "./Sidebar"
import Portfolio from "./Portfolio"
import Facebook from "./Facebook"
import { Route, Link } from "react-router-dom";
import PortFront from "./PortFront"
import { Divider } from "@material-ui/core";

function App() {

  return (

  <div className="app">  
   
    <PortFront />
    

    
  </div>
    );
  }
export default App;
