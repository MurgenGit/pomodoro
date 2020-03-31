import React, { useState } from "react";
import { createContext } from "react";

export const TimerContext = createContext([{}, () => {}]);

export const TimerProvider = ({ children }) => {
  const [time, setTime] = useState({
    pomodoro: 30,
    shortBreak: 300,
    longBreak: 600,
    isRunnig: false
  });

  return (
    <TimerContext.Provider value={[time, setTime]}>
      {children}
    </TimerContext.Provider>
  );
};
