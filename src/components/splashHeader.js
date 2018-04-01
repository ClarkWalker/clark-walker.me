import React, { Component } from "react";
import { Link } from 'react-router';

class SplashHeader extends Component {
  render(){
    return(
      <div id="splash">
        <header className={ this.props.splash_style }>
          <h1><Link className="Link" id="Link-title" to="/">Clark Walker</Link></h1>
          <nav className="nav">
            <Link className="Link" to="/bio">bio</Link>
            {/* <Link to="/fun">fun stuff</Link> */}
            <Link className="Link" to="/blog">blog</Link>
            <Link className="Link" to="/contact">contact</Link>
            <Link className="Link" to="/portfolio">portfolio</Link>
          </nav>
        </header>
      </div>
    )
  }
}

export default SplashHeader;
