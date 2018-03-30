import React, { Component } from "react";
import { Router, browserHistory, Route } from "react-router";
import "./App.css";
import Splash from "./components/splash.js"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router history={browserHistory}>
          <Route path="/" component={Splash}/>
        </Router>
      </div>
    );
  }
}

export default App;
