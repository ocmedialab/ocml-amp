import { KnobLabel } from '../Knob/Knob.styles';
import { CheckBoxStyled, CheckBoxWrap } from './CheckBox.styles';

type KnobProps = {
  label: string;
  on: boolean;
  onClick: any;
};

const CheckBox = ({ onClick, on, label }: KnobProps) => {
  return (
    <CheckBoxWrap className={on ? 'on' : ''}>
      <CheckBoxStyled onClick={onClick} />
      <KnobLabel role="button" aria-label={label}>
        {label}
      </KnobLabel>
    </CheckBoxWrap>
  );
};

export default CheckBox;
