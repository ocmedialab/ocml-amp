import React, { useState, useRef, MutableRefObject } from "react";
import Knob from "rc-knob";
import Pointer from "rc-knob";
import Value from "rc-knob";
import Arc from "rc-knob";
import { UserGuide } from "./UserGuide";
import "./App.scss";
import amp from "../img/amp-bg.png";

interface Viz extends MutableRefObject<any> {
  width?: number;
  height?: number;
  current: any;
}

interface CheckInput extends MutableRefObject<any> {
  checked?: boolean | undefined;
  current: any;
}

const timeConstant = 0;

const App = () => {
  const visualizer: Viz = useRef(null);
  const overDriveEl: CheckInput = useRef(null);
  const [overDrive, setOverDrive] = useState(() => false);
  const [context] = useState(() => new AudioContext());
  const [gainNode] = useState(() => new GainNode(context, { gain: 0 }));
  const [analyserNode] = useState(
    () => new AnalyserNode(context, { fftSize: 256 })
  );
  const [bufferLength] = useState(() => analyserNode.frequencyBinCount);
  const [bassEQ] = useState(
    () =>
      new BiquadFilterNode(context, {
        type: "lowshelf",
        frequency: 500,
        gain: 0,
      })
  );
  const [midEQ] = useState(
    () =>
      new BiquadFilterNode(context, {
        type: "peaking",
        Q: Math.SQRT1_2,
        frequency: 1500,
        gain: 0,
      })
  );
  const [trebleEQ] = useState(
    () =>
      new BiquadFilterNode(context, {
        type: "highshelf",
        frequency: 3000,
        gain: 0,
      })
  );

  const [distortion] = useState(() => context.createWaveShaper());

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

  const resize = () => {
    const viz = visualizer.current;
    if (viz != null) {
      viz.width = viz.clientWidth * window.devicePixelRatio;
      viz.height = viz.clientHeight * window.devicePixelRatio;
    }
  };

  const handleVolume = (val: number) => {
    gainNode.gain.setTargetAtTime(val, context.currentTime, timeConstant);
    assignContext();
  };

  const handleBass = (val: number) => {
    bassEQ.gain.setTargetAtTime(val, context.currentTime, timeConstant);
    assignContext();
  };

  const handleMid = (val: number) => {
    midEQ.gain.setTargetAtTime(val, context.currentTime, timeConstant);
    assignContext();
  };

  const handleTreble = (val: number) => {
    trebleEQ.gain.setTargetAtTime(val, context.currentTime, timeConstant);
    assignContext();
  };

  // http://stackoverflow.com/questions/22312841/waveshaper-node-in-webaudio-how-to-emulate-distortion
  const makeDistortionCurve = (amount: number) => {
    var k = typeof amount === "number" ? amount : 50,
      n_samples = 44100,
      curve = new Float32Array(n_samples),
      deg = Math.PI / 180,
      i = 0,
      x;
    for (; i < n_samples; ++i) {
      x = (i * 2) / n_samples - 1;
      curve[i] = ((3 + k) * x * 20 * deg) / (Math.PI + k * Math.abs(x));
    }
    console.log(curve);
    return curve;
  };
  const overDriveClick = () => {
    setOverDrive(!overDrive);
    let overDriveOn;
    if (overDriveEl.current != null) {
      overDriveOn = !overDriveEl.current.checked;
    }
    console.log(overDriveOn);
    if (overDriveOn === true) {
      distortion.oversample = "4x";
      distortion.curve = makeDistortionCurve(400);
    } else {
      distortion.oversample = "none";
      distortion.curve = new Float32Array();
    }
  };

  const assignContext = async () => {
    const intrument = await getIntrument();
    if (context.state === "suspended") await context.resume();
    const source = context.createMediaStreamSource(intrument);
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
  function drawVisualizer(): void {
    resize();
    requestAnimationFrame(drawVisualizer);
    const viz = visualizer.current;
    const dataArray = new Uint8Array(bufferLength);
    analyserNode.getByteFrequencyData(dataArray);
    const width = viz.width;
    const height = viz.height;
    const barWidth = width / bufferLength;
    const canvasContext = viz.getContext("2d");
    // cancelAnimationFrame(drawVisualizer);
    dataArray.forEach((item, index) => {
      const y = ((item / 170) * height) / 2;
      const x = barWidth * index;
      const gradient = canvasContext.createLinearGradient(0, 0, height, 0);
      gradient.addColorStop(1, "#222222");
      gradient.addColorStop(0, "#000000");
      canvasContext.fillStyle = gradient;
      canvasContext.fillRect(x, height - y, barWidth, y);
    });
  }
  return (
    <div>
      <UserGuide />
      <div className="amp--wrap">
        <div className="amp--controls">
          <div className="amp--controls--wrap">
            <label className="amp--controls--label">Volume</label>
            <Knob
              size={100}
              angleOffset={220}
              angleRange={280}
              min={0}
              max={100}
              className="amp--controls--knob"
              onChange={(e: number) => handleVolume(e / 100)}
            >
              <Arc arcWidth={5} color="#000000" radius={47.5} />
              <circle r="40" cx="50" cy="50" />
              <Pointer width={5} color="#000000" radius={40} type="circle" />
              <Value marginBottom={40} className="value" />
            </Knob>
          </div>
          <div className="amp--controls--wrap">
            <label className="amp--controls--label">Bass</label>
            <Knob
              size={100}
              angleOffset={220}
              angleRange={280}
              min={-100}
              max={100}
              className="amp--controls--knob"
              onChange={(e: number) => handleBass(e * 0.1)}
            >
              <Arc arcWidth={5} color="#000000" radius={47.5} />
              <circle r="40" cx="50" cy="50" />
              <Pointer width={5} color="#000000" radius={40} type="circle" />
              <Value marginBottom={40} className="value" />
            </Knob>
          </div>
          <div className="amp--controls--wrap">
            <label className="amp--controls--label">Mid</label>
            <Knob
              size={100}
              angleOffset={220}
              angleRange={280}
              min={-100}
              max={100}
              className="amp--controls--knob"
              onChange={(e: number) => handleMid(e * 0.1)}
            >
              <Arc arcWidth={5} color="#000000" radius={47.5} />
              <circle r="40" cx="50" cy="50" />
              <Pointer width={5} color="#000000" radius={40} type="circle" />
              <Value marginBottom={40} className="value" />
            </Knob>
          </div>
          <div className="amp--controls--wrap">
            <label className="amp--controls--label">Treble</label>
            <Knob
              size={100}
              angleOffset={220}
              angleRange={280}
              min={-100}
              max={100}
              className="amp--controls--knob"
              onChange={(e: number) => handleTreble(e * 0.1)}
            >
              <Arc arcWidth={5} color="#000000" radius={47.5} />
              <circle r="40" cx="50" cy="50" />
              <Pointer width={5} color="#000000" radius={40} type="circle" />
              <Value marginBottom={40} className="value" />
            </Knob>
          </div>
          <div className="amp--controls--wrap checkbox--wrap">
            <label className="amp--controls--label">Over Drive</label>
            <input
              ref={overDriveEl}
              className="checkbox"
              type="checkbox"
              readOnly
              checked={overDrive}
            />
            <span onClick={overDriveClick} className="checkmark" />
          </div>
        </div>
        <div className="amp--speaker">
          <img src={amp} className="amp--bg" alt="amp" />
          <canvas className="amp--viz" ref={visualizer} />
        </div>
      </div>
    </div>
  );
};

export default App;
