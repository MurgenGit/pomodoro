import React from "react";
import "./ModalStyles.css";

const ModalLog = ({ children, show, setShow }) => {
  return (
    <div>
      {show && (
        <div className="modal-container">
          This is Modal
          {children}
          <button onClick={() => setShow(false)}>X</button>
        </div>
      )}
    </div>
  );
};

export default ModalLog;
