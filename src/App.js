import React, { Component } from "react";
import { Router, browserHistory, Route } from "react-router";
import "./App.css";
import Splash from "./components/splash.js"
import About from "./components/about.js"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router history={browserHistory}>
          <Route path="/" component={Splash}/>
          <Route path="/about" component={About}/>
          <Route path="/fun" component={Splash}/>
          <Route path="/contact" component={Splash}/>
          <Route path="/portfolio" component={Splash}/>
        </Router>
      </div>
    );
  }
}

export default App;
