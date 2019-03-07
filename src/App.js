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

          <div class="graphs">

            <div class="graph-1">
              <div class="c100 p52 small">
                <span>OVER</span><span class="percent">50%</span>
                <div class="slice">
                  <div class="bar"></div>
                  <div class="fill"></div>
                </div>
              </div>
              <span class="stat">of moviegoers<br/>are female</span>
            </div>

            <div class="graph-2">
              <div class="revenue">
                <div class="top">
                  <span class="symbol">$</span><span class="number">6</span>
                  <span class="name">billion</span>
                </div>

              </div>
              <span class="stat">in movie tickets<br/>per year</span>
              <span class="stat2">(in the U.S. and Canada alone)</span>
            </div>

          </div>


          <br/>
          <br/>
          <div class="block">
            It’s time for critical content and the media landscape to accurately reflect the people filling seats at the cinema.
          </div>
          <img src={cherrymark} className="cherry-mark" alt="cherries" />
          <div class="text">
            <br/>
            The critical landscape is still heavily skewed toward white males. Women need a place where media and entertainment is viewed through a female lens.
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
