import { MutableRefObject, useCallback } from 'react';

// Utility Types
export type ResizeViz = (viz: HTMLCanvasElement) => void;

const useVisualizer = (
  canvasRef: MutableRefObject<HTMLCanvasElement | null>,
  analyserNode: AnalyserNode,
  bufferLength: number,
) => {
  const resize: ResizeViz = useCallback((viz: HTMLCanvasElement) => {
    if (viz) {
      viz.width = viz.clientWidth * window.devicePixelRatio;
      viz.height = viz.clientHeight * window.devicePixelRatio;
    }
  }, []);

  const drawVisualizer = useCallback(() => {
    const viz = canvasRef.current;
    if (!viz) return;

    resize(viz);
    requestAnimationFrame(drawVisualizer);

    const { width, height } = viz;
    const dataArray = new Uint8Array(bufferLength);
    analyserNode.getByteFrequencyData(dataArray);

    const barWidth = width / bufferLength;
    const canvasContext = viz.getContext('2d');

    if (canvasContext) {
      // Check if the context is valid
      dataArray.forEach((item, index) => {
        const y = ((item / 170) * height) / 2;
        const x = barWidth * index;
        const gradient = canvasContext.createLinearGradient(0, 0, height, 0);
        gradient.addColorStop(1, '#222222');
        gradient.addColorStop(0, '#000000');
        canvasContext.fillStyle = gradient;
        canvasContext.fillRect(x, height - y, barWidth, y);
      });
    }
  }, [canvasRef, analyserNode, bufferLength]);

  return drawVisualizer;
};

export default useVisualizer;
