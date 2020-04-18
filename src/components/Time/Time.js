import React, { useState, useEffect, useContext, useCallback } from "react";

import "./Time.css";
import { TimerContext } from "../../bindings/TimerContext";
import { useHotkeys } from "react-hotkeys-hook";
//import audioOne from "../../media/audio_1.mp3";

const Time = () => {
  const [state, dispatch] = useContext(TimerContext);
  const [timeToWork, setTimeToWork] = useState(state.pomodoro);
  const [isRunnig, setIsRunning] = useState(false);
  const [currentTimer, setCurrentTimer] = useState(null);
  const [arrayStorage, setArrayStorage] = useState([]);
  const [obj, setObj] = useState({
    session: "",
    startTime: null,
    endTime: null,
  });
  const seconds =
    timeToWork % 60 >= 10 ? timeToWork % 60 : "0" + (timeToWork % 60);
  const timeToShow = `${Math.floor(timeToWork / 60)}:${seconds}`;

  if (arrayStorage.length === 0 && localStorage.getItem("timerLog")) {
    setArrayStorage(JSON.parse(localStorage.getItem));
  }

  console.log(arrayStorage);
  useHotkeys("alt+p", () => pomodoro());
  useHotkeys("alt+l", () => longBreak());
  useHotkeys("alt+s", () => shortBreak());
  useHotkeys("alt+r", () => resetTimer());
  useHotkeys("space", () => (isRunnig ? stopTimer() : runTimer()));
  //const audio = new Audio(audioOne);
  const runTimer = () => {
    if (currentTimer === null) {
      return pomodoro();
    }
    setIsRunning(true);
  };
  const stopTimer = () => {
    setIsRunning(false);
  };
  const resetTimer = () => {
    setTimeToWork(state.pomodoro);
    setIsRunning(false);
  };
  const pomodoro = useCallback(() => {
    setCurrentTimer("pomodoro");
    setTimeToWork(state.pomodoro);
    setIsRunning(true);
    setObj({ ...obj, startTime: new Date(), session: "pomodoro" });
  }, [obj, state.pomodoro]);
  const shortBreak = useCallback(() => {
    //e.preventDefault();
    setTimeToWork(state.shortBreak);
    setCurrentTimer("shortBreak");
    setIsRunning(true);
  }, [state.shortBreak]);
  const longBreak = useCallback(() => {
    setTimeToWork(state.longBreak);
    setCurrentTimer("longBreak");
    setIsRunning(true);
  }, [setTimeToWork, state.longBreak]);

  useEffect(() => {
    // if (timeToWork === 0) {
    //   setObj({ ...obj, endTime: new Date() });
    //   arrayStorage.push(obj);
    //   localStorage.setItem("timerLog", JSON.stringify(arrayStorage));
    //   console.log(localStorage.getItem("timerLog"));
    //   //audio.play();
    // }
    if (currentTimer === "pomodoro" && timeToWork === 0) {
      dispatch({ type: "COMPLETED_SESSION" });
      state.pomodorosToLongBreak === 1 ? longBreak() : shortBreak();
    }
    if (currentTimer === "shortBreak" && timeToWork === 0) {
      pomodoro();
    }
    if (currentTimer === "longBreak" && timeToWork === 0) {
      dispatch({ type: "RESET_TIME_TO_LONGBREAK" });
      pomodoro();
    }
  }, [
    arrayStorage,
    currentTimer,
    dispatch,
    obj,
    longBreak,
    shortBreak,
    pomodoro,
    timeToWork,
    state.pomodorosToLongBreak,
  ]);
  useEffect(() => {
    if (!isRunnig) {
      return;
    }

    let timer = setTimeout(() => {
      setTimeToWork(timeToWork - 1);
    }, 1000);
    document.title = "(" + timeToShow + ") PomodoroTimer";
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
      <div className="main-timer">{timeToShow}</div>
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
