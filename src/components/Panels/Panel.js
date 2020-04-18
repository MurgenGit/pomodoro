import React from "react";
import "./Panel.css";

const Panel = () => {
  return (
    <div className="panel-container">
      <div className="panel">
        <h5>Panel Shortcuts</h5>
        <ul className="disc">
          <li>
            <strong>SPACE</strong>&nbsp;&nbsp;Start or stop the timer
          </li>
          <li>
            <strong>ALT + P</strong>&nbsp;&nbsp;Pomodoro
          </li>
          <li>
            <strong>ALT + S</strong>&nbsp;&nbsp;Short Break
          </li>
          <li>
            <strong>ALT + L</strong>&nbsp;&nbsp;Long Break
          </li>
          <li>
            <strong>ALT + R</strong>&nbsp;&nbsp;Reset Timer
          </li>
        </ul>
      </div>
      <div className="panel">
        <h5>Notifications</h5>
        <p className="subheader">
          You can change the audio tone and volume via Settings
        </p>
        <p className="subheader">
          Desktop Notifications are currently supported in Chrome, Firefox and
          Safari
        </p>
        <button className="panel-button">Enable Desktop Alerts</button>
      </div>
      <div className="panel">
        <h5>Settings</h5>
        <p className="subheader">
          You can set custom times, audio tone and volume via Settings.
        </p>
      </div>
    </div>
  );
};

export default Panel;
