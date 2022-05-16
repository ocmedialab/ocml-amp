import React, { FC, MutableRefObject } from 'react';
import { CheckBoxWrap } from './CheckBox.styles';
import { Title } from '../..//share/Knob/Knob.styles';

interface CheckBoxProps {
  overDriveEl: MutableRefObject<HTMLInputElement | null>;
  checked: boolean;
  onClick: () => void;
}

const CheckBox: FC<CheckBoxProps> = ({ onClick, overDriveEl, checked }) => {
  return (
    <CheckBoxWrap>
      <Title>Over Drive</Title>
      <input
        ref={overDriveEl}
        className="checkbox"
        type="checkbox"
        readOnly
        checked={checked}
      />
      <span onClick={onClick} className="checkmark" />
    </CheckBoxWrap>
  );
};

export default CheckBox;
