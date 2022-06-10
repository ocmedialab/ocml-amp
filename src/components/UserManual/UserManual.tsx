import React, { useState, FC } from 'react';
import Btn from '../share/Btn/Btn';
import { UserManualStyles, UserManualWrapStyles } from './UserManual.styles';

export enum UserManualPos {
  topLeft = 'tl',
  topMiddle = 'tm',
  topRight = 'tr',
  bottomLeft = 'bl',
  bottomMiddle = 'bm',
  bottomRight = 'br',
}

export interface UserManualProps {
  pos: UserManualPos;
}

const UserManual: FC<UserManualProps> = ({ pos }) => {
  console.log('pos', pos);
  const [open, setOpen] = useState<boolean>(false);
  const toggle = () => setOpen(() => !open);
  return (
    <UserManualWrapStyles pos={pos}>
      <Btn primary handleClick={toggle}>
        User Guide
      </Btn>
      <UserManualStyles className={open ? 'open' : ''}>
        <div className="modal">
          <div className="modal--header">
            <h1>User Guide</h1>
            <Btn handleClick={toggle}>X</Btn>
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
      </UserManualStyles>
    </UserManualWrapStyles>
  );
};

export default UserManual;
