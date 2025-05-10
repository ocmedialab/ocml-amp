import { memo } from 'react';
import useKnob from '../../../hooks/useKnob';
import {
  DialPath,
  DialSvg,
  Knob2Styles,
  KnobActiveLight,
  KnobDial,
  KnobDialGrip,
  KnobLabel,
} from './Knob.styles';

type KnobProps = {
  label: string;
  onChange: (percent: number) => void;
};

const Knob = ({ label, onChange }: KnobProps) => {
  const { knob, handleMouseDown, dashOffset, value } = useKnob(onChange);
  const className = knob.active ? 'active' : '';

  return (
    <Knob2Styles className={className}>
      <KnobActiveLight />
      <KnobDial>
        <KnobDialGrip
          role="slider"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={value}
          aria-label={label}
          $rotation={knob.rotation}
          onMouseDown={handleMouseDown}
        />
        <DialSvg>
          <DialPath $dashOffset={0} d="M20,76 A 40 40 0 1 1 80 76" />
          <DialPath d="M20,76 A 40 40 0 1 1 80 76" $dashOffset={dashOffset} />
        </DialSvg>
      </KnobDial>

      <KnobLabel>{label}</KnobLabel>
    </Knob2Styles>
  );
};

export default memo(Knob);
