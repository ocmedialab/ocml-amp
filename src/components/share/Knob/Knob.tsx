import cn from 'classnames';
import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';
import {
  DialPath,
  DialSvg,
  Knob2Styles,
  KnobActiveLight,
  KnobDial,
  KnobDialGrip,
  KnobLabel,
} from './Knob.styles';

const Knob = ({ label, onChange }: any) => {
  const [knob, setKnob] = useState({
    id: 0,
    rotation: -132,
    active: false,
    selected: false,
    style: 1,
  });
  const [currentY, setCurrentY] = useState(0);

  const mousemoveFunction = useCallback(
    (e: MouseEvent) => {
      if (!knob.selected) return;
      console.log('mousemoveFunction()');
      const newRotation = Math.min(
        132,
        Math.max(-132, knob.rotation - (e.pageY - currentY))
      );
      const percent = ((newRotation + 132) / 264) * 100;
      setKnob(prev => ({
        ...prev,
        rotation: newRotation,
        active: percent >= 0.001,
      }));
      setCurrentY(e.pageY);

      onChange(percent);
    },
    [currentY, knob.selected, knob.rotation]
  );

  const unselectKnobs = useCallback(() => {
    setKnob(prev => ({
      ...prev,
      selected: false,
      active: prev.rotation !== -132,
    }));
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', mousemoveFunction);
    window.addEventListener('mouseup', unselectKnobs);
    return () => {
      window.removeEventListener('mousemove', mousemoveFunction);
      window.removeEventListener('mouseup', unselectKnobs);
    };
  }, [mousemoveFunction, unselectKnobs]);

  const className = useMemo(() => cn([{ active: knob.active }]), [knob.active]);

  const dashOffset = useMemo(() => 184 - 184 * ((knob.rotation + 132) / 264), [
    knob.rotation,
  ]);

  const OnMouseDown = useCallback(
    (e: any) => {
      e.preventDefault();
      setKnob(prev => {
        return {
          ...prev,
          selected: true,
        };
      });

      setCurrentY(e.pageY);
    },
    [currentY, knob.selected, knob.rotation]
  );

  return (
    <Knob2Styles className={className}>
      <KnobActiveLight />
      <KnobDial>
        <KnobDialGrip $rotation={knob.rotation} onMouseDown={OnMouseDown} />
        <DialSvg>
          <DialPath $dashOffset={0} d="M20,76 A 40 40 0 1 1 80 76" />
          <DialPath d="M20,76 A 40 40 0 1 1 80 76" $dashOffset={dashOffset} />
        </DialSvg>
      </KnobDial>
      <KnobLabel>{label}</KnobLabel>
    </Knob2Styles>
  );
};

export default memo(Knob);

