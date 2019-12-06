//* STEP 1 - Import the useState hook.
import React, { useState } from "react";
import { render } from "react-dom";
import "./App.css";
import BottomRow from "./BottomRow";
// import ScoreBoard from "./ScoreBoard";
// import Buttons from "./Buttons";

function App() {
  //* STEP 2 - Establish your application's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [timeSec, setTimeSec] = useState(0);
  const [timeMin, setTimeMin] = useState(0);
  const [home, setHome] = useState(0);
  const [away, setAway] = useState(0);

  setTimeout(function() {
    if (timeSec < 59) {
      setTimeSec(timeSec + 1);
    } else {
      setTimeSec(0);
      setTimeMin(timeMin + 1);
    }
  }, 1000);

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>
            <div className="home__score">{home}</div>
          </div>

          <div className="timer">
            {timeMin}:{timeSec}
          </div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{away}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button
            className="homeButtons__touchdown"
            onClick={e => setHome(home + 7)}
          >
            Home Touchdown
          </button>
          <button
            className="homeButtons__fieldGoal"
            onClick={e => setHome(home + 3)}
          >
            Home Field Goal
          </button>
        </div>
        <div className="awayButtons">
          <button
            className="awayButtons__touchdown"
            onClick={e => setAway(away + 7)}
          >
            Away Touchdown
          </button>
          <button
            className="awayButtons__fieldGoal"
            onClick={e => setAway(away + 3)}
          >
            Away Field Goal
          </button>
        </div>
      </section>
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);

export default App;
