import { MutableRefObject, useCallback, useEffect, useRef } from 'react';

// Utility Types
export type ResizeViz = (viz: HTMLCanvasElement) => void;

const useVisualizer = (
  canvasRef: MutableRefObject<HTMLCanvasElement | null>,
  analyserNode: AnalyserNode,
  bufferLength: number,
) => {
  const animationFrameId = useRef<number>();
  const dataArray = useRef(new Uint8Array(bufferLength));

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
    animationFrameId.current = requestAnimationFrame(drawVisualizer);

    const { width, height } = viz;
    analyserNode.getByteFrequencyData(dataArray.current);

    const barWidth = width / bufferLength;
    const canvasContext = viz.getContext('2d');

    if (canvasContext) {
      canvasContext.clearRect(0, 0, width, height);
      dataArray.current.forEach((item, index) => {
        const y = ((item / 170) * height) / 2;
        const x = barWidth * index;
        const gradient = canvasContext.createLinearGradient(0, 0, height, 0);
        gradient.addColorStop(1, '#222222');
        gradient.addColorStop(0, '#000000');
        canvasContext.fillStyle = gradient;
        canvasContext.fillRect(x, height - y, barWidth, y);
      });
    }
  }, [canvasRef, analyserNode, bufferLength, resize]);

  // Cleanup function
  const cleanup = useCallback(() => {
    if (animationFrameId.current) {
      cancelAnimationFrame(animationFrameId.current);
    }
  }, []);

  useEffect(() => {
    drawVisualizer();

    return () => {
      cleanup();
    };
  }, []);
};

export default useVisualizer;
