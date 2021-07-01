import React, {useState} from 'react'
import Typical from "react-typical"
import Header2 from "./Header2"
import "./PortFront.css"
import Reel2 from "./Reel2"
import Fade from 'react-reveal/Fade';
import { Route, Link } from "react-router-dom"
import Portfolio from "./Portfolio"
import Facebook from "./Facebook"



function PortFront() {

    const [show, setShow]=useState(true)

    return (
        <div className="portFront">
           
        
        {
            show?<Portfolio /> :<Facebook />
        }
        <div className="click__page" onClick={()=>setShow(!show)}/>
          </div>
    )
}

export default PortFront
