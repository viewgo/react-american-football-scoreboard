//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeScore, setHScore] = useState(0);
  const [awayScore, setAScore] = useState(0);

  const [minutes, setMinutes] = useState(15);
  const [secondsTens, setSecondsTens] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const [quarter, setQuarter] = useState(1);

  const [isGameOver, setIsGameOver] = useState(false);
  const final = "F I N A L";

  setTimeout(function() {
    if (minutes > 0 || secondsTens > 0 || seconds > 0) {
      if (seconds === 0 && secondsTens === 0) {
        setSeconds(9);
        setSecondsTens(5);
        setMinutes(minutes - 1);
      } else if (seconds === 0 && secondsTens !== 0) {
        setSeconds(9);
        setSecondsTens(secondsTens - 1);
      } else {
        setSeconds(seconds - 1);
      }
    } else {
      if (quarter < 4) {
        setMinutes(15);
        setSeconds(0);
        setSecondsTens(0);
        setQuarter(quarter + 1);
      }
      else{
        setIsGameOver(true);
      }
    }
  }, 1);

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">
            {isGameOver === true ? final : `${minutes} : ${secondsTens}${seconds}`}
          </div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow _quarter={quarter} />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button onClick={() => setHScore(homeScore + 7)} className="homeButtons__touchdown">
            Home Touchdown
          </button>
          <button onClick={() => setHScore(homeScore + 3)} className="homeButtons__fieldGoal">
            Home Field Goal
          </button>
        </div>
        <div className="awayButtons">
          <button onClick={() => setAScore(awayScore + 7)} className="awayButtons__touchdown">
            Away Touchdown
          </button>
          <button onClick={() => setAScore(awayScore + 3)} className="awayButtons__fieldGoal">
            Away Field Goal
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;