/*
  const [colorArray] = useState([
    '#23CDE8',
    '#23F376',
    '#FFFB43',
    '#FA9C34',
    '#21CD92',
    '#ED31A2',
    '#E22',
  ]);

  const [effects, setEffects] = useState([
    {
      id: 0,
      label: 'Spread',
      knobs: [
        { label: 'Amount', rotation: -132, selected: false },
        { label: 'Space', rotation: -132, selected: false },
        { label: 'High Pass', rotation: -132, selected: false },
      ],
      active: true,
      selected: false,
      color: '#23F376',
      knobStyle: 1,
    },
    {
      id: 1,
      label: 'Chorus',
      knobs: [
        { label: 'Dry/Wet', rotation: -132, selected: false },
        { label: 'Rate', rotation: -132, selected: false },
        { label: 'Feedback', rotation: -132, selected: false },
      ],
      active: true,
      selected: false,
      color: '#ED31A2',
      knobStyle: 2,
    },
    {
      id: 2,
      label: 'Delay',
      knobs: [
        { label: 'Dry/Wet', rotation: -132, selected: false },
        { label: 'Time', rotation: -132, selected: false },
        { label: 'Fine', rotation: -132, selected: false },
      ],
      active: true,
      selected: false,
      color: '#FA9C34',
      knobStyle: 3,
    },
  ]);



  <div className="rela-block container">
    {effects.map(effect => (
    <div
      key={effect.id}
      className="rela-inline effect-container"
      onMouseDown={() => {
        effect.selected = true;
      }}
    >
      <div className="rela-block effect-label">
        <div
          className="rela-inline effect-active-light"
          style={{
            backgroundColor: effect.active ? effect.color : '#888',
          }}
          onClick={() => {
            effect.active = !effect.active;
          }}
        ></div>
        {effect.label}
      </div>
      <div className="rela-block knob-container">
        {effect.knobs.map(knob => (
          <div
            key={knob.label}
            className={`rela-inline knob style${effect.knobStyle}`}
          >
            <div
              className="rela-block knob-dial"
              style={{ color: effect.active ? effect.color : '#888' }}
            >
              <div
                className="abs-center dial-grip"
                style={{
                  transform: `translate(-50%,-50%) rotate(${knob.rotation}deg)`,
                }}
                onMouseDown={event => {
                  knob.selected = true;
                  setCurrentY(event.pageY);
                  event.preventDefault();
                }}
              ></div>
              <svg className="dial-svg" viewBox="0 0 100 100">
                <path
                  d="M20,76 A 40 40 0 1 1 80 76"
                  fill="none"
                  stroke="#55595C"
                />
                <path
                  d="M20,76 A 40 40 0 1 1 80 76"
                  fill="none"
                  style={{
                    stroke: effect.active ? effect.color : '#888',
                    strokeDashoffset:
                      184 - 184 * ((knob.rotation + 132) / 264),
                  }}
                />
              </svg>
            </div>
            <div
              className="rela-block knob-label"
              style={{ color: effect.active ? '#E4E8EA' : '#888' }}
            >
              {knob.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  ))} 
  <br />
</div>*/

// {
//   id: 1,
//   label: 'Test Knob 2',
//   rotation: -132,
//   color: '#21CD92',
//   active: true,
//   selected: false,
//   style: 1,
// },
// {
//   id: 2,
//   label: 'Test Knob 3',
//   rotation: -132,
//   color: '#ED31A2',
//   active: true,
//   selected: false,
//   style: 3,
// },
// {
//   id: 3,
//   label: 'Test Knob 4',
//   rotation: -132,
//   color: '#FFFB43',
//   active: true,
//   selected: false,
//   style: 3,
// },
// {
//   id: 4,
//   label: 'Test Knob 5',
//   rotation: -132,
//   color: '#23CDE8',
//   active: true,
//   selected: false,
//   style: 2,
// },
// {
//   id: 5,
//   label: 'Test Knob 6',
//   rotation: -132,
//   color: '#E22',
//   active: true,
//   selected: false,
//   style: 2,
// },

// const selectedEffect = effects.find(effect => effect.selected);
// const selectedKnob = selectedEffect
//   ? selectedEffect.knobs.find(knob => knob.selected)
//   : knobs.find(knob => knob.selected);

/* 
  <svg className="dial-svg" viewBox="0 0 100 100">
          <path d="M20,76 A 40 40 0 1 1 80 76" fill="none" stroke="#55595C" />
          <path
            d="M20,76 A 40 40 0 1 1 80 76"
            fill="none"
            style={{
              stroke: knob.active ? '#FA9C34' : '#888',
              strokeDashoffset: 184 - 184 * ((knob.rotation + 132) / 264),
            }}
          />
        </svg> */

// const onMouseDown: MouseEventHandler = useCallback((event) => {
//   console.log('onMouseDown');
//   event.preventDefault();
//   setKnob( (prev )=>   {
//     if(prev.selected) return prev;
//     return { ...prev, selected: true }
//   });
//   setCurrentY(event.pageY);
// }, [])
