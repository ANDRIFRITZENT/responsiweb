import React, { Component } from "react";
import {Route, NavLink, HashRouter } from "react-router-dom";
import Weather from "./Weather";

class Main extends Component {
    render() {
      return (
        <HashRouter>
          <div>
            <h1 className="title">Weather API Yogyakarta</h1>
            <ul className="header">
              <li><NavLink exact to="/">Weather</NavLink></li>
   
            </ul>
            <div className="content">
              <Route exact path="/" component={Weather}/>
            </div>
          </div>
          </HashRouter>
      );
    }
  }
  export default Main;