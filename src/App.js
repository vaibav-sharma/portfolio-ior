// App.js
import React, { useState } from "react";
import "./App.css";
import PortFront from "./portfolio/PortFront";
import Login from "./login-app/Login";
import Header2 from "./facbook-app/Header2";
import Register from "./register-app/Register";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Facebook from "./facbook-app/Facebook";
import Amazon from "./amazon-app/Amazon";
import Extras from "./extras-app/Extras";
import Portfolio from "./portfolio/Portfolio";
import PrivateRoute from "./route/PrivateRoute";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("authToken") ? true : false
  );

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("authToken"); // important to remove the token.
  };

  return (
    <div className="app">
      <div className="header">
        <Header2 onLogout={handleLogout} isLoggedIn={isLoggedIn}/>
      </div>
      <BrowserRouter basename="/">
        <Switch>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            {isLoggedIn ? (
              <Redirect to="/portfolio" />
            ) : (
              <Login onLoginSuccess={handleLoginSuccess} />
            )}
          </Route>
          <PrivateRoute
            path="/portfolio"
            isLoggedIn={isLoggedIn}
            component={() => (
              <Switch>
                <Route exact path="/portfolio">
                  <Portfolio />
                </Route>
                <Route path="/portfolio/facebook">
                  <Facebook />
                </Route>
                <Route path="/portfolio/amazon">
                  <Amazon />
                </Route>
                <Route path="/portfolio/extras">
                  <Extras />
                </Route>
                <Route path="*">
                  <Redirect to="/portfolio" />
                </Route>
              </Switch>
            )}
          />
          <Route path="*">
            {isLoggedIn ? (
              <Redirect to="/portfolio" />
            ) : (
              <Redirect to="/login" />
            )}
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
