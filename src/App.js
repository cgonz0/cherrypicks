import React, { Component } from 'react';
import logo from './cherry-picks-logo.svg';
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
          <div class="c100 p52 small">
            <span>OVER</span><span class="percent">50%</span>
            <div class="slice">
              <div class="bar"></div>
              <div class="fill"></div>
            </div>
          </div>
          <span class="stat">of moviegoers<br/>are female</span>
          <br/>
          <br/>
          The critical landscape is still heavily skewed toward white males. Women need a place to go to see how media and entertainment looks through a female lens.
          <br/>
          <br/>
          We’ve converted stars, letter grades, and scores into our 4 prong cherry scoring system. Unscored reviews are carefully assessed by our editorial staff. The unweighted average of all of the individual scores gives us the final cherry score.
          <br/>
          <br/>
          Here's a bit more about how our rating system works:
        </div>
      </div>
    );
  }
}

export default App;
