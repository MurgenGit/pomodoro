import React, { useState } from "react";
import "./Topbar.css";
import ModalLog from "../Modal/ModalLog";

const Topbar = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="header-container">
      <h2 className="header-title">Tomato Timer</h2>

      <div className="button-container">
        <button
          className="header-button left-button"
          onClick={() => setShow(true)}
        >
          Log
        </button>
        <ModalLog show={show} setShow={setShow}>
          text inside modal
        </ModalLog>
        <button className="header-button">FAQ</button>
        <button className="header-button">Settings</button>
        <button className="header-button right-button">Tweet about us</button>
      </div>
    </div>
  );
};

export default Topbar;
