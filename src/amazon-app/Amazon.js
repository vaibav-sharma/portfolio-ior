import './Amazon.css';
import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from "./HeaderAm";
import Home from "./Home"

function App() {
  return (
    <Router>
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
    </Router>
  );
}

export default App;
