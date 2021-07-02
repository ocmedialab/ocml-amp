import React, { MutableRefObject, FC, useRef, useState } from 'react';
// https://javascript.plainenglish.io/write-react-functional-components-and-hooks-with-typescript-cd1539e2bc2a
import Knob from '../share/Knob/Knob';
import CheckBox from '../share/CheckBox/CheckBox';
import { useViz, useDistortion } from '../../hooks';
import EqWrap from './Eq.styles';

const timeConstant = 0;

interface EqProps {
  visualizer: MutableRefObject<HTMLCanvasElement | null>;
}

const Eq: FC<EqProps> = ({ visualizer }) => {
  const overDriveEl = useRef<null | HTMLInputElement>(null);
  const [context] = useState(new AudioContext());
  const [gainNode] = useState(new GainNode(context, { gain: 0 }));
  const [distortion] = useState(() => context.createWaveShaper());
  const [overDrive, setOverDrive] = useState(() => false);
  const [analyserNode] = useState(() => new AnalyserNode(context, { fftSize: 256 }));
  const [bufferLength] = useState(() => analyserNode.frequencyBinCount);
  const [curve, noCurve] = useDistortion();
  const [bassEQ] = useState(
    () =>
      new BiquadFilterNode(context, {
        type: 'lowshelf',
        frequency: 500,
        gain: 0,
      })
  );
  const [midEQ] = useState(
    () =>
      new BiquadFilterNode(context, {
        type: 'peaking',
        Q: Math.SQRT1_2,
        frequency: 1500,
        gain: 0,
      })
  );
  const [trebleEQ] = useState(
    () =>
      new BiquadFilterNode(context, {
        type: 'highshelf',
        frequency: 3000,
        gain: 0,
      })
  );

  const overDriveClick = () => {
    setOverDrive(() => !overDrive);
    let overDriveOn;
    if (overDriveEl.current !== null) {
      overDriveOn = !overDriveEl.current.checked;

      if (overDriveOn === true) {
        distortion.oversample = '4x';
        distortion.curve = curve;
      } else {
        distortion.oversample = 'none';
        distortion.curve = noCurve;
      }
    }
  };
  const [assignContext] = useViz(
    context,
    distortion,
    bassEQ,
    midEQ,
    trebleEQ,
    gainNode,
    analyserNode,
    visualizer,
    bufferLength
  );

  const handleVolume = (vol: number) => {
    gainNode.gain.setTargetAtTime(vol / 100, context.currentTime, timeConstant);
    assignContext();
  };

  const handleBass = (bass: number) => {
    bassEQ.gain.setTargetAtTime(bass * 0.1, context.currentTime, timeConstant);
    assignContext();
  };

  const handleMid = (mid: number) => {
    midEQ.gain.setTargetAtTime(mid * 0.1, context.currentTime, timeConstant);
    assignContext();
  };

  const handleTreble = (treble: number) => {
    trebleEQ.gain.setTargetAtTime(treble * 0.1, context.currentTime, timeConstant);
    assignContext();
  };

  return (
    <EqWrap>
      <Knob title="Volume" onChange={handleVolume} />
      <Knob title="Bass" onChange={handleBass} />
      <Knob title="Mid" onChange={handleMid} />
      <Knob title="Treble" onChange={handleTreble} />
      <CheckBox ref={overDriveEl} onClick={overDriveClick} checked={overDrive} />
    </EqWrap>
  );
};

export default Eq;
