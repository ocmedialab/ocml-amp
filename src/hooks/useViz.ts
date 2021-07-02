import { MutableRefObject } from 'react';

const getIntrument = () => {
  return navigator.mediaDevices.getUserMedia({
    audio: {
      echoCancellation: false,
      autoGainControl: false,
      noiseSuppression: false,
      latency: 0,
    },
  });
};

type UseVizHook = (
  context: AudioContext,
  distortion: WaveShaperNode,
  bassEQ: BiquadFilterNode,
  midE: BiquadFilterNode,
  trebleEQ: BiquadFilterNode,
  gainNode: GainNode,
  analyserNode: AnalyserNode,
  visualizer: MutableRefObject<HTMLCanvasElement | null>,
  bufferLength: number
) => [() => Promise<void>];

const useViz: UseVizHook = (
  context,
  distortion,
  bassEQ,
  midEQ,
  trebleEQ,
  gainNode,
  analyserNode,
  visualizer,
  bufferLength
) => {
  const assignContext = async () => {
    const intrument = await getIntrument();
    if (context.state === 'suspended') await context.resume();
    const source = context.createMediaStreamSource(intrument);
    console.log(source);
    source
      .connect(distortion)
      .connect(bassEQ)
      .connect(midEQ)
      .connect(trebleEQ)
      .connect(gainNode)
      .connect(analyserNode)
      .connect(context.destination);
    drawVisualizer();
  };

  const resize = () => {
    const viz = visualizer.current;
    if (viz != null) {
      viz.width = viz.clientWidth * window.devicePixelRatio;
      viz.height = viz.clientHeight * window.devicePixelRatio;
    }
  };

  function drawVisualizer() {
    resize();
    const myReq: number = requestAnimationFrame(drawVisualizer);
    const viz = visualizer.current as HTMLCanvasElement;
    const { width, height } = viz;
    const dataArray = new Uint8Array(bufferLength);
    analyserNode.getByteFrequencyData(dataArray);
    const barWidth = width / bufferLength;
    const canvasContext = viz.getContext('2d') as CanvasRenderingContext2D;

    cancelAnimationFrame(myReq);
    dataArray.forEach((item, index) => {
      const y = ((item / 170) * height) / 2;
      const x = barWidth * index;

      if (canvasContext) {
        const gradient = canvasContext.createLinearGradient(0, 0, height, 0);
        gradient.addColorStop(1, '#222222');
        gradient.addColorStop(0, '#000000');
        canvasContext.fillStyle = gradient;
        canvasContext.fillRect(x, height - y, barWidth, y);
      }
    });
  }

  return [assignContext];
};

export default useViz;
