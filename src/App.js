import React, { Component } from 'react';
import logo from './cherry-picks-logo.svg';
import cherrymark from './cherry-mark.svg';
import './App.css';
import Infogram from './Infogram';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="intro">

          <div className="graphs">

            <div className="graph-1">
              <div className="c100 p52 small">
                <span>OVER</span><span className="percent">50%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
              <span className="stat">of moviegoers<br/>are female</span>
            </div>

            <div className="graph-2">
              <div className="revenue">
                <div className="top">
                  <span className="symbol">$</span><span className="number">6</span>
                  <span className="name">billion</span>
                </div>

              </div>
              <span className="stat">in movie tickets<br/>per year</span>
              <span className="stat2">(in the U.S. and Canada alone)</span>
            </div>

          </div>


          <br/>
          <br/>
          <div className="block">
            It’s time for critical content and the media landscape to accurately reflect the people filling seats at the cinema.
          </div>
          <img src={cherrymark} className="cherry-mark" alt="cherries" />
          <div className="text">
            <br/>
            Here at CherryPicks we believe the people who review films need to be as diverse as the people who watch them. That’s why we aggregate reviews and write original stories exclusively from female and non-binary writers during a time when most film critics are overwhelmingly male.
            <br/>
            <br/>
            We’ve converted stars, letter grades, and scores into our 4 prong cherry scoring system. Unscored reviews are carefully assessed by our editorial staff. The unweighted average of all of the individual scores gives us the final cherry score.
            <br/>
            <br/>
            Here's a bit more about how our rating system works:
          </div>
        </div>
      </div>
    );
  }
}

export default App;
