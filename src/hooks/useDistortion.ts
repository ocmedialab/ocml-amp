import { useMemo } from 'react';

// Try k values around 300-500 for blues or soft overdrive.
// Increase to 700-1000 for metal/rock-style distortion.

const useDistortion = (k = 700) => {
  // http://stackoverflow.com/questions/22312841/waveshaper-node-in-webaudio-how-to-emulate-distortion
  const noCurve = new Float32Array(2);
  const nSamples = 44100; // Number of samples in the curve
  const curve = new Float32Array(nSamples);
  const deg = Math.PI / 180;

  for (let i = 0; i < nSamples; ++i) {
    const x = (i * 2) / nSamples - 1; // Normalize input range from -1 to 1
    curve[i] = ((3 + k) * x * 20 * deg) / (Math.PI + k * Math.abs(x));
  }

  const value = useMemo(() => [curve, noCurve], [curve, noCurve]);

  return [value[0], value[1]];
};

export default useDistortion;
