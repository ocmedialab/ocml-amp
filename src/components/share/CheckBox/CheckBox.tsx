import cn from 'classnames';
import React from 'react';
import { KnobLabel } from '../Knob/Knob.styles';
import { CheckBox, CheckBoxWrap } from './CheckBox.styles';

const CheckBox1 = ({ onClick, on }: any) => {
  const className = cn([{ on }]);
  return (
    <CheckBoxWrap className={className}>
      <CheckBox onClick={onClick} />
      <KnobLabel>Over Drive</KnobLabel>
    </CheckBoxWrap>
  );
};

export default CheckBox1;
