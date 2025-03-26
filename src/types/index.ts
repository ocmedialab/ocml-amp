import { MutableRefObject } from 'react';

export type ResizeViz = (viz: HTMLCanvasElement) => void;

export type UseAudio = (
  context: AudioContext,
  distortion: WaveShaperNode,
  bassEQ: BiquadFilterNode,
  midEQ: BiquadFilterNode,
  trebleEQ: BiquadFilterNode,
  gainNode: GainNode,
  analyserNode: AnalyserNode,
  bufferLength: number,
  overDrive: boolean
) => [() => Promise<void>];

export interface AmpContextType {
  canvas: MutableRefObject<HTMLCanvasElement | null>;
}

export interface AmpContextDefaultValue {
  canvas: MutableRefObject<HTMLCanvasElement | null>;
}

export type UseDistortionHook = (K?: number) => [Float32Array, Float32Array];
