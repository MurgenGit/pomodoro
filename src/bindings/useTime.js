import { useState, useEffect } from "react";
import { TimerContext } from "./TimerContext";

export default () => {
  const [pomodoro, setPomodoro] = useState(30);
  const [shortBreak, setShortBreak] = useState(300);
  const [longBreak, setLongBreak] = useState(600);
  const [isRunning, setIsRunning] = useState(false);

  // here had to be logic to manage time. IFU
  const doTime = () => {};
  useEffect(() => {
    if (!isRunning) {
      return;
    }
  });
  return [{ pomodoro, shortBreak, longBreak, isRunning }, doTime];
};
