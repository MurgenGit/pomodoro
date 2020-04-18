import React, { useState, useContext } from "react";
import "./ModalStyles.css";
import { TimerContext } from "../../bindings/TimerContext";

const ModalSettings = ({ showSettings, setShowSettings }) => {
  const [state, dispatch] = useContext(TimerContext);
  const [goalTracker, setGoalTracker] = useState(state.goal);
  const [shortBreakSetter, setShortBreakSetter] = useState(5);
  const [pomodoro, setPomodoro] = useState(25);
  const [longBreakSetter, setLongBreakSetter] = useState(10);

  const saveSettings = () => {
    console.log("Saving Settings");
    dispatch({
      type: "SAVE_SETTINGS",
      payload: {
        shortBreakSetter: shortBreakSetter * 60,
        longBreakSetter: longBreakSetter * 60,
        pomodoro: pomodoro * 60,
        goalTracker: goalTracker,
      },
    });
    setShowSettings(false);
  };

  const resetSettings = () => {
    console.log("reseting settings");
    dispatch({
      type: "RESET_SETTINGS",
    });
    setShowSettings(false);
  };

  const soundTestSettings = () => {
    console.log("Badumts, how does it sounds?");
  };
  return (
    <div>
      {showSettings && (
        <div className="modal-container">
          <div className="modal-body">
            <button
              className="close-button"
              onClick={() => setShowSettings(false)}
            >
              <i className="fas fa-times" />
            </button>
            <h2>Options</h2>
            <h4>User preferences</h4>
            <div>
              Pomodoro goal for the day
              <input
                type="nubmer"
                value={goalTracker}
                onChange={(e) => setGoalTracker(e.target.value)}
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
                    type="number"
                    value={pomodoro}
                    onChange={(e) => setPomodoro(e.target.value)}
                  />
                </div>
                <div>
                  <label>Short Break</label>
                  <input
                    type="number"
                    value={shortBreakSetter}
                    onChange={(e) => setShortBreakSetter(e.target.value)}
                  />
                </div>
                <div>
                  <label>Long Break</label>
                  <input
                    type="number"
                    value={longBreakSetter}
                    onChange={(e) => setLongBreakSetter(e.target.value)}
                  />
                </div>
              </div>
              <button onClick={saveSettings} className="modal-button">
                Save
              </button>
              <button onClick={resetSettings} className="modal-button">
                Reset
              </button>
              <button onClick={soundTestSettings} className="modal-button">
                Sound Test
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalSettings;
