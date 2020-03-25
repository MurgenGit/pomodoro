import React, { useState, useEffect } from "react";

import "./Time.css";

const Time = () => {
  const [timeToWork, setTimeToWork] = useState(30);
  const [isRunnig, setIsRunning] = useState(false);
  const runTimer = e => {
    e.preventDefault();
    setIsRunning(true);
  };
  const resetTimer = e => {
    e.preventDefault();
    setTimeToWork(30);
    setIsRunning(false);
  };
  const stopTimer = e => {
    e.preventDefault();
    setIsRunning(false);
  };

  const pomodoro = e => {
    e.preventDefault();
    setTimeToWork(1500);
    setIsRunning(true);
  };

  const shortBreak = e => {
    e.preventDefault();
    setTimeToWork(300);
    setIsRunning(true);
  };
  const longBreak = e => {
    e.preventDefault();
    setTimeToWork(600);
    setIsRunning(true);
  };

  useEffect(() => {
    if (timeToWork === 0 || !isRunnig) {
      return;
    }
    let timer = setTimeout(() => {
      setTimeToWork(timeToWork - 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  });
  return (
    <div className="container">
      <div className="breaks-buttons-container">
        <button className="break-button" onClick={pomodoro}>
          Pomodoro
        </button>
        <button className="break-button" onClick={shortBreak}>
          Short Break
        </button>
        <button className="break-button" onClick={longBreak}>
          Long Break
        </button>
      </div>
      <div className="main-timer">
        {Math.floor(timeToWork / 60)}:
        {timeToWork % 60 >= 10 ? timeToWork % 60 : "0" + (timeToWork % 60)}
      </div>
      <div className="button-container">
        <button className="start-button" onClick={runTimer}>
          Start
        </button>
        <button className="stop-button" onClick={stopTimer}>
          Stop
        </button>
        <button className="reset-button" onClick={resetTimer}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Time;
