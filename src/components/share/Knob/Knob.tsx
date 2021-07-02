import React, { FC } from 'react';
// import { Knob as RcKnob, Pointer, Value, Arc } from 'rc-knob';
import { Knob as RcKnob, Pointer, Value, Arc } from 'rc-knob';
import { KnobWrap, Title } from './Knob.styles';

interface KnobProps {
  title: string;
  onChange: (val: number) => void;
}

const Knob: FC<KnobProps> = ({ title, onChange }) => {
  return (
    <KnobWrap>
      <Title>{title}</Title>
      <RcKnob size={100} angleOffset={220} angleRange={280} min={0} max={100} onChange={onChange}>
        <Arc arcWidth={5} color="#000000" radius={47.5} />
        <circle r="40" cx="50" cy="50" />
        <Pointer width={5} color="#000000" radius={40} type="circle" />
        <Value marginBottom={40} />
      </RcKnob>
    </KnobWrap>
  );
};

export default Knob;
