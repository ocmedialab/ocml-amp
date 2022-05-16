import { FC, MutableRefObject } from 'react';

type ResizeViz = (viz: HTMLCanvasElement | null) => void;

type UseVizHook = (
  context: AudioContext,
  distortion: WaveShaperNode,
  bassEQ: BiquadFilterNode,
  midE: BiquadFilterNode,
  trebleEQ: BiquadFilterNode,
  gainNode: GainNode,
  analyserNode: AnalyserNode,
  // visualizer: MutableRefObject<HTMLCanvasElement | null>,
  bufferLength: number
) => [() => Promise<void>];

type Amp = FC;
