import React, { useState } from "react";
import { Avatar } from "@material-ui/core";
import Typical from "react-typical";
import Header2 from "../facbook-app/Header2";
import "./Portfolio.css";
import Cards from "./Cards";

export default function Portfolio() {
  return (
    <div class="page">
      <div class="header">
        <Header2 />
      </div>

      <div className="content__middle">
        <Avatar
          className="avatar__details"
          style={{ height: "150px", width: "150px" }}
          src={
            "https://i.pinimg.com/originals/1e/0e/8e/1e0e8eb4ee2d82681adaa4c61909ab4c.jpg"
          }
        />
        <h2>
          Hi, I'm Vaibav. I am a ...{" "}
          <Typical
            loop={2}
            wrapper="b"
            steps={["developer", 1000, "designer", 1000]}
          />
        </h2>
      </div>
      <Cards />
    </div>
  );
}
