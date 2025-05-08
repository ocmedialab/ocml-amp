import '@testing-library/jest-dom';
import { vi } from 'vitest';

// src/test/setup.ts

// Mock AudioContext
globalThis.AudioContext = vi.fn().mockImplementation(() => ({
  createGain: vi.fn().mockReturnValue({
    gain: {
      value: 0,
    },
  }),
  createWaveShaper: vi.fn().mockReturnValue({
    curve: null,
    oversample: 'none',
  }),
  createAnalyser: vi.fn().mockReturnValue({
    frequencyBinCount: 512,
    getByteFrequencyData: vi.fn(),
    getByteTimeDomainData: vi.fn(),
  }),
  createBiquadFilter: vi.fn().mockReturnValue({
    type: 'lowshelf',
    frequency: 500,
    gain: 0,
    getFrequencyResponse: vi.fn(),
  }),
}));

// Mock GainNode
globalThis.GainNode = vi.fn().mockImplementation((context: any, options: any) => ({
  gain: {
    value: options.gain,
  },
}));

// Mock AnalyserNode
globalThis.AnalyserNode = vi.fn().mockImplementation((context: any, options: any) => ({
  frequencyBinCount: 512,
  fftSize: options.fftSize,
  getByteFrequencyData: vi.fn(),
  getByteTimeDomainData: vi.fn(),
}));

// Mock BiquadFilterNode
globalThis.BiquadFilterNode = vi.fn().mockImplementation((context: any, options: any) => ({
  type: options.type || 'lowshelf',
  frequency: options.frequency || 500,
  gain: options.gain || 0,
  getFrequencyResponse: vi.fn(),
}));
