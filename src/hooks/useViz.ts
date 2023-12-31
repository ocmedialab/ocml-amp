import { useContext } from 'react';
import AmpContext from '../context/AmpContext';
import { ResizeViz, UseVizHook } from '../../types';

const getAudio = () => {
  return navigator.mediaDevices.getUserMedia({
    audio: {
      echoCancellation: false,
      autoGainControl: false,
      noiseSuppression: false,
      latency: 0,
    },
  });
};

const useViz: UseVizHook = (
  context,
  distortion,
  bassEQ,
  midEQ,
  trebleEQ,
  gainNode,
  analyserNode,
  bufferLength
) => {
  const { canvas } = useContext(AmpContext);
  const assignContext = async () => {
    const audio = await getAudio();
    if (context.state === 'suspended') await context.resume();
    const source = context.createMediaStreamSource(audio);
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

  const resize: ResizeViz = viz => {
    viz.width = viz.clientWidth * window.devicePixelRatio;
    viz.height = viz.clientHeight * window.devicePixelRatio;
  };

  function drawVisualizer() {
    const viz = canvas.current;
    resize(viz);
    requestAnimationFrame(drawVisualizer);
    const { width, height } = viz;
    const dataArray = new Uint8Array(bufferLength);
    analyserNode.getByteFrequencyData(dataArray);
    const barWidth = width / bufferLength;
    const canvasContext = viz.getContext('2d');
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
