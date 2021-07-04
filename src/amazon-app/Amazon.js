import './Amazon.css';
import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from "./HeaderAm";
import Home from "./Home"
import { HashRouter, Link } from "react-router-dom";


function App() {
  return (
    <HashRouter>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <h1>Checkout</h1>
          </Route>
          <Route path="/login">
            <h1>Login Page</h1>
          </Route>
          <Route path="/amazon">
          <Header />
          <Home />
          </Route>
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
