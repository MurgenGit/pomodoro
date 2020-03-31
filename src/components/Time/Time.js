import React, { useState, useEffect, useContext } from "react";

import "./Time.css";
import { TimerContext } from "../../bindings/TimerContext";

const Time = () => {
  const [timeToWork, setTimeToWork] = useContext(TimerContext);
  const [isRunnig, setIsRunning] = useState(false);

  const runTimer = e => {
    e.preventDefault();
    setIsRunning(true);
  };
  const resetTimer = e => {
    e.preventDefault();
    setTimeToWork({
      pomodoro: 30,
      shortBreak: 300,
      longBreak: 600
    });
    setIsRunning(false);
  };
  const stopTimer = e => {
    e.preventDefault();
    setIsRunning(false);
  };

  const pomodoro = e => {
    e.preventDefault();
    setTimeToWork(state => ({
      ...state,
      pomodoro: 1500
    }));
    setIsRunning(true);
  };

  const shortBreak = e => {
    e.preventDefault();
    setTimeToWork(state => ({
      ...state,
      shortBreak: 300
    }));
    setIsRunning(true);
  };
  const longBreak = e => {
    e.preventDefault();
    setTimeToWork(state => ({
      ...state,
      longBreak: 600
    }));
    setIsRunning(true);
  };

  useEffect(() => {
    if (timeToWork.pomodoro === 0 || !timeToWork.isRunnig) {
      return;
    }
    let timer = setTimeout(() => {
      setTimeToWork(timeToWork.pomodoro - 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  });
  return (
    <div className="container">
      <div className="breaks-buttons-container">
        <button className="break-button" onClick={runTimer}>
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
        {Math.floor(timeToWork.pomodoro / 60)}:
        {timeToWork.pomodoro % 60 >= 10
          ? timeToWork.pomodoro % 60
          : "0" + (timeToWork.pomodoro % 60)}
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
