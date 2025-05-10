import '@testing-library/jest-dom';
import * as matchers from '@testing-library/jest-dom/matchers';
import { cleanup } from '@testing-library/react';
import { vi } from 'vitest';

expect.extend(matchers);

afterEach(() => {
  cleanup();
});

globalThis.AudioContext = vi.fn().mockImplementation(() => ({
  state: 'running',
  currentTime: 0,
  resume: vi.fn().mockResolvedValue(undefined),
  createMediaStreamSource: vi.fn().mockReturnValue({
    connect: vi.fn(),
    disconnect: vi.fn(), // <-- add this
  }),
  createBiquadFilter() {
    return {
      type: '',
      frequency: { value: 0 },
      gain: { value: 0 },
      connect: jest.fn(),
      disconnect: jest.fn(),
    };
  },

  createWaveShaper: vi.fn().mockReturnValue({
    curve: null,
    oversample: 'none',
    connect: vi.fn(),
    disconnect: vi.fn(),
  }),

  destination: {
    connect: vi.fn(),
  },
}));

globalThis.GainNode = vi.fn().mockImplementation((context: any, options: any) => ({
  gain: {
    value: options.gain,
    setValueAtTime: vi.fn(),
  },
  connect: vi.fn(),
}));

globalThis.AnalyserNode = vi.fn().mockImplementation((context: any, options: any) => ({
  frequencyBinCount: 512,
  fftSize: options.fftSize,
  getByteFrequencyData: vi.fn(),
  getByteTimeDomainData: vi.fn(),
  connect: vi.fn(),
}));

globalThis.BiquadFilterNode = vi.fn().mockImplementation((context: any, options: any) => ({
  type: options.type || 'lowshelf',
  frequency: options.frequency || 500,
  gain: {
    value: options.gain || 0,
    setValueAtTime: vi.fn(),
  },
  connect: vi.fn(),
  getFrequencyResponse: vi.fn(),
}));

globalThis.MediaStream = class MediaStreamMock {} as any;

vi.stubGlobal('navigator', {
  mediaDevices: {
    getUserMedia: vi.fn().mockResolvedValue(new MediaStream()),
  },
});

// test/jest.setupTests.ts
Object.defineProperty(HTMLCanvasElement.prototype, 'getContext', {
  value: () => ({
    createLinearGradient: () => ({
      addColorStop: () => {},
    }),
    fillRect: () => {},
    clearRect: () => {},
    getImageData: () => ({ data: [] }),
    putImageData: () => {},
    createImageData: () => [],
    setTransform: () => {},
    drawImage: () => {},
    save: () => {},
    fillText: () => {},
    restore: () => {},
    beginPath: () => {},
    moveTo: () => {},
    lineTo: () => {},
    closePath: () => {},
    stroke: () => {},
    translate: () => {},
    scale: () => {},
    rotate: () => {},
    arc: () => {},
    fill: () => {},
    measureText: () => ({ width: 0 }),
    transform: () => {},
    rect: () => {},
    clip: () => {},
  }),
});
