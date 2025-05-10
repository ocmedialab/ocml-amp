import useVisualizer from '@/hooks/useVisualizer';
import { useCallback, useContext, useEffect, useRef } from 'react';
import AmpContext from '../context/AmpContext';
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
  const sourceRef = useRef<MediaStreamAudioSourceNode | null>(null);
  useVisualizer(canvas, analyserNode, bufferLength);

  const assignContext = useCallback(async () => {
    const audio = await getAudio();
    if (context.state === 'suspended') {
      await context.resume();
    }
    sourceRef.current = context.createMediaStreamSource(audio);
    updateAudioChain();
  }, [context]);

  const safeDisconnect = useCallback((node: any) => {
    if (node && typeof node.disconnect === 'function') {
      node.disconnect();
    }
  }, []);

  const updateAudioChain = useCallback(() => {
    if (!sourceRef.current) return;

    // Disconnect all nodes
    safeDisconnect(sourceRef.current);
    safeDisconnect(distortion);
    safeDisconnect(bassEQ);
    safeDisconnect(midEQ);
    safeDisconnect(trebleEQ);
    safeDisconnect(gainNode);
    safeDisconnect(analyserNode);

    // Reconnect based on overDrive state
    if (overDrive) {
      setupAudioPipeline(
        sourceRef.current,
        [distortion, bassEQ, midEQ, trebleEQ, gainNode, analyserNode],
        context.destination,
      );
    } else {
      setupAudioPipeline(
        sourceRef.current,
        [bassEQ, midEQ, trebleEQ, gainNode, analyserNode],
        context.destination,
      );
    }
  }, [
    context,
    overDrive,
    distortion,
    bassEQ,
    midEQ,
    trebleEQ,
    gainNode,
    analyserNode,
    safeDisconnect,
  ]);

  // Update audio chain when overDrive changes
  useEffect(() => {
    updateAudioChain();
  }, [overDrive, updateAudioChain]);

  return [assignContext];
};

export default useAudio;
