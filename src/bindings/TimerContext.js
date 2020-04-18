import React, { useReducer } from "react";
import { createContext } from "react";

export const TimerContext = createContext();

const initialState = {
  pomodoro: 1500,
  shortBreak: 300,
  longBreak: 600,
  goal: 8,
  completedPomodoros: 0,
  pomodorosToLongBreak: 4,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SAVE_SETTINGS":
      return {
        ...state,
        shortBreak: action.payload.shortBreakSetter,
        longBreak: action.payload.longBreakSetter,
        pomodoro: action.payload.pomodoro,
        goal: action.payload.goalTracker,
      };
    case "RESET_SETTINGS":
      return {
        ...state,
        shortBreak: 300,
        longBreak: 600,
        pomodoro: 1500,
      };
    case "COMPLETED_SESSION":
      return {
        ...state,
        completedPomodoros: state.completedPomodoros + 1,
        pomodorosToLongBreak: state.pomodorosToLongBreak - 1,
      };
    case "RESET_TIME_TO_LONGBREAK":
      return { ...state, pomodorosToLongBreak: 4 };
    default:
      return state;
  }
};
export const TimerProvider = ({ children }) => {
  const value = useReducer(reducer, initialState);
  return (
    <TimerContext.Provider value={value}>{children}</TimerContext.Provider>
  );
};
