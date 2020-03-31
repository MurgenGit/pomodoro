import React, { useState } from "react";
import "./ModalStyles.css";

const ModalSettings = ({ showSettings, setShowSettings }) => {
  const [goalTracker, setGoalTracker] = useState(null);

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
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalSettings;
