import React, { Component } from "react";

class SplashHeader extends Component {
  render(){
    return(
      <div id="splash">
        <header id={ this.props.splash_style }>
          <h1><a id="a-title" href="/">Clark Walker</a></h1>
          <nav className="nav">
            <a href="/about">about me</a>
            <a href="/fun">fun stuff</a>
            <a href="/contact">contact me</a>
            <a href="/portfolio">portfolio</a>
          </nav>
        </header>
      </div>
    )
  }
}

export default SplashHeader;
