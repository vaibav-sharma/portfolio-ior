import React, {useState} from 'react'
import Typical from "react-typical"
import Header2 from "./Header2"
import "./PortFront.css"
import Reel2 from "./Reel2"
import Fade from 'react-reveal/Fade';
import Portfolio from "./Portfolio"
import Facebook from "./Facebook"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { HashRouter, Link } from "react-router-dom";
import Amazon from "./amazon-app/Amazon"




function PortFront() {

    const [show, setShow]=useState(true)

    return (
        <div className="portFront">
           
       {/* 
        {
            show?<Portfolio /> :<Facebook />
        }
        <div className="click__page" onClick={()=>setShow(!show)}/>
        */}


        <HashRouter basename="/">
        <div className="appAll">
        <Switch>
            <Route path="/amazon">
                <Amazon />
            </Route>
            <Route path="/facebook">
                <Facebook />
            </Route>
            <Route path="/">
                <Portfolio />
            </Route>

            
        </Switch>
        </div>
        </HashRouter>
        </div>
    )
}

export default PortFront
