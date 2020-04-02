import React, { useState, useContext } from "react";
import "./ModalStyles.css";
import { TimerContext } from "../../bindings/TimerContext";

const ModalSettings = ({ showSettings, setShowSettings }) => {
  const [goalTracker, setGoalTracker] = useState(null);
  const [shortBreakSetter, setShortBreakSetter] = useState(5);
  const [pomodoro, setPomodoro] = useState(25);
  const [longBreakSetter, setLongBreakSetter] = useState(10);
  const [state, dispatch] = useContext(TimerContext);

  const saveSettings = () => {
    console.log("Saving Settings");
    dispatch({
      type: "SAVE_SETTINGS",
      payload: {
        shortBreakSetter: shortBreakSetter * 60,
        longBreakSetter: longBreakSetter * 60,
        pomodoro: pomodoro * 60
      }
    });
  };

  const resetSettings = () => {
    console.log("reseting settings");
    dispatch({
      type: "RESET_SETTINGS"
    });
  };

  const soundTestSettings = () => {
    console.log("Badumts, how does it sounds?");
  };
  return (
    <div>
      {showSettings && (
        <div className="modal-container">
          <div className="modal-body">
            <button onClick={() => setShowSettings(false)}>X</button>
            <h2>Options</h2>
            <h4>User preferences</h4>
            <div>
              Pomodoro goal for the day
              <input
                value={goalTracker}
                onChange={e => setGoalTracker(e.target.value)}
              />
              <h4>Select Sound</h4>
              {/* Add Sounds */}
              <h4>Select Volume</h4>
              {/* Add Volume */}
              <h4>
                Set Custome Times <span>(in minutes)</span>
              </h4>
              <div className="custom-times">
                <div>
                  <label>Pomodoro</label>
                  <input
                    type="text"
                    value={pomodoro}
                    onChange={e => setPomodoro(e.target.value)}
                  />
                </div>
                <div>
                  <label>Short Break</label>
                  <input
                    value={shortBreakSetter}
                    onChange={e => setShortBreakSetter(e.target.value)}
                  />
                </div>
                <div>
                  <label>Long Break</label>
                  <input
                    value={longBreakSetter}
                    onChange={e => setLongBreakSetter(e.target.value)}
                  />
                </div>
              </div>
              <button onClick={saveSettings}>Save</button>
              <button onClick={resetSettings}>Reset</button>
              <button onClick={soundTestSettings}>Sound Test</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalSettings;
