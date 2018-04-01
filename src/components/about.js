import React, { Component } from "react";
import "./about.css";
import SplashHeader from "./splashHeader.js"

class About extends Component {
  render(){
    return(
      <div id="about">
        <SplashHeader splash_style="top"/>
      </div>
    );
  }
}

export default About;
