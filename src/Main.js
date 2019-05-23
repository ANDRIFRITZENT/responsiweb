import React, { Component } from "react";
import {Route, NavLink, HashRouter } from "react-router-dom";
import Weather from "./Weather";

class Main extends Component {
    render() {
      return (
        <HashRouter>
          <div>
            <div style={{textAlign:"center"}}>
            <h1 className="title">Prakiraan cuaca Yogyakarta</h1>
            </div>
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