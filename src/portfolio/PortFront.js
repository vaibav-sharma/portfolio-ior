import React from "react";
import "./PortFront.css";
import Portfolio from "./Portfolio";
import Facebook from "../facbook-app/Facebook";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Amazon from "../amazon-app/Amazon";
import Extras from "../extras-app/Extras";

function PortFront() {
  return (
    // <div className="portFront"> <HashRouter basename="/">
    <div className="portFront"> <BrowserRouter basename="/portfolio">
        <div className="appAll">
          <Switch>
            <Route path="/amazon">
              <Amazon />
            </Route>
            <Route path="/facebook">
              <Facebook />
            </Route>
            <Route path="/extras">
              <Extras />
            </Route>
            <Route path="/">
              <Portfolio />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default PortFront;
