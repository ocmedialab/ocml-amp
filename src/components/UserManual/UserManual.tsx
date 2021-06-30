import React, { useState, FC } from 'react';
import Btn from '../share/Btn/Btn';
import UserManualModal from './UserManual.styles';

const UserManual: FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const toggle = () => setOpen(() => !open);
  return (
    <>
      <Btn primary handleClick={toggle}>
        User Guide
      </Btn>
      <UserManualModal className={open ? 'open' : ''}>
        <div className="modal">
          <div className="modal--header">
            <h1>User Guide</h1>
            <button type="button" className="btn-light" onClick={toggle}>
              X
            </button>
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
              <li>
                Adjust Volume. Slowly
                <ul>
                  <li>Default = 0</li>
                </ul>
              </li>
            </ol>
          </div>
        </div>
      </UserManualModal>
    </>
  );
};

export default UserManual;
