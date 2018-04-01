import React, { Component } from "react";
import "./splash.css";
import SplashHeader from "./splashHeader.js"

class Splash extends Component {
  render(){
    return(
      <div id="splash">
        <SplashHeader splash_style="center"/>
      </div>
    );
  }
}

export default Splash;
