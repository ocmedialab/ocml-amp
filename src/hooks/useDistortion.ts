import { useCallback } from 'react';

const useDistortion = () => {
  const curve = useCallback(() => {
    // Try k values around 300-500 for blues or soft overdrive.
    // Increase to 700-1000 for metal/rock-style distortion.
    const k = 1000;
    const DEG = Math.PI / 180;
    const n_samples = 44100;
    const curve = new Float32Array(n_samples);
    curve.forEach((_, i) => {
      const x = (i * 2) / n_samples - 1;
      curve[i] = ((3 + k) * x * 20 * DEG) / (Math.PI + k * Math.abs(x));
    });
    return curve;
  }, []);

  // No distortion curve (linear response)
  const noCurve = useCallback(() => {
    const samples = 44100;
    const curve = new Float32Array(samples);
    for (let i = 0; i < samples; i++) {
      const x = (i * 2) / samples - 1;
      curve[i] = x;
    }
    return curve;
  }, []);

  return [curve, noCurve];
};

export default useDistortion;
