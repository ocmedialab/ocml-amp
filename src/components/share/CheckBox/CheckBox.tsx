import React, { FC, MutableRefObject } from 'react';
import { CheckBoxWrap, Title } from './CheckBox.styles';

interface CheckBoxProps {
  overDriveEl: MutableRefObject<HTMLInputElement | null>;
  checked: boolean;
  onClick: () => void;
}

const CheckBox: FC<CheckBoxProps> = ({ onClick, overDriveEl, checked }) => {
  return (
    <CheckBoxWrap>
      <Title>Over Drive</Title>
      <input ref={overDriveEl} className="checkbox" type="checkbox" readOnly checked={checked} />
      <span onClick={onClick} className="checkmark" />
    </CheckBoxWrap>
  );
};

export default CheckBox;
