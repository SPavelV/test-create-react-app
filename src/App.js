import React, { Component } from 'react';
import Home from './containers/Home/Home'
import './App.css';
import {
  HashRouter,
  Route
} from 'react-router-dom'

const styleBg = {
  background: `linear-gradient(149deg,
  rgba(252,252,252,0) 0%,
  rgba(252,252,252,0) 39%,
  rgba(244,245,248,.5) 41%,
  rgba(244,245,248,1) 42%,
  rgba(250,250,252,1) 42%)`
};

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Route exact path="/" component={Home} />

        <div className="page__inner">
          <div className="page__bg">
            <div className="page__bg-1"></div>
            <div className="page__bg-2" style={styleBg}></div>
          </div>

        </div>
      </HashRouter>

    );
  }
}

export default App;
