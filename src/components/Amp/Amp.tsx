import React, { FC, useState, useRef } from 'react';
// https://javascript.plainenglish.io/write-react-functional-components-and-hooks-with-typescript-cd1539e2bc2a
// import { Knob, Pointer, Value, Arc } from 'rc-knob';
import Cabinent, { CabinetType } from '../Cabinet/Cabinet';
// import amp from '../img/amp-bg.png';
// const timeConstant = 0;

const App: FC = () => {
  const [cabinetType] = useState(CabinetType.one);
  const visualizer = useRef<null | HTMLCanvasElement>(null);
  // const overDriveEl = useRef<null | HTMLInputElement>(null);
  // const [overDrive, setOverDrive] = useState(() => false);
  // const [context] = useState(() => new AudioContext());
  // const [gainNode] = useState(() => new GainNode(context, { gain: 0 }));
  // const [analyserNode] = useState(() => new AnalyserNode(context, { fftSize: 256 }));
  // const [bufferLength] = useState(() => analyserNode.frequencyBinCount);
  // const [bassEQ] = useState(
  //   () =>
  //     new BiquadFilterNode(context, {
  //       type: 'lowshelf',
  //       frequency: 500,
  //       gain: 0,
  //     })
  // );
  // const [midEQ] = useState(
  //   () =>
  //     new BiquadFilterNode(context, {
  //       type: 'peaking',
  //       Q: Math.SQRT1_2,
  //       frequency: 1500,
  //       gain: 0,
  //     })
  // );
  // const [trebleEQ] = useState(
  //   () =>
  //     new BiquadFilterNode(context, {
  //       type: 'highshelf',
  //       frequency: 3000,
  //       gain: 0,
  //     })
  // );

  // const [distortion] = useState(() => context.createWaveShaper());

  // const getIntrument = () =>
  //   navigator.mediaDevices.getUserMedia({
  //     audio: {
  //       echoCancellation: false,
  //       autoGainControl: false,
  //       noiseSuppression: false,
  //       latency: 0,
  //     },
  //   });

  // const resize = () => {
  //   const viz = visualizer.current;
  //   if (viz != null) {
  //     viz.width = viz.clientWidth * window.devicePixelRatio;
  //     viz.height = viz.clientHeight * window.devicePixelRatio;
  //   }
  // };

  // function drawVisualizer() {
  //   resize();
  //   requestAnimationFrame(drawVisualizer);
  //   const viz = visualizer.current as HTMLCanvasElement;
  //   const { width, height } = viz;
  //   const dataArray = new Uint8Array(bufferLength);
  //   analyserNode.getByteFrequencyData(dataArray);
  //   const barWidth = width / bufferLength;
  //   const canvasContext = viz.getContext('2d') as CanvasRenderingContext2D;

  //   cancelAnimationFrame(drawVisualizer as any);
  //   dataArray.forEach((item, index) => {
  //     const y = ((item / 170) * height) / 2;
  //     const x = barWidth * index;

  //     if (canvasContext) {
  //       const gradient = canvasContext.createLinearGradient(0, 0, height, 0);
  //       gradient.addColorStop(1, '#222222');
  //       gradient.addColorStop(0, '#000000');
  //       canvasContext.fillStyle = gradient;
  //       canvasContext.fillRect(x, height - y, barWidth, y);
  //     }
  //   });
  // }

  // const assignContext = async () => {
  //   const intrument = await getIntrument();
  //   if (context.state === 'suspended') await context.resume();
  //   const source = context.createMediaStreamSource(intrument);
  //   console.log(source);
  //   source
  //     .connect(distortion)
  //     .connect(bassEQ)
  //     .connect(midEQ)
  //     .connect(trebleEQ)
  //     .connect(gainNode)
  //     .connect(analyserNode)
  //     .connect(context.destination);
  //   drawVisualizer();
  // };
  // const handleVolume = (val: number) => {
  //   gainNode.gain.setTargetAtTime(val, context.currentTime, timeConstant);
  //   assignContext();
  // };

  // const handleBass = (val: number) => {
  //   bassEQ.gain.setTargetAtTime(val, context.currentTime, timeConstant);
  //   assignContext();
  // };

  // const handleMid = (val: number) => {
  //   midEQ.gain.setTargetAtTime(val, context.currentTime, timeConstant);
  //   assignContext();
  // };

  // const handleTreble = (val: number) => {
  //   trebleEQ.gain.setTargetAtTime(val, context.currentTime, timeConstant);
  //   assignContext();
  // };

  // // http://stackoverflow.com/questions/22312841/waveshaper-node-in-webaudio-how-to-emulate-distortion
  // const makeDistortionCurve = (amount: number) => {
  //   const k = typeof amount === 'number' ? amount : 50;
  //   const nSamples = 44100;
  //   const curve = new Float32Array(nSamples);
  //   const deg = Math.PI / 180;
  //   let i = 0;
  //   let x;
  //   for (; i < nSamples; ++i) {
  //     x = (i * 2) / nSamples - 1;
  //     curve[i] = ((3 + k) * x * 20 * deg) / (Math.PI + k * Math.abs(x));
  //   }
  //   return curve;
  // };
  // const overDriveClick = () => {
  //   setOverDrive(!overDrive);
  //   let overDriveOn;
  //   if (overDriveEl.current !== null) {
  //     overDriveOn = !overDriveEl.current.checked;

  //     if (overDriveOn === true) {
  //       distortion.oversample = '4x';
  //       distortion.curve = makeDistortionCurve(400);
  //     } else {
  //       distortion.oversample = 'none';
  //       distortion.curve = new Float32Array();
  //     }
  //   }
  // };

  return (
    <>
      {/* <div className="ocml-amp--controls">
        <div className="ocml-amp--controls--wrap">
          <div className="ocml-amp--controls--label">Volume</div>
          <Knob
            id="knob-volume"
            size={100}
            angleOffset={220}
            angleRange={280}
            min={0}
            max={100}
            className="ocml-amp--controls--knob"
            onChange={(volume: number) => handleVolume(volume / 100)}
          >
            <Arc arcWidth={5} color="#000000" radius={47.5} />
            <circle r="40" cx="50" cy="50" />
            <Pointer width={5} color="#000000" radius={40} type="circle" />
            <Value marginBottom={40} className="value" />
          </Knob>
        </div>
        <div className="ocml-amp--controls--wrap">
          <div className="ocml-amp--controls--label">Bass</div>
          <Knob
            size={100}
            angleOffset={220}
            angleRange={280}
            min={-100}
            max={100}
            className="ocml-amp--controls--knob"
            onChange={(bass: number) => handleBass(bass * 0.1)}
          >
            <Arc arcWidth={5} color="#000000" radius={47.5} />
            <circle r="40" cx="50" cy="50" />
            <Pointer width={5} color="#000000" radius={40} type="circle" />
            <Value marginBottom={40} className="value" />
          </Knob>
        </div>
        <div className="ocml-amp--controls--wrap">
          <div className="ocml-amp--controls--label">Mid</div>
          <Knob
            size={100}
            angleOffset={220}
            angleRange={280}
            min={-100}
            max={100}
            className="ocml-amp--controls--knob"
            onChange={(mid: number) => handleMid(mid * 0.1)}
          >
            <Arc arcWidth={5} color="#000000" radius={47.5} />
            <circle r="40" cx="50" cy="50" />
            <Pointer width={5} color="#000000" radius={40} type="circle" />
            <Value marginBottom={40} className="value" />
          </Knob>
        </div>
        <div className="ocml-amp--controls--wrap">
          <div className="ocml-amp--controls--label">Treble</div>
          <Knob
            id="knob-treble"
            size={100}
            angleOffset={220}
            angleRange={280}
            min={-100}
            max={100}
            className="ocml-amp--controls--knob"
            onChange={(treble: number) => handleTreble(treble * 0.1)}
          >
            <Arc arcWidth={5} color="#000000" radius={47.5} />
            <circle r="40" cx="50" cy="50" />
            <Pointer width={5} color="#000000" radius={40} type="circle" />
            <Value marginBottom={40} className="value" />
          </Knob>
        </div>
        <div className="ocml-amp--controls--wrap checkbox--wrap">
          <div className="ocml-amp--controls--label">Over Drive</div>
          <input
            ref={overDriveEl}
            className="checkbox"
            type="checkbox"
            readOnly
            checked={overDrive}
          />
          <span onClick={overDriveClick} className="checkmark" />
        </div>
      </div> */}
      <Cabinent visualizer={visualizer} cabinetType={cabinetType} />
    </>
  );
};

export default App;
