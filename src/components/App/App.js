import React from "react";
import "./App.css";
import Topbar from "../Topbar/Topbar";
import Time from "../Time/Time";
import { TimerProvider } from "../../bindings/TimerContext";

function App() {
  return (
    <TimerProvider>
      <div className="App">
        <Topbar />
        <Time />
      </div>
    </TimerProvider>
  );
}

export default App;
