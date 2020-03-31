import React, { useState, useContext } from "react";
import "./ModalStyles.css";
import { TimerContext } from "../../bindings/TimerContext";

const ModalSettings = ({ showSettings, setShowSettings }) => {
  const [goalTracker, setGoalTracker] = useState(null);
  const [timeToWork, setTimeToWork] = useContext(TimerContext);

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
                  <input />
                </div>
                <div>
                  <label>Short Break</label>
                  <input />
                </div>
                <div>
                  <label>Long Break</label>
                  <input />
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
