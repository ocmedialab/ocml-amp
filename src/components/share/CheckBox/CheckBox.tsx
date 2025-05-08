import { KnobLabel } from '../Knob/Knob.styles';
import { CheckBox, CheckBoxWrap } from './CheckBox.styles';

const CheckBox1 = ({ onClick, on }: any) => {
  return (
    <CheckBoxWrap className={on ? 'on' : undefined}>
      <CheckBox onClick={onClick} />
      <KnobLabel>Over Drive</KnobLabel>
    </CheckBoxWrap>
  );
};

export default CheckBox1;
