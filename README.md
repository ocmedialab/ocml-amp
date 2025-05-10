# @ocmedialab/amp

> Open-Source web-based amp used for guitars and vocals created with react & typescript

![The OC Media Lab Amp](https://live.staticflickr.com/65535/54412723658_57beb7a8b3_b.jpg)

## ✨ Features

- ✅ Built with [Vite](https://vitejs.dev/) for lightning-fast builds
- 🎨 Fully styled with [Emotion](https://emotion.sh/docs/introduction)
- 🔧 TypeScript + strict linting for reliability
- 🔍 CI/CD pipeline with GitHub Actions
- 📦 Tree-shakeable ES modules
- 🔌 Future-ready: Composable components, CSS Modules support, and more

## 📦 Installation

```bash
# With npm
npm install @ocmedialab/amp
```

Add OCML Amp react component to your web project

```js
import { OcmlAmp } from '@ocmedialab/amp';

<OcmlAmp />;
```

## 🌐 Browser Compatibility

The amp simulator has been tested across different browsers and platforms. For the best experience:

### Recommended

- **Chrome Desktop** (Best Performance)
    - Optimal audio processing
    - Most accurate amp simulation
    - Best visualization performance
    - Recommended for professional use

### Supported

- **Safari Desktop**
    - Good performance
    - Slight differences in audio processing
    - Minor visualization differences

### Known Differences

- Audio processing varies between browsers due to different Web Audio API implementations
- Chrome provides the most accurate and consistent sound
- Safari may have slightly different EQ and distortion characteristics
- Mobile browsers may have reduced performance

For the most authentic amp experience, we recommend using Chrome Desktop.

## Local Development

![npm](https://img.shields.io/npm/v/@ocmedialab/amp?color=blue)
![license](https://img.shields.io/npm/l/@ocmedialab/amp)
![node](https://img.shields.io/node/v/@ocmedialab/amp)

```bash
npm run dev
```

This builds to `/dist` and runs the project in watch mode so any edits you save inside `src` causes a rebuild to `/dist`.

To do a one-off build, use `npm run build`

To run tests, use `npm test:react18`;

## Ownership and Contributions

This project is maintained by Marcus Badillo, OC Media Lab and is licensed under the MIT License.

We welcome contributions! If you'd like to contribute, please fork the repository, create a feature branch, and submit a pull request. All contributions will be reviewed and merged at the discretion of the project maintainers.

By contributing, you agree to license your contributions under the MIT License.

## 💡 Feature Requests and Contributions

We welcome feature requests and contributions!

- To suggest a feature, [open an issue](https://github.com/ocmedialab/ocml-amp/issues/new?template=feature_request.md).
- For pull requests, please review our [contributing guidelines](CONTRIBUTING.md).

## commits

[How to commit](https://github.com/conventional-changelog/commitlint/#what-is-commitlint)

## TODO / MAYBE - Cutting-Edge Web Audio

The following modern Web Audio API features are planned for future implementation:

1. **AudioWorklet for Custom Processing**
   - Custom distortion algorithms
   - Better performance for complex audio processing
   - More control over the signal chain

2. **ConvolverNode for Cabinet Simulation**
   - Realistic cabinet impulse responses
   - Different speaker types and mic positions
   - More authentic amp sound

3. **DynamicsCompressorNode**
   - Dynamic range control
   - Consistent sound levels
   - Authentic amp "squash"

4. **Spatial Audio with PannerNode**
   - Stereo width control
   - Multiple mic positions
   - Immersive sound experience

5. **WebGL Visualization**
   - High-performance audio visualization
   - Detailed frequency analysis
   - Responsive real-time graphics

6. **MediaStreamTrackAudioSourceNode**
   - Advanced input processing
   - Multiple input source support
   - Lower latency

7. **OfflineAudioContext**
   - Preset management
   - Offline audio processing
   - Professional features

8. **Stereo Processing**
   - Channel splitting and merging
   - Separate L/R processing
   - Complex stereo effects

9. **IIRFilterNode**
   - Precise EQ control
   - Custom filter responses
   - Advanced tone shaping

10. **AudioParam Automation**
    - Parameter automation
    - Dynamic effects
    - Expressive control
