import { useCallback, useContext } from 'react';
import AmpContext from '../context/AmpContext';
import useVisualizer from '../hooks/useVisualizer';
import { getAudio, setupAudioPipeline } from '../utils/audioUtils';

export type UseAudio = (
  context: AudioContext,
  distortion: WaveShaperNode,
  bassEQ: BiquadFilterNode,
  midEQ: BiquadFilterNode,
  trebleEQ: BiquadFilterNode,
  gainNode: GainNode,
  analyserNode: AnalyserNode,
  bufferLength: number,
  overDrive: boolean,
) => [() => Promise<void>];

const useAudio: UseAudio = (
  context,
  distortion,
  bassEQ,
  midEQ,
  trebleEQ,
  gainNode,
  analyserNode,
  bufferLength,
  overDrive,
) => {
  const { canvas } = useContext(AmpContext);
  const drawVisualizer = useVisualizer(canvas, analyserNode, bufferLength);

  const assignContext = useCallback(async () => {
    const audio = await getAudio();
    if (context.state === 'suspended') {
      await context.resume();
    }
    const source = context.createMediaStreamSource(audio);

    // Setup audio pipeline with or without distortion based on overDrive
    if (overDrive) {
      setupAudioPipeline(
        source,
        [distortion, bassEQ, midEQ, trebleEQ, gainNode, analyserNode],
        context.destination,
      );
    } else {
      setupAudioPipeline(
        source,
        [bassEQ, midEQ, trebleEQ, gainNode, analyserNode], // Clean path without distortion
        context.destination,
      );
    }

    // Start visualizing audio data
    drawVisualizer();
  }, [
    context,
    drawVisualizer,
    overDrive,
    distortion,
    bassEQ,
    midEQ,
    trebleEQ,
    gainNode,
    analyserNode,
  ]);

  return [assignContext];
};

export default useAudio;
