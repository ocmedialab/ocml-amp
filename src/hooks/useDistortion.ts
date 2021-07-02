type UseDistortionHook = () => [Float32Array, Float32Array];

const useDistortion: UseDistortionHook = () => {
  // http://stackoverflow.com/questions/22312841/waveshaper-node-in-webaudio-how-to-emulate-distortion
  const noCurve = new Float32Array();

  const k = 400;
  const nSamples = 44100;
  const curve = new Float32Array(nSamples);
  const deg = Math.PI / 180;
  let i = 0;
  let x;

  for (; i < nSamples; ++i) {
    x = (i * 2) / nSamples - 1;
    curve[i] = ((3 + k) * x * 20 * deg) / (Math.PI + k * Math.abs(x));
  }

  return [curve, noCurve];
};

export default useDistortion;
