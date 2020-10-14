import React, { useState, Fragment } from "react";
import "./UserGuide.scss";

export const UserGuide = () => {
  const [openOrClose, setOpenOrClose] = useState(() => false);
  const toggle = () => setOpenOrClose(!openOrClose);
  return (
    <Fragment>
    <button className="btn-dark" onClick={toggle}>
        User Guide
      </button>
    <div className={`ocml-amp--userguide ${openOrClose === false ? "closeModal" : "openModal"}`}>  
      <div className="modal">
        <div className="modal--header">
          <h1>User Guide</h1> <button className="btn-light" onClick={toggle}>X</button>
        </div>
        <div className="modal--body">
          <ol>
            <li>Open website in Chrome Web Browser</li>
            <li>Select ok for Chrome to use audio input</li>
            <li>
              Adjust Bass, Mid, and Treble to zero (0)
              <ul>
                <li>Default: -100</li>
              </ul>
            </li>
            <li>Adjust Volume. Slowly
            <ul>
                <li>Default = 0</li>
              </ul>
            </li>
          </ol>
        </div>
      </div>
    </div>
    </Fragment>
  );
};
