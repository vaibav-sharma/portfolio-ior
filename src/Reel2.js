import React, {useState} from "react"
import Story from "./Story2";
import "./Reel2.css";
import Fade from "react-reveal/Fade";
import HeadShake from "react-reveal/HeadShake";
import Facebook from "./Facebook";
import { Route, Link } from "react-router-dom";
import PortFront from "./PortFront";


function Reel2() {

  const [isHovering, setIsHovering] = useState(false);
  const[ show, setShow] = useState(true);

   const handleToggle = (e) => {
    e.preventDefault();

    setIsHovering(!setIsHovering);
    console.log(setIsHovering)

  };
     
      return (
        <div className="reel2">
          {
            setIsHovering &&  
                <div className="enter__deets" onMouseEnter={handleToggle}>
                      <Fade left>  
                        <Story 
                          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsVh_Cu55igPeR-ixQUV2VzvyWuZyYQhO3kziHt-251_FrrxHWvsDNLMa46IlpohY2FGc&usqp=CAU"
                          profileSrc="https://images.pexels.com/photos/1845534/pexels-photo-1845534.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                          title="App"
                          />
                      </Fade>
                  </div>
          }

            { !setIsHovering &&
                <div className="enter__deets" onMouseLeave={handleToggle}>
                    <Story 
                    image="https://tinder.com/static/tinder.png"
                    profileSrc="https://images.pexels.com/photos/1845534/pexels-photo-1845534.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    title="App"
                    />
                </div>
            }
            <Fade top>
              <Story 
              image="https://tinder.com/static/tinder.png"
              profileSrc="https://images.unsplash.com/photo-1558507652-2d9626c4e67a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXRzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
              title="App"
              /> 
            </Fade>
          <Fade bottom>
          <Story 
          image="https://i0.wp.com/www.innermedia.co.uk/wp-content/uploads/2019/01/shutterstock_1184512540-520x520.jpg"
          profileSrc="https://i.pinimg.com/originals/1e/0e/8e/1e0e8eb4ee2d82681adaa4c61909ab4c.jpg"
          title="App"
          />    
          </Fade>


         
            <Fade right>
              <Story 
                image="https://media.wired.com/photos/5926ffe47034dc5f91bed4e8/master/pass/google-logo.jpg"
                profileSrc="https://api.time.com/wp-content/uploads/2015/02/180490609.jpg"
                title="App"
                onClick={()=>setShow(!show)}
                />
            </Fade>
        </div>


      );
    
}

export default Reel2
