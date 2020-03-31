import React, { useState } from "react";
import "./Topbar.css";
import ModalLog from "../Modal/ModalLog";
import ModalFAQ from "../Modal/ModalFAQ";
import ModalSettings from "../Modal/ModalSettings";

const Topbar = () => {
  const [show, setShow] = useState(false);
  const [showFAQ, setShowFAQ] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

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
        <ModalFAQ showFAQ={showFAQ} setShowFAQ={setShowFAQ} />
        <button className="header-button" onClick={() => setShowFAQ(true)}>
          FAQ
        </button>
        <button className="header-button" onClick={() => setShowSettings(true)}>
          Settings
        </button>
        <ModalSettings
          showSettings={showSettings}
          setShowSettings={setShowSettings}
        />
        <button className="header-button right-button">Tweet about us</button>
      </div>
    </div>
  );
};

export default Topbar;
