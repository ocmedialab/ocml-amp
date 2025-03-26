global.AudioContext = class {
  constructor() {
    this.state = 'suspended';
    this.createGain = jest.fn(() => ({ gain: { value: 0 } }));
    this.createWaveShaper = jest.fn(() => ({}));
    this.createAnalyser = jest.fn(() => ({
      fftSize: 256,
      frequencyBinCount: 128,
      getByteFrequencyData: jest.fn(),
    }));
  }
};

global.GainNode = class {
  constructor() {
    this.gain = { value: 0 };
  }
};

global.AnalyserNode = class {
  constructor(context, options) {
    this.context = context;
    this.fftSize = options.fftSize;
    this.frequencyBinCount = Math.floor(this.fftSize / 2);
    this.getByteFrequencyData = jest.fn();
  }
};

global.BiquadFilterNode = class BiquadFilterNode {};
