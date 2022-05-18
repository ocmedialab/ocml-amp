import { FC, MutableRefObject } from 'react';

type ResizeViz = (viz: HTMLCanvasElement) => void;

type UseVizHook = (
  context: AudioContext,
  distortion: WaveShaperNode,
  bassEQ: BiquadFilterNode,
  midE: BiquadFilterNode,
  trebleEQ: BiquadFilterNode,
  gainNode: GainNode,
  analyserNode: AnalyserNode,
  bufferLength: number
) => [() => void];

type OcmlAmp = FC;
