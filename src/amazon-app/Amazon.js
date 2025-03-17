import "./Amazon.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./HeaderAm";
import Home from "./Home";
import { HashRouter, BrowserRouter, Link } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Header />
      <Home />
    </div>
  );
}

export default App;
