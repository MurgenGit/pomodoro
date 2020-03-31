import React from "react";
import "./ModalStyles.css";

const ModalFAQ = ({ showFAQ, setShowFAQ }) => {
  return (
    <div>
      {showFAQ && (
        <div className="modal-container">
          <div className="modal-body">
            <button onClick={() => setShowFAQ(false)}>X</button>
            <p className="modal-paragraph">
              Q. What is Pomodoro Technique?
              <br />
              A. The time management technique created by Francesco Cirillo for
              a more productive way to work and study. For more information,
              click here.
              <br />
              Q. Can you tell me the story without having to visit the website?
              A. Well, it comprises of the following basic steps:
              <ul>
                <li>Decide on the task at hand</li>
                <li>Set the Pomodoro (timer) to 25 minutes</li>
                <li>
                  Work on the task until the timer expires; Record with an X
                </li>
                <li>
                  Take a Short Break (5 minutes) Every four "pomodoros", take a
                </li>
                <li>Long Break (10 minutes)</li>
              </ul>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalFAQ;
