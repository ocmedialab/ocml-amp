import { createContext } from 'react';

export type CanvasRef = {
  canvas: React.RefObject<HTMLCanvasElement>;
};

export type AudioNodes = {
  // audioContext: React.RefObject<AudioContext | null>;
  // analyser: React.RefObject<AnalyserNode | null>;
  // gainNode: React.RefObject<GainNode | null>;
  // bassFilter: React.RefObject<BiquadFilterNode | null>;
  // midFilter: React.RefObject<BiquadFilterNode | null>;
  // trebleFilter: React.RefObject<BiquadFilterNode | null>;
  // distortion: React.RefObject<WaveShaperNode | null>;
  // cleanup: () => void;
  // startRecording: () => void;
  // stopRecording: () => Promise<Blob>;
  // initializeNodes: () => Promise<void>;
};

export type AmpContextValue = {
  // initializeAudio: () => Promise<void>;
  // cleanup: () => void;
} & AudioNodes &
  CanvasRef;

const AmpContext = createContext<AmpContextValue>(null!);

export default AmpContext;
