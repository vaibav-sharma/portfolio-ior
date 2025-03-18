import React, { useState } from "react";
import Story from "../facbook-app/Story2";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

function Cards() {
  // const handleToggle = (e) => {
  //   e.preventDefault();
  // };

  return (
    <div className="cards">
      <div className="enter__deets">
        <Link to="/portfolio/facebook">
          <Fade left>
            <Story
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsVh_Cu55igPeR-ixQUV2VzvyWuZyYQhO3kziHt-251_FrrxHWvsDNLMa46IlpohY2FGc&usqp=CAU"
              profileSrc="https://images.pexels.com/photos/1845534/pexels-photo-1845534.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              title="Facebook"
            />
          </Fade>
        </Link>
        {/* <Story
          image="https://tinder.com/static/tinder.png"
          profileSrc="https://images.pexels.com/photos/1845534/pexels-photo-1845534.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          title="Tinder"
        /> */}
        <Link to="/portfolio/amazon">
          <Story
            image="https://i0.wp.com/www.innermedia.co.uk/wp-content/uploads/2019/01/shutterstock_1184512540-520x520.jpg"
            profileSrc="https://i.pinimg.com/originals/1e/0e/8e/1e0e8eb4ee2d82681adaa4c61909ab4c.jpg"
            title="Amazon"
          />
        </Link>
        <Fade bottom>
          <Link to="/portfolio/netflix">
            <Story
              image="https://brandlogos.net/wp-content/uploads/2020/03/Netflix-logo-Symbol-512x512.png"
              profileSrc="https://i.pinimg.com/originals/1e/0e/8e/1e0e8eb4ee2d82681adaa4c61909ab4c.jpg"
              title="Netflix"
            />
          </Link>
        </Fade>
        <Fade right>
          <Story
            image="https://media.wired.com/photos/5926ffe47034dc5f91bed4e8/master/pass/google-logo.jpg"
            profileSrc="https://api.time.com/wp-content/uploads/2015/02/180490609.jpg"
            title="Google"
          />
        </Fade>
        <Link to="/portfolio/chat">
          <Fade right>
            <Story
              image="https://media.wired.com/photos/5926ffe47034dc5f91bed4e8/master/pass/google-logo.jpg"
              profileSrc="https://api.time.com/wp-content/uploads/2015/02/180490609.jpg"
              title="ChatBot"
            />
          </Fade>
        </Link>
        <Link to="/portfolio/extras">
          <Fade right>
            <Story
              image="https://media.wired.com/photos/5926ffe47034dc5f91bed4e8/master/pass/google-logo.jpg"
              profileSrc="https://api.time.com/wp-content/uploads/2015/02/180490609.jpg"
              title="Extras"
            />
          </Fade>
        </Link>
      </div>
    </div>
  );
}

export default Cards;
