import React, { useContext } from "react";
import "./ModalStyles.css";
import { TimerContext } from "../../bindings/TimerContext";

const ModalLog = ({ children, show, setShow }) => {
  const [state] = useContext(TimerContext);
  const goal = state.goal;
  const completedPomodoros = state.completedPomodoros;
  let unCompletedTomatos = goal - completedPomodoros;
  return (
    <div>
      {show && (
        <div className="modal-container">
          <div className="modal-body">
            <button onClick={() => setShow(false)}>X</button>
            <h2>Time Log</h2>
            <div className="pomodoro-goal">
              <div className="margin-right">Pomodoro goal tracker:</div>
              {[...Array(completedPomodoros)].map((e, i) => (
                <span className="completedPomodoros" key={i}></span>
              ))}
              {[...Array(unCompletedTomatos)].map((e, i) => (
                <span className="unCompletedPomodoros" key={i}></span>
              ))}
            </div>
            <div>{children}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalLog;
