import React from "react";
import "./ModalStyles.css";

const ModalLog = ({ children, show, setShow }) => {
  const storage = JSON.parse(localStorage.getItem("session"));

  return (
    <div>
      {show && (
        <div className="modal-container">
          <div className="modal-body">
            <button onClick={() => setShow(false)}>X</button>
            <h2>Time Log</h2>
            <div>Pomodoro goal tracker:</div>
            <div>{children}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalLog;
