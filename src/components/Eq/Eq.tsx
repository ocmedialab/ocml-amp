import React, { useCallback, useState } from 'react';
import useAudio from '../../hooks/useAudio';
import useDistortion from '../../hooks/useDistortion';
import CheckBox from '../share/CheckBox/CheckBox';
import Knob from '../share/Knob/Knob';
import { EqStyled, KnobsWrapStyled } from './Eq.styles';

const Eq = () => {
  const [context] = useState(new AudioContext());
  const [gainNode] = useState(new GainNode(context, { gain: 0 }));
  const [distortion, setDistortion] = useState<WaveShaperNode>(() =>
    context.createWaveShaper()
  );
  const [curve, noCurve] = useDistortion(); // Get the distortion curves from the custom hook
  const [overDrive, setOverDrive] = useState(false);
  const [analyserNode] = useState(new AnalyserNode(context, { fftSize: 256 }));
  const [bufferLength] = useState(analyserNode.frequencyBinCount);
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

  const [assignContext] = useAudio(
    context,
    distortion,
    bassEQ,
    midEQ,
    trebleEQ,
    gainNode,
    analyserNode,
    bufferLength,
    overDrive
  );

  const overDriveClick = useCallback(() => {
    setOverDrive(od => {
      const distortionOn = !od;

      setDistortion(prevDistortion => {
        // Create a new WaveShaperNode only if overDrive state changes
        const newDistortion = prevDistortion ?? context.createWaveShaper();
        newDistortion.oversample = distortionOn ? '4x' : 'none';
        newDistortion.curve = distortionOn ? curve : noCurve;
        return newDistortion;
      });
      assignContext(); // Reconnect everything after updating distortion
      return distortionOn;
    });
  }, [curve, noCurve, context, assignContext]);

  const handleVolume = (vol: number) => {
    gainNode.gain.setTargetAtTime(vol / 100, context.currentTime, 0);
    assignContext();
  };

  const handleBass = (bass: number) => {
    bassEQ.gain.setTargetAtTime(bass / 100, context.currentTime, 0);
    assignContext();
  };

  const handleMid = (mid: number) => {
    midEQ.gain.setTargetAtTime(mid / 100, context.currentTime, 0);
    assignContext();
  };

  const handleTreble = (treble: number) => {
    trebleEQ.gain.setTargetAtTime(treble / 100, context.currentTime, 0);
    assignContext();
  };

  return (
    <EqStyled>
      <KnobsWrapStyled>
        <Knob label="Volume" onChange={handleVolume} />
        <Knob label="Bass" onChange={handleBass} />
        <Knob label="Mid" onChange={handleMid} />
        <Knob label="Treble" onChange={handleTreble} />
      </KnobsWrapStyled>

      <CheckBox onClick={overDriveClick} on={overDrive} />
    </EqStyled>
  );
};

export default Eq;
