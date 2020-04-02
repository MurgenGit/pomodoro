import React, { useState, useReducer } from "react";
import { createContext } from "react";

export const TimerContext = createContext();

const initialState = {
  pomodoro: 1500,
  shortBreak: 300,
  longBreak: 600
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SAVE_SETTINGS":
      return {
        ...state,
        shortBreak: action.payload.shortBreakSetter,
        longBreak: action.payload.longBreakSetter,
        pomodoro: action.payload.pomodoro
      };
    case "RESET_SETTINGS":
      return {
        ...state,
        shortBreak: 300,
        longBreak: 600,
        pomodoro: 1500
      };
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
