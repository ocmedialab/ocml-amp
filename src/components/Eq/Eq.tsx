import { useCallback, useEffect, useRef, useState } from 'react';
import useAudio from '../../hooks/useAudio';
import useDistortion from '../../hooks/useDistortion';
import CheckBox from '../share/CheckBox/CheckBox';
import Knob from '../share/Knob/Knob';
import { EqStyled, KnobsWrapStyled } from './Eq.styles';

const Eq = () => {
  const [context] = useState(new AudioContext());
  const gainNode = useRef(new GainNode(context, { gain: 0 }));
  const distortion = useRef<WaveShaperNode>(context.createWaveShaper());
  const [curve, noCurve] = useDistortion();
  const [overDrive, setOverDrive] = useState(false);
  const analyserNode = useRef(new AnalyserNode(context, { fftSize: 256 }));
  const [bufferLength] = useState(analyserNode.current.frequencyBinCount);
  const bassEQ = useRef(
    new BiquadFilterNode(context, {
      type: 'lowshelf',
      frequency: 500,
      gain: 0,
    }),
  );
  const midEQ = useRef(
    new BiquadFilterNode(context, {
      type: 'peaking',
      Q: Math.SQRT1_2,
      frequency: 1500,
      gain: 0,
    }),
  );
  const trebleEQ = useRef(
    new BiquadFilterNode(context, {
      type: 'highshelf',
      frequency: 3000,
      gain: 0,
    }),
  );

  const nodesConnected = useRef(false);

  const [assignContext] = useAudio(
    context,
    distortion.current,
    bassEQ.current,
    midEQ.current,
    trebleEQ.current,
    gainNode.current,
    analyserNode.current,
    bufferLength,
    overDrive,
  );

  useEffect(() => {
    if (!nodesConnected.current) {
      assignContext();
      nodesConnected.current = true;
    }
  }, [assignContext]);

  const overDriveClick = useCallback(() => {
    setOverDrive((od) => {
      const distortionOn = !od;
      if (distortion.current) {
        distortion.current.oversample = distortionOn ? '4x' : 'none';
        distortion.current.curve = distortionOn ? curve() : noCurve();
      }
      return distortionOn;
    });
  }, [curve, noCurve]);

  const handleKnobFactory = useCallback(
    (gain: AudioParam) => {
      return (value: number) => {
        // Convert the 0-100 range to a more appropriate gain range
        // For volume: 0-100 -> 0-1
        // For EQ: 0-100 -> -20 to +20 dB with bass emphasis
        const normalizedValue = value / 100;
        const targetValue =
          gain === gainNode.current.gain
            ? normalizedValue // Volume: 0-1
            : gain === bassEQ.current.gain
              ? normalizedValue * 40 - 20 // Bass: -20 to +20 dB
              : normalizedValue * 36 - 18; // Mid/Treble: -18 to +18 dB

        // Use exponentialRampToValueAtTime for smooth transitions
        const now = context.currentTime;
        gain.exponentialRampToValueAtTime(Math.max(0.0001, targetValue), now + 0.1);
      };
    },
    [context],
  );

  return (
    <EqStyled>
      <KnobsWrapStyled>
        <Knob label="Volume" onChange={handleKnobFactory(gainNode.current.gain)} />
        <Knob label="Bass" onChange={handleKnobFactory(bassEQ.current.gain)} />
        <Knob label="Mid" onChange={handleKnobFactory(midEQ.current.gain)} />
        <Knob label="Treble" onChange={handleKnobFactory(trebleEQ.current.gain)} />
      </KnobsWrapStyled>
      <CheckBox label="Over Drive" onClick={overDriveClick} on={overDrive} />
    </EqStyled>
  );
};

export default Eq;
