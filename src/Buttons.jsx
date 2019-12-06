import React, { useState } from "react";
import "./App.css";

const Buttons = () => {
  return (
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
  );
};

export default Buttons;
