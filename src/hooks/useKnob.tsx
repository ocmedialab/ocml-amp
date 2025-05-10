import { useCallback, useEffect, useRef, useState } from 'react';

const useKnob = (onChange: (percent: number) => void) => {
  const [knob, setKnob] = useState({
    id: 0,
    rotation: -132,
    active: false,
    selected: false,
    style: 1,
  });
  const currentY = useRef(0);
  const a = (knob.rotation + 132) / 264;
  const value = a * 100;
  const dashOffset = 184 - 184 * a;

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!knob.selected) return;

      const newRotation = Math.min(
        132,
        Math.max(-132, knob.rotation - (e.pageY - currentY.current)),
      );
      const percent = ((newRotation + 132) / 264) * 100;

      setKnob((prev) => ({
        ...prev,
        rotation: newRotation,
        active: percent >= 0.001,
      }));

      currentY.current = e.pageY;
      onChange(percent);
    },
    [knob.selected, knob.rotation, onChange],
  );

  const handleMouseUp = useCallback(() => {
    setKnob((prev) => ({
      ...prev,
      selected: false,
      active: prev.rotation !== -132,
    }));
  }, []);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setKnob((prev) => ({
      ...prev,
      selected: true,
    }));
    currentY.current = e.pageY;
  }, []);

  useEffect(() => {
    if (knob.selected) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [knob.selected, handleMouseMove, handleMouseUp]);

  return {
    knob,
    handleMouseDown,
    dashOffset,
    value,
  };
};

export default useKnob;
