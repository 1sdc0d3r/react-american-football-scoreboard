import React, { useState } from "react";
import "./App.css";

const ScoreBoard = () => {
  const [timeSec, setTimeSec] = useState(0);
  const [timeMin, setTimeMin] = useState(0);
  const [home, setHome] = useState(0);
  const [away, setAway] = useState(0);

  setTimeout(function() {
    if (timeSec < 59) {
      setTimeSec(timeSec + 1);
    } else {
      setTimeMin(timeMin + 1);
      setTimeSec(0);
    }
  }, 1000);

  return (
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
  );
};

export default ScoreBoard;
