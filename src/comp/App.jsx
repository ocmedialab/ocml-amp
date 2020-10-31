import React, { useState, useRef, Fragment } from "react";
import { Knob, Pointer, Value, Arc } from "rc-knob";
import { UserGuide } from "./UserGuide";
import "./App.scss";
import amp from "../img/amp-bg.png";

const timeConstant = 0;

const App = () => {
  const visualizer = useRef(null);
  const overDriveEl = useRef(null);
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

  const handleVolume = (val) => {
    gainNode.gain.setTargetAtTime(val, context.currentTime, timeConstant);
    assignContext();
  };

  const handleBass = (val) => {
    bassEQ.gain.setTargetAtTime(val, context.currentTime, timeConstant);
    assignContext();
  };

  const handleMid = (val) => {
    midEQ.gain.setTargetAtTime(val, context.currentTime, timeConstant);
    assignContext();
  };

  const handleTreble = (val) => {
    trebleEQ.gain.setTargetAtTime(val, context.currentTime, timeConstant);
    assignContext();
  };

  // http://stackoverflow.com/questions/22312841/waveshaper-node-in-webaudio-how-to-emulate-distortion
  const makeDistortionCurve = (amount) => {
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
    return curve;
  };
  const overDriveClick = () => {
    setOverDrive(!overDrive);
    let overDriveOn;
    if (overDriveEl.current != null) {
      overDriveOn = !overDriveEl.current.checked;
    }
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
  function drawVisualizer() {
    resize();
    requestAnimationFrame(drawVisualizer);
    const viz = visualizer.current;
    const dataArray = new Uint8Array(bufferLength);
    analyserNode.getByteFrequencyData(dataArray);
    const width = viz.width;
    const height = viz.height;
    const barWidth = width / bufferLength;
    const canvasContext = viz.getContext("2d");
    cancelAnimationFrame(drawVisualizer);
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
    <Fragment>
      <UserGuide />
      <div className="amp--wrap">
        <div className="ocml-amp--controls">
          <div className="ocml-amp--controls--wrap">
            <label className="ocml-amp--controls--label">Volume</label>
            <Knob
              size={100}
              angleOffset={220}
              angleRange={280}
              min={0}
              max={100}
              className="ocml-amp--controls--knob"
              onChange={(e) => handleVolume(e / 100)}
            >
              <Arc arcWidth={5} color="#000000" radius={47.5} />
              <circle r="40" cx="50" cy="50" />
              <Pointer width={5} color="#000000" radius={40} type="circle" />
              <Value marginBottom={40} className="value" />
            </Knob>
          </div>
          <div className="ocml-amp--controls--wrap">
            <label className="ocml-amp--controls--label">Bass</label>
            <Knob
              size={100}
              angleOffset={220}
              angleRange={280}
              min={-100}
              max={100}
              className="ocml-amp--controls--knob"
              onChange={(e) => handleBass(e * 0.1)}
            >
              <Arc arcWidth={5} color="#000000" radius={47.5} />
              <circle r="40" cx="50" cy="50" />
              <Pointer width={5} color="#000000" radius={40} type="circle" />
              <Value marginBottom={40} className="value" />
            </Knob>
          </div>
          <div className="ocml-amp--controls--wrap">
            <label className="ocml-amp--controls--label">Mid</label>
            <Knob
              size={100}
              angleOffset={220}
              angleRange={280}
              min={-100}
              max={100}
              className="ocml-amp--controls--knob"
              onChange={(e) => handleMid(e * 0.1)}
            >
              <Arc arcWidth={5} color="#000000" radius={47.5} />
              <circle r="40" cx="50" cy="50" />
              <Pointer width={5} color="#000000" radius={40} type="circle" />
              <Value marginBottom={40} className="value" />
            </Knob>
          </div>
          <div className="ocml-amp--controls--wrap">
            <label className="ocml-amp--controls--label">Treble</label>
            <Knob
              size={100}
              angleOffset={220}
              angleRange={280}
              min={-100}
              max={100}
              className="ocml-amp--controls--knob"
              onChange={(e) => handleTreble(e * 0.1)}
            >
              <Arc arcWidth={5} color="#000000" radius={47.5} />
              <circle r="40" cx="50" cy="50" />
              <Pointer width={5} color="#000000" radius={40} type="circle" />
              <Value marginBottom={40} className="value" />
            </Knob>
          </div>
          <div className="ocml-amp--controls--wrap checkbox--wrap">
            <label className="ocml-amp--controls--label">Over Drive</label>
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
        <div className="ocml-amp--speaker">
          <img src={amp} className="ocml-amp--bg" alt="amp" />
          <canvas className="ocml-amp--viz" ref={visualizer} />
        </div>
      </div>
    </Fragment>
  );
};

export default App;
