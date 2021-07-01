import React from "react"
import "./App.css";
import Header from "./Header";
import Feed from "./Feed";
import Sidebar from "./Sidebar"
import "./Facebook.css"

function Facebook() {
  return (
  <div className="app__info">  
    
    
    <div className="app__header">
      <Header />
    </div>

    <div className="app__body">
      <Sidebar />
      <Feed />
    </div>

  </div>
    );
  }
export default Facebook;
